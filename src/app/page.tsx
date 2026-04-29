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
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Anna's Air | San Antonio HVAC Service",
  "Fast, honest HVAC service for San Antonio and Hill Country homeowners from a female veteran-owned company focused on emergency response and clear communication.",
  "/",
);

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
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
