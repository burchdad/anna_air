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
  "Call Anna's Air or request service online for HVAC repair, maintenance, installation, and emergency support in North Texas.",
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
            <aside className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-600">
                  Call Anna&apos;s Air
                </p>
                <a
                  href={siteContent.business.phoneHref}
                  className="mt-2 block text-2xl font-semibold tracking-tight text-slate-950"
                >
                  {siteContent.business.phoneDisplay}
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Trust and credentials</p>
                <p className="mt-2">License: {siteContent.business.licenseNumber}</p>
                <p>{siteContent.business.insuredStatus}</p>
                <p>{siteContent.business.emergencyLabel}</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Hours and scheduling</p>
                <p className="mt-2">Service hours can be configured in the content file when finalized.</p>
                <p className="mt-2 text-xs text-slate-600">
                  Integration note: connect form submission to your email, SMS, CRM, or booking
                  platform through a Next.js API route or external webhook.
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
