import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

export function ServicesGrid() {
  const serviceTone = (title: string) => {
    if (title.includes("Emergency") || title.includes("Repair")) {
      return "Urgent Help";
    }

    if (title.includes("Maintenance") || title.includes("Check")) {
      return "Preventive Care";
    }

    return "Comfort Upgrade";
  };

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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-600">
                {serviceTone(service.title)}
              </p>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-pink-200 bg-gradient-to-r from-pink-600 to-pink-500 p-6 text-white shadow-[0_18px_44px_rgba(236,72,153,0.22)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
              Need help choosing?
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              Tell Anna what the system is doing and get directed to the right fix fast.
            </h3>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteContent.business.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-pink-600 transition hover:bg-pink-50"
            >
              Call {siteContent.business.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book Service
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
