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
            Trusted experience across leading HVAC systems
          </h2>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {siteContent.brandsServiced.map((brand, index) => (
          <Reveal key={brand} delay={index * 0.04}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-medium text-slate-700 shadow-sm">
              {brand}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
