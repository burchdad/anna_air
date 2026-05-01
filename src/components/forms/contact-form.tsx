"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  urgencyWindow: string;
  preferredContact: "call" | "text" | "email";
  smsOptIn: boolean;
  isEmergency: boolean;
};

type AttributionState = {
  landingPage: string;
  referrer: string;
  userAgent: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  gclid: string;
  fbclid: string;
  msclkid: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  urgencyWindow: "today",
  preferredContact: "call",
  smsOptIn: false,
  isEmergency: false,
};

const initialAttribution: AttributionState = {
  landingPage: "",
  referrer: "",
  userAgent: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmTerm: "",
  utmContent: "",
  gclid: "",
  fbclid: "",
  msclkid: "",
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqbwqre";

function getAttributionFromBrowser(): AttributionState {
  if (typeof window === "undefined") {
    return initialAttribution;
  }

  const params = new URLSearchParams(window.location.search);

  return {
    landingPage: window.location.href,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    utmSource: params.get("utm_source") ?? "",
    utmMedium: params.get("utm_medium") ?? "",
    utmCampaign: params.get("utm_campaign") ?? "",
    utmTerm: params.get("utm_term") ?? "",
    utmContent: params.get("utm_content") ?? "",
    gclid: params.get("gclid") ?? "",
    fbclid: params.get("fbclid") ?? "",
    msclkid: params.get("msclkid") ?? "",
  };
}

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [attribution] = useState<AttributionState>(getAttributionFromBrowser);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = useMemo(
    () => [
      "AC Repair",
      "System Check / Maintenance",
      "Complete Installation",
      "Emergency HVAC Service",
      "Ductwork / Airflow",
    ],
    [],
  );

  function validate(values: FormState) {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.phone.trim()) nextErrors.phone = "Please enter a callback phone number.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.service.trim()) nextErrors.service = "Please select a service type.";
    if (!values.message.trim()) nextErrors.message = "Please include a short description.";

    return nextErrors;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");

    const nextErrors = validate(state);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: state.name,
          phone: state.phone,
          email: state.email,
          service: state.service,
          message: state.message,
          urgency: state.urgencyWindow,
          preferred_contact: state.preferredContact,
          sms_opt_in: state.smsOptIn ? "Yes" : "No",
          emergency: state.isEmergency ? "YES - EMERGENCY" : "No",
          submitted_at: new Date().toISOString(),
          utm_source: attribution.utmSource,
          utm_medium: attribution.utmMedium,
          utm_campaign: attribution.utmCampaign,
          gclid: attribution.gclid,
          fbclid: attribution.fbclid,
        }),
      });

      if (!response.ok) {
        throw new Error("lead-submit-failed");
      }

      setStatus("success");
      setState(initialState);
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="space-y-4 rounded-3xl border border-pink-200 bg-white p-6 shadow-sm sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1.5 text-sm">
          <span className="font-medium text-slate-800">Full Name</span>
          <input
            value={state.name}
            onChange={(event) => setState((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-xl border border-pink-200 px-3 py-2.5 text-sm outline-none ring-pink-200 transition focus:border-pink-400 focus:ring"
            name="name"
            autoComplete="name"
          />
          {errors.name ? <span className="text-xs text-pink-700">{errors.name}</span> : null}
        </label>

        <label className="space-y-1.5 text-sm">
          <span className="font-medium text-slate-800">Phone</span>
          <input
            value={state.phone}
            onChange={(event) => setState((prev) => ({ ...prev, phone: event.target.value }))}
            className="w-full rounded-xl border border-pink-200 px-3 py-2.5 text-sm outline-none ring-pink-200 transition focus:border-pink-400 focus:ring"
            name="phone"
            autoComplete="tel"
          />
          {errors.phone ? <span className="text-xs text-pink-700">{errors.phone}</span> : null}
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1.5 text-sm">
          <span className="font-medium text-slate-800">How soon do you need service?</span>
          <select
            value={state.urgencyWindow}
            onChange={(event) => setState((prev) => ({ ...prev, urgencyWindow: event.target.value }))}
            className="w-full rounded-xl border border-pink-200 px-3 py-2.5 text-sm outline-none ring-pink-200 transition focus:border-pink-400 focus:ring"
            name="urgencyWindow"
          >
            <option value="now">As soon as possible</option>
            <option value="today">Today</option>
            <option value="this-week">This week</option>
            <option value="flexible">I am flexible</option>
          </select>
        </label>

        <label className="space-y-1.5 text-sm">
          <span className="font-medium text-slate-800">Best way to reach you</span>
          <select
            value={state.preferredContact}
            onChange={(event) =>
              setState((prev) => ({
                ...prev,
                preferredContact: event.target.value as FormState["preferredContact"],
              }))
            }
            className="w-full rounded-xl border border-pink-200 px-3 py-2.5 text-sm outline-none ring-pink-200 transition focus:border-pink-400 focus:ring"
            name="preferredContact"
          >
            <option value="call">Call me</option>
            <option value="text">Text me</option>
            <option value="email">Email me</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1.5 text-sm">
          <span className="font-medium text-slate-800">Email</span>
          <input
            value={state.email}
            onChange={(event) => setState((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-xl border border-pink-200 px-3 py-2.5 text-sm outline-none ring-pink-200 transition focus:border-pink-400 focus:ring"
            name="email"
            autoComplete="email"
          />
          {errors.email ? <span className="text-xs text-pink-700">{errors.email}</span> : null}
        </label>

        <label className="space-y-1.5 text-sm">
          <span className="font-medium text-slate-800">Service Needed</span>
          <select
            value={state.service}
            onChange={(event) => setState((prev) => ({ ...prev, service: event.target.value }))}
            className="w-full rounded-xl border border-pink-200 px-3 py-2.5 text-sm outline-none ring-pink-200 transition focus:border-pink-400 focus:ring"
            name="service"
          >
            <option value="">Select one</option>
            {serviceOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.service ? <span className="text-xs text-pink-700">{errors.service}</span> : null}
        </label>
      </div>

      <label className="space-y-1.5 text-sm">
        <span className="font-medium text-slate-800">How can we help?</span>
        <textarea
          value={state.message}
          onChange={(event) => setState((prev) => ({ ...prev, message: event.target.value }))}
          className="min-h-28 w-full rounded-xl border border-pink-200 px-3 py-2.5 text-sm outline-none ring-pink-200 transition focus:border-pink-400 focus:ring"
          name="message"
        />
        {errors.message ? <span className="text-xs text-pink-700">{errors.message}</span> : null}
      </label>

      <label className="inline-flex items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={state.isEmergency}
          onChange={(event) =>
            setState((prev) => ({ ...prev, isEmergency: event.target.checked }))
          }
          className="h-4 w-4 rounded border-pink-300 text-pink-600 focus:ring-pink-500"
        />
        This is an emergency service request
      </label>

      <label className="inline-flex items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={state.smsOptIn}
          onChange={(event) => setState((prev) => ({ ...prev, smsOptIn: event.target.checked }))}
          className="h-4 w-4 rounded border-pink-300 text-pink-600 focus:ring-pink-500"
        />
        I agree to receive service updates by text message
      </label>

      <input type="hidden" name="utm_source" value={attribution.utmSource} readOnly />
      <input type="hidden" name="utm_medium" value={attribution.utmMedium} readOnly />
      <input type="hidden" name="utm_campaign" value={attribution.utmCampaign} readOnly />
      <input type="hidden" name="utm_term" value={attribution.utmTerm} readOnly />
      <input type="hidden" name="utm_content" value={attribution.utmContent} readOnly />
      <input type="hidden" name="gclid" value={attribution.gclid} readOnly />
      <input type="hidden" name="fbclid" value={attribution.fbclid} readOnly />
      <input type="hidden" name="msclkid" value={attribution.msclkid} readOnly />

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-pink-500 px-5 py-3 text-sm font-semibold text-white transition hover:from-pink-700 hover:to-pink-600 shadow-lg sm:w-auto"
      >
        {isSubmitting ? "Sending Request..." : "Request Service"}
      </button>

      {status === "success" ? (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          Thank you. Your request was sent successfully. Anna&apos;s Air will follow up using your
          preferred contact method.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-xl border border-pink-200 bg-pink-50 px-3 py-2 text-sm text-pink-800">
          Please review the highlighted fields and try again.
        </p>
      ) : null}
    </form>
  );
}
