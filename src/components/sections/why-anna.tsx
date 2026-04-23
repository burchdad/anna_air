import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

export function WhyAnnaSection() {
  return (
    <SectionShell id="why-annas-air" className="bg-white">
      <Reveal>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-600">
            Brand Difference
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {siteContent.whySection.heading}
          </h2>
        </div>
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
        {siteContent.whySection.body.map((paragraph, index) => (
          <Reveal key={paragraph} delay={index * 0.08}>
            <article className="h-full rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm">
              <p className="text-sm leading-relaxed text-slate-700">{paragraph}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
