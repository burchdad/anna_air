import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

export function FaqSection() {
  return (
    <SectionShell className="bg-slate-50">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">FAQ</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            Answers before you need to ask
          </h2>
        </div>
      </Reveal>

      <div className="mx-auto mt-8 max-w-3xl space-y-3">
        {siteContent.faq.map((item, index) => (
          <Reveal key={item.question} delay={index * 0.04}>
            <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-slate-900 marker:content-none">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
