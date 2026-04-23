import Link from "next/link";

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
    <SectionShell id="services" className="bg-white">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
              Services
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
              HVAC support built for real homes
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.05}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-600">
                {serviceTone(service.title)}
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
              Need help choosing?
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Tell Anna what the system is doing and get directed to the right fix fast.
            </h3>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteContent.business.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-pink-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-pink-700"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-pink-300 bg-white px-5 py-3 text-sm font-semibold text-pink-700 transition hover:bg-pink-50"
            >
              Book Service
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
