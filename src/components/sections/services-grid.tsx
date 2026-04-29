import Link from "next/link";

import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

export function ServicesGrid() {
  // Priority services shown in the featured block
  const priorityServiceSlugs = ["system-check-maintenance", "ac-repair"];
  const priorityServices = priorityServiceSlugs
    .map((slug) => siteContent.services.find((s) => s.slug === slug))
    .filter(Boolean) as typeof siteContent.services;

  const otherServices = siteContent.services.filter(
    (s) => !priorityServiceSlugs.includes(s.slug),
  );

  return (
    <SectionShell id="services" className="bg-white">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
              Services
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
              Service options for comfort and performance
            </h2>
          </div>
        </div>
      </Reveal>

      {/* Priority Service Options */}
      <Reveal delay={0.04}>
        <div className="mt-8 rounded-2xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-white p-5 shadow-md sm:p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
            Priority Service Options
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* System Check – always first */}
            <article className="rounded-xl border border-pink-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-600">
                Preventive Care
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
                {priorityServices[0]?.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {priorityServices[0]?.description}
              </p>
              <p className="mt-3 text-base font-bold text-pink-700">$89</p>
            </article>

            {/* AC Repair – directly beneath System Check */}
            <article className="rounded-xl border border-pink-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-600">
                Urgent Help
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
                {priorityServices[1]?.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {priorityServices[1]?.description}
              </p>
            </article>
          </div>

          <p className="mt-4 text-sm font-semibold text-pink-700">
            ✓ Free Estimates Available
          </p>
        </div>
      </Reveal>

      {/* All other services */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {otherServices.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.05}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-600">
                Comfort Upgrade
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-pink-300 bg-white px-6 py-3 text-sm font-semibold text-pink-700 transition hover:bg-pink-50"
        >
          Book Service
        </Link>
      </div>
    </SectionShell>
  );
}
