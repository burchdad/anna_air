import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

export function WhyAnnaSection() {
  return (
    <SectionShell id="why-annas-air" className="bg-white">
      <Reveal>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
            Brand Difference
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {siteContent.whySection.heading}
          </h2>
          {siteContent.whySection.subheading && (
            <p className="mt-2 text-sm text-pink-600 font-medium italic">
              {siteContent.whySection.subheading}
            </p>
          )}
        </div>
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
        {siteContent.whySection.body.map((paragraph, index) => (
          <Reveal key={paragraph} delay={index * 0.08}>
            <article className="h-full rounded-2xl border border-pink-100 bg-gradient-to-b from-white to-pink-50/30 p-5 shadow-sm hover:border-pink-200 transition">
              <p className="text-sm leading-relaxed text-slate-700">{paragraph}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
