import { ArrowRight, ClipboardCheck, PhoneCall, Wrench } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

const stepIcons = [PhoneCall, ClipboardCheck, Wrench];

export function ConversionFlowSection() {
  return (
    <SectionShell className="bg-slate-50">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
            Fast Service Process
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            {siteContent.conversionFlow.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            No guessing, no runaround, and no vague next steps. Anna&apos;s Air keeps the
            process clear from first call to restored comfort.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {siteContent.conversionFlow.steps.map((step, index) => {
          const Icon = stepIcons[index] ?? ArrowRight;

          return (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink-600/15 text-pink-600">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{step.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
