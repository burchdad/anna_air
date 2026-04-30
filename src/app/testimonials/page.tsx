import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";
import { SchemaScript } from "@/components/seo/schema-script";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Customer Reviews | San Antonio HVAC Service",
  "Read what San Antonio and Hill Country homeowners say about Anna's Air — fast response times, honest pricing, and real cooling restoration when it matters most.",
  "/testimonials",
);

const breadcrumb = createBreadcrumbSchema([
  { name: "Home", url: "https://www.annasair.com/" },
  { name: "Testimonials", url: "https://www.annasair.com/testimonials" },
]);

export default function TestimonialsPage() {
  return (
    <>
      <SchemaScript schema={breadcrumb} />
      <PageHero
        eyebrow="Testimonials"
        title="Homeowner Feedback Built on Real Service Moments"
        description="These comments are based on direct customer experiences and reflect the same urgency and care Anna's Air brings to every call."
      />

      <SectionShell>
        <div className="mx-auto grid max-w-4xl gap-4">
          {siteContent.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.context} delay={index * 0.07}>
              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-base leading-relaxed text-slate-800">“{testimonial.quote}”</p>
                <p className="mt-5 text-sm font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-xs text-slate-600">{testimonial.context}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <CtaBand
        title="Ready for HVAC service you can feel good about?"
        body="Call Anna's Air for responsive support and honest recommendations tailored to your home."
      />
    </>
  );
}
