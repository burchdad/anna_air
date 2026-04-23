import Link from "next/link";

import { MapPin } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

export function ServiceAreasPreview() {
  return (
    <SectionShell className="bg-slate-50/70">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-600">
              Service Area
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Local HVAC support across North Texas
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
              {siteContent.serviceAreas.intro}
            </p>
          </div>
          <Link
            href="/service-areas"
            className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-rose-300 hover:text-rose-700"
          >
            View service areas
          </Link>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {siteContent.serviceAreas.primaryAreas.map((city, index) => (
          <Reveal key={city} delay={index * 0.04}>
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800">
              <MapPin size={16} className="text-rose-600" />
              {city}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
