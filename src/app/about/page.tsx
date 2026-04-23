import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "About Anna's Air",
  "Learn how Anna's Air brings veteran-owned discipline, female-owned leadership, and honest HVAC service to Texas homeowners.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
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

      <SectionShell className="bg-slate-50/70">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Core Values</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {siteContent.about.values.map((value) => (
                  <li
                    key={value}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.07}>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Why customers trust Anna&apos;s Air
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                Veteran-owned standards and female-owned, operated leadership shape every
                service call. Homeowners choose Anna&apos;s Air for direct answers, professional
                workmanship, and urgency when comfort cannot wait.
              </p>
              <p className="mt-4 text-sm text-slate-600">
                License: {siteContent.business.licenseNumber} · {siteContent.business.insuredStatus}
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
