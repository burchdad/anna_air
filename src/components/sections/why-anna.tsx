import Image from "next/image";

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
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            {siteContent.whySection.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            {siteContent.whySection.body[0]}
          </p>
        </div>
      </Reveal>

      <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-8">
        <Reveal>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-pink-200 bg-white shadow-md sm:max-w-[480px]">
              <Image
                src="/images/Rosie the Riveter.png"
                alt="Rosie the Riveter artwork"
                width={640}
                height={640}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
