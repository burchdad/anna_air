import Image from "next/image";

import { AlertCircle, PhoneCall, Sparkles } from "lucide-react";

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

          <div className="grid gap-2 sm:grid-cols-3">
            {siteContent.hero.urgencyChecks.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-pink-200 bg-white/85 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteContent.business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 px-6 py-4 text-base font-bold text-white transition hover:from-pink-700 hover:to-pink-600 shadow-lg hover:shadow-xl active:scale-95"
            >
              <AlertCircle size={18} />
              {siteContent.hero.primaryCta}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-pink-300 bg-white px-6 py-4 text-base font-semibold text-pink-700 transition hover:border-pink-400 hover:bg-pink-50 active:scale-95"
            >
              {siteContent.hero.secondaryCta}
            </a>
          </div>

          <p className="text-xs text-slate-500 sm:text-sm">
            License: {siteContent.business.licenseNumber} · {siteContent.business.insuredStatus}
          </p>
        </div>

        <div className="space-y-5">
          <div className="rounded-[2rem] border-2 border-pink-200 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(253,242,248,0.95))] p-5 shadow-[0_24px_60px_rgba(236,72,153,0.18)]">
            <div className="flex flex-wrap items-start justify-between gap-3 rounded-3xl bg-gradient-to-r from-pink-600 to-pink-500 p-5 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                  Emergency Response
                </p>
                <p className="mt-2 max-w-xs text-2xl font-semibold leading-tight">
                  Cooling restored fast when comfort cannot wait.
                </p>
              </div>
              <a
                href={siteContent.business.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-pink-600 transition hover:bg-pink-50"
              >
                <PhoneCall size={16} />
                Call Anna now
              </a>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-[0.82fr_1.18fr]">
              <div className="overflow-hidden rounded-3xl border border-pink-200 bg-white">
                <Image
                  src="/images/door-hanger-back.jpg"
                  alt="Anna's Air LLC — Company owned and operated by a female veteran"
                  width={360}
                  height={560}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-pink-200 bg-white p-5 shadow-sm">
                  <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-pink-700">
                    <Sparkles size={14} />
                    Fast Response Proof
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-snug text-slate-900">
                    “Anna got here in about 30 minutes and had us cooling again in around 15 minutes.”
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Emergency cooling service for a local family with a newborn at home.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-pink-50 px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pink-600">
                        Arrival
                      </p>
                      <p className="mt-1 text-xl font-bold text-slate-950">30 min</p>
                    </div>
                    <div className="rounded-2xl bg-pink-50 px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pink-600">
                        Cooling Back
                      </p>
                      <p className="mt-1 text-xl font-bold text-slate-950">15 min</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-pink-200 bg-gradient-to-r from-pink-50 to-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
                    Why homeowners call now
                  </p>
                  <ul className="mt-3 space-y-2 text-sm font-medium text-slate-800">
                    {siteContent.testimonialHighlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 text-pink-500">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
