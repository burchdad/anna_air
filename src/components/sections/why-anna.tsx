import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

export function WhyAnnaSection() {
  const whyBullets = siteContent.whySection.bullets ?? [];

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
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            {siteContent.whySection.body[0]}
          </p>
        </div>
      </Reveal>

      <div className="mx-auto mt-8 max-w-5xl rounded-3xl border border-pink-200 bg-gradient-to-br from-white to-pink-50/50 p-5 shadow-sm sm:p-6">
        <div className="grid gap-3 sm:grid-cols-2">
          {whyBullets.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="flex items-center gap-2 rounded-2xl border border-pink-100 bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                <span className="text-pink-500">✓</span>
                <span>{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
