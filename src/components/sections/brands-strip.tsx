import Image from "next/image";

import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

export function BrandsStrip() {
  return (
    <SectionShell className="bg-white text-slate-900">
      <Reveal>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
            Equipment and Brands Serviced
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Brand support across standard and specialty systems
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            All equipment and brands are serviced, including mini splits, communicating systems,
            and specialty units.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.brandsServiced.map((brand, index) => (
            <Reveal key={brand} delay={index * 0.04}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-medium text-slate-700 shadow-sm">
                {brand}
              </div>
            </Reveal>
          ))}
          <div className="rounded-2xl border border-pink-200 bg-pink-50 px-4 py-3 text-center text-sm font-semibold text-pink-700 shadow-sm sm:col-span-2 lg:col-span-3">
            All brands are available with Anna&apos;s Air LLC.
          </div>
        </div>

        <Reveal delay={0.14}>
          <div className="mx-auto max-w-[280px] rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <Image
              src="/images/rheem.jpg"
              alt="Rheem logo"
              width={600}
              height={280}
              className="h-auto w-full"
            />
            <p className="mt-3 text-sm font-semibold text-slate-900">Engineered for Life</p>
            <p className="text-sm text-slate-600">Rheem.com</p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
