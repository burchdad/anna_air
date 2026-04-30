import type { Metadata } from "next";

import { AboutPreview } from "@/components/sections/about-preview";
import { BrandsStrip } from "@/components/sections/brands-strip";
import { ConversionFlowSection } from "@/components/sections/conversion-flow";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { ServiceAreasPreview } from "@/components/sections/service-areas-preview";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { TrustBar } from "@/components/sections/trust-bar";
import { WhyAnnaSection } from "@/components/sections/why-anna";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";
import { SchemaScript } from "@/components/seo/schema-script";
import { createFaqSchema, createPageMetadata } from "@/lib/seo";
import { siteContent } from "@/content/site";

export const metadata: Metadata = createPageMetadata(
  "Anna's Air | San Antonio HVAC Repair & AC Service",
  "Female veteran-owned HVAC company serving San Antonio, Boerne, Helotes and the Texas Hill Country. Same-day AC repair, system checks, emergency service and complete installations. Licensed TACLB155020E.",
  "/",
  { absolute: true },
);

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <SchemaScript schema={createFaqSchema(siteContent.faq)} />
      <Hero />
      <TrustBar />
      <WhyAnnaSection />
      <ConversionFlowSection />
      <ServicesGrid />
      <TestimonialsSection />
      <BrandsStrip />
      <AboutPreview />
      <ServiceAreasPreview />
      <FaqSection />
      <CtaBand />
    </>
  );
}
