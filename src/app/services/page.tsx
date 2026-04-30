import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SchemaScript } from "@/components/seo/schema-script";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createPageMetadata,
  createServiceListSchema,
} from "@/lib/seo";
import { siteContent } from "@/content/site";

export const metadata: Metadata = createPageMetadata(
  "HVAC Services San Antonio | AC Repair, Maintenance & Installation",
  "Anna's Air offers AC repair, seasonal system checks, complete HVAC installations, ductwork improvements and emergency service for San Antonio and Hill Country homeowners. Licensed & fully insured.",
  "/services",
);

const breadcrumb = createBreadcrumbSchema([
  { name: "Home", url: "https://annasair.com/" },
  { name: "Services", url: "https://annasair.com/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <SchemaScript schema={breadcrumb} />
      <SchemaScript schema={createServiceListSchema()} />
      <SchemaScript schema={createFaqSchema(siteContent.faq)} />
      <PageHero
        eyebrow="Services"
        title="Heating and Cooling Services Designed for Comfort Under Pressure"
        description="From urgent no-cooling calls to planned upgrades, Anna's Air delivers practical recommendations and quality workmanship you can trust."
      />

      <ServicesGrid />

      <FaqSection />

      <CtaBand
        title="Need repair, maintenance, or emergency HVAC support?"
        body="Call Anna's Air today for fast response and honest recommendations tailored to your home."
      />
    </>
  );
}
