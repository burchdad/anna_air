import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";
import { SchemaScript } from "@/components/seo/schema-script";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Service Areas | San Antonio, Boerne, Helotes & Hill Country HVAC",
  "Anna's Air provides HVAC repair and installation across San Antonio, Boerne, Helotes, Bulverde, Spring Branch, Canyon Lake and surrounding Hill Country communities. 24/7 emergency service available.",
  "/service-areas",
);

const breadcrumb = createBreadcrumbSchema([
  { name: "Home", url: "https://annasair.com/" },
  { name: "Service Areas", url: "https://annasair.com/service-areas" },
]);

export default function ServiceAreasPage() {
  return (
    <>
      <SchemaScript schema={breadcrumb} />
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

      <CtaBand
        title="Not sure if you're in the service area?"
        body="Call or send a request and Anna's Air will confirm coverage and next available scheduling."
      />
    </>
  );
}
