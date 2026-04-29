import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Contact and Book Appointment",
  "Call Anna's Air or request service online for HVAC repair, maintenance, installation, and emergency support in San Antonio and the Hill Country.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book Service or Call for Immediate Help"
        description="Use the form to request service, or call now for urgent heating and cooling needs."
      />

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="space-y-4 rounded-3xl border border-pink-200 bg-white p-6 shadow-sm">
              <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
                  Call Anna&apos;s Air
                </p>
                <a
                  href={siteContent.business.phoneHref}
                  className="mt-2 block text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
                >
                  {siteContent.business.phoneDisplay}
                </a>
                <p className="mt-2 text-sm text-slate-700">
                  Emergency no-cooling calls are prioritized.
                </p>
              </div>

              <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Book online</p>
                <a
                  href={siteContent.business.bookingHref}
                  className="mt-2 inline-flex rounded-full bg-gradient-to-r from-pink-600 to-pink-500 px-4 py-2 text-sm font-semibold text-white transition hover:from-pink-700 hover:to-pink-600"
                >
                  {siteContent.business.bookingLabel}
                </a>
                <p className="mt-2 text-xs text-slate-600">
                  Prefer text updates? Select &quot;Text me&quot; in the request form to receive
                  scheduling and status messages.
                </p>
              </div>

              <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Trust and credentials</p>
                <p className="mt-2">License: {siteContent.business.licenseNumber}</p>
                <p>{siteContent.business.insuredStatus}</p>
                <p>{siteContent.business.emergencyLabel}</p>
              </div>

              <div className="rounded-2xl border border-pink-200 bg-pink-50 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Lead routing and follow-up</p>
                <p className="mt-2">
                  Form submissions include page source and campaign details so your team can track which
                  channels are driving calls.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  To connect a CRM, set <code>LEADS_WEBHOOK_URL</code> in your environment and the
                  API route will forward every request payload automatically.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </SectionShell>

      <CtaBand
        title="Emergency no-cooling or no-heat issue?"
        body="Call now for priority support. Anna's Air works quickly to restore comfort when conditions are urgent."
      />
    </>
  );
}
