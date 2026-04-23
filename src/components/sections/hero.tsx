import { AlertCircle, ShieldCheck, Sparkles, TimerReset } from "lucide-react";

import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(236,72,153,0.25),transparent_40%),radial-gradient(circle_at_82%_12%,rgba(236,72,153,0.2),transparent_38%),linear-gradient(to_bottom,#fff,#fef2f6)]" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <div className="space-y-7">
          <p className="inline-flex rounded-full border border-pink-200 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-700 shadow-sm">
            {siteContent.business.stateRegion} Heating and Cooling
          </p>

          <div className="flex flex-wrap gap-2">
            {siteContent.heroProof.map((item) => (
              <span
                key={item}
                className="inline-flex rounded-full border border-pink-200 bg-gradient-to-r from-pink-50 to-white px-3 py-1 text-xs font-semibold text-pink-700"
              >
                {item}
              </span>
            ))}
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {siteContent.hero.headline}
          </h1>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
            {siteContent.hero.subheadline}
          </p>

          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
            {siteContent.hero.supportCopy}
          </p>

          <p className="inline-flex items-center gap-2 rounded-xl border border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50 px-3 py-2 text-xs font-semibold text-pink-900 sm:text-sm">
            <AlertCircle size={16} className="text-pink-600" />
            Emergency service available for urgent no-cooling and no-heat calls
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteContent.business.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition hover:from-pink-700 hover:to-pink-600 shadow-lg hover:shadow-xl"
            >
              {siteContent.hero.primaryCta}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-pink-300 bg-white px-6 py-3 text-sm font-semibold text-pink-700 transition hover:border-pink-400 hover:bg-pink-50"
            >
              {siteContent.hero.secondaryCta}
            </a>
          </div>

          <p className="text-xs text-slate-500 sm:text-sm">
            License: {siteContent.business.licenseNumber} · {siteContent.business.insuredStatus}
          </p>
        </div>

        <div className="rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-white to-pink-50 p-6 shadow-[0_24px_60px_rgba(236,72,153,0.15)] backdrop-blur">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-100 to-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-pink-700">
              <Sparkles size={14} />
              Trusted Local Care
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Fast help without the pressure.
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              {siteContent.business.sameDayStatement}
            </p>
            <div className="space-y-3 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-4 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-pink-600" />
                Veteran-led standards and clear recommendations
              </div>
              <div className="flex items-center gap-2">
                <TimerReset size={16} className="text-pink-600" />
                Responsive scheduling for urgent comfort needs
              </div>
            </div>

            <div className="rounded-2xl border-2 border-pink-200 bg-gradient-to-br from-pink-100/50 to-rose-100/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-700">
                Real Customer Outcomes
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                {siteContent.testimonialHighlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
