"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  isEmergency: boolean;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  isEmergency: false,
};

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const serviceOptions = useMemo(
    () => [
      "AC Repair",
      "Heating Repair",
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

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");

    const nextErrors = validate(state);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    // Integration hook: send payload to CRM, email API, SMS workflow, or booking system.
    // Example targets: HubSpot forms API, Zapier webhook, custom Next.js route, or scheduling provider.
    setStatus("success");
    setState(initialState);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1.5 text-sm">
          <span className="font-medium text-slate-800">Full Name</span>
          <input
            value={state.name}
            onChange={(event) => setState((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-rose-200 transition focus:border-rose-400 focus:ring"
            name="name"
            autoComplete="name"
          />
          {errors.name ? <span className="text-xs text-rose-700">{errors.name}</span> : null}
        </label>

        <label className="space-y-1.5 text-sm">
          <span className="font-medium text-slate-800">Phone</span>
          <input
            value={state.phone}
            onChange={(event) => setState((prev) => ({ ...prev, phone: event.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-rose-200 transition focus:border-rose-400 focus:ring"
            name="phone"
            autoComplete="tel"
          />
          {errors.phone ? <span className="text-xs text-rose-700">{errors.phone}</span> : null}
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1.5 text-sm">
          <span className="font-medium text-slate-800">Email</span>
          <input
            value={state.email}
            onChange={(event) => setState((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-rose-200 transition focus:border-rose-400 focus:ring"
            name="email"
            autoComplete="email"
          />
          {errors.email ? <span className="text-xs text-rose-700">{errors.email}</span> : null}
        </label>

        <label className="space-y-1.5 text-sm">
          <span className="font-medium text-slate-800">Service Needed</span>
          <select
            value={state.service}
            onChange={(event) => setState((prev) => ({ ...prev, service: event.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-rose-200 transition focus:border-rose-400 focus:ring"
            name="service"
          >
            <option value="">Select one</option>
            {serviceOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.service ? <span className="text-xs text-rose-700">{errors.service}</span> : null}
        </label>
      </div>

      <label className="space-y-1.5 text-sm">
        <span className="font-medium text-slate-800">How can we help?</span>
        <textarea
          value={state.message}
          onChange={(event) => setState((prev) => ({ ...prev, message: event.target.value }))}
          className="min-h-28 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-rose-200 transition focus:border-rose-400 focus:ring"
          name="message"
        />
        {errors.message ? <span className="text-xs text-rose-700">{errors.message}</span> : null}
      </label>

      <label className="inline-flex items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={state.isEmergency}
          onChange={(event) =>
            setState((prev) => ({ ...prev, isEmergency: event.target.checked }))
          }
          className="h-4 w-4 rounded border-slate-300 text-rose-600 focus:ring-rose-500"
        />
        This is an emergency service request
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
      >
        Request Service
      </button>

      {status === "success" ? (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          Thank you. Your request has been prepared and is ready for delivery once backend
          integration is connected.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">
          Please review the highlighted fields and try again.
        </p>
      ) : null}
    </form>
  );
}
