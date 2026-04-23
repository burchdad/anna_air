import { ShieldCheck, Sparkles, TimerReset } from "lucide-react";

import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(244,114,182,0.18),transparent_40%),radial-gradient(circle_at_82%_12%,rgba(14,165,233,0.17),transparent_38%),linear-gradient(to_bottom,#fff,#fff7fb)]" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <div className="space-y-7">
          <p className="inline-flex rounded-full border border-rose-100 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700 shadow-sm">
            {siteContent.business.stateRegion} Heating and Cooling
          </p>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {siteContent.hero.headline}
          </h1>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
            {siteContent.hero.subheadline}
          </p>

          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
            {siteContent.hero.supportCopy}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteContent.business.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {siteContent.hero.primaryCta}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-rose-300 hover:text-rose-700"
            >
              {siteContent.hero.secondaryCta}
            </a>
          </div>

          <p className="text-xs text-slate-500 sm:text-sm">
            License: {siteContent.business.licenseNumber} · {siteContent.business.insuredStatus}
          </p>
        </div>

        <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.14)] backdrop-blur">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">
              <Sparkles size={14} />
              Trusted Local Care
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Fast help without the pressure.
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              {siteContent.business.sameDayStatement}
            </p>
            <div className="space-y-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-rose-600" />
                Veteran-led standards and clear recommendations
              </div>
              <div className="flex items-center gap-2">
                <TimerReset size={16} className="text-rose-600" />
                Responsive scheduling for urgent comfort needs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
