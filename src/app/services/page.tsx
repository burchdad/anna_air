import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "HVAC Services",
  "Explore AC repair, system checks, complete installations, ductwork improvements, and emergency HVAC support from Anna's Air.",
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

      <ServicesGrid />

      <FaqSection />

      <CtaBand
        title="Need repair, maintenance, or emergency HVAC support?"
        body="Call Anna's Air today for fast response and honest recommendations tailored to your home."
      />
    </>
  );
}
