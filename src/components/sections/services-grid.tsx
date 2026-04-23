import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

export function ServicesGrid() {
  return (
    <SectionShell id="services" className="bg-pink-50/50">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
              Services
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              HVAC support built for real homes
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-pink-300 bg-white px-4 py-2 text-sm font-semibold text-pink-600 transition hover:border-pink-400 hover:bg-pink-50"
          >
            View all services
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.05}>
            <article className="h-full rounded-2xl border border-pink-100 bg-white p-6 shadow-[0_12px_30px_rgba(236,72,153,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(236,72,153,0.12)] hover:border-pink-200">
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
