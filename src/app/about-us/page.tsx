import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";
import { SchemaScript } from "@/components/seo/schema-script";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "About | Female Veteran-Owned HVAC Company in San Antonio, TX",
  "Anna's Air is a female veteran-owned HVAC company serving San Antonio and the Texas Hill Country with honest diagnostics, fast response, and transparent pricing.",
  "/about-us",
);

const breadcrumb = createBreadcrumbSchema([
  { name: "Home", url: "https://annasair.com/" },
  { name: "About", url: "https://annasair.com/about-us" },
]);

export default function AboutPage() {
  return (
    <>
      <SchemaScript schema={breadcrumb} />
      <PageHero
        eyebrow="About"
        title="A Better HVAC Experience, Built on Trust"
        description={"Anna's Air was created to bring responsive, respectful heating and cooling service to Texas homes with clear communication and zero pressure."}
      />

      <SectionShell>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                {siteContent.about.mission}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.07}>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                What makes Anna&apos;s Air different
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                {siteContent.about.story}
              </p>
              <p className="mt-4 rounded-xl border border-rose-100 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-800">
                {siteContent.about.firstFemaleClaim}
              </p>
            </article>
          </Reveal>
        </div>
      </SectionShell>

      <CtaBand
        title="Need HVAC help from someone you can trust?"
        body="Call Anna&apos;s Air for responsive heating and cooling support with clear guidance and professional care."
      />
    </>
  );
}
