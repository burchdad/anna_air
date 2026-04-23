import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Service Areas",
  "Anna's Air serves all areas from San Antonio to Comfort, Texas. Female-owned, veteran-operated HVAC — call anytime, 24/7.",
  "/service-areas",
);

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="San Antonio and Hill Country HVAC Service"
        description="All areas from San Antonio to Comfort, Texas. If you need Anna's Air, I will be there. Call us anytime — we are a 24/7 company."
      />

      <SectionShell>
        <Reveal>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Areas currently served</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              {siteContent.serviceAreas.intro}
            </p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {siteContent.serviceAreas.primaryAreas.map((city) => (
                <div
                  key={city}
                  className="rounded-xl border border-pink-200 bg-pink-50 px-3 py-2 text-sm font-medium text-pink-800"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="bg-slate-50/70">
        <Reveal>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Future local city pages
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              This page is structured for expansion with dedicated city pages for local SEO.
              Add routes such as /service-areas/anna or /service-areas/mckinney as growth
              priorities are finalized.
            </p>
            <p className="mt-4 text-sm text-slate-600">{siteContent.serviceAreas.expansionNote}</p>
          </div>
        </Reveal>
      </SectionShell>

      <CtaBand
        title="Not sure if you're in the service area?"
        body="Call or send a request and Anna's Air will confirm coverage and next available scheduling."
      />
    </>
  );
}
