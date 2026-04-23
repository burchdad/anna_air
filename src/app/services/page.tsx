import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "HVAC Services",
  "Explore AC repair, heating repair, system checks, emergency HVAC service, installations, and airflow support from Anna's Air.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Heating and Cooling Services Designed for Comfort Under Pressure"
        description="From urgent no-cooling calls to planned upgrades, Anna's Air delivers practical recommendations and quality workmanship you can trust."
      />

      <SectionShell>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold tracking-tight text-slate-950">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-slate-50/70">
        <Reveal>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Maintenance and System Check</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              Keep your system performing with seasonal inspections and preventive maintenance.
              Anna&apos;s Air includes transparent findings and practical next steps.
            </p>
            <p className="mt-4 inline-flex rounded-full bg-rose-50 px-4 py-1.5 text-sm font-semibold text-rose-700">
              {siteContent.pricing.systemCheck}
            </p>
          </div>
        </Reveal>
      </SectionShell>

      <FaqSection />

      <CtaBand
        title="Need repair, maintenance, or emergency HVAC support?"
        body="Call Anna's Air today for fast response and honest recommendations tailored to your home."
      />
    </>
  );
}
