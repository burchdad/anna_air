import Link from "next/link";

import { Quote } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

export function TestimonialsSection() {
  return (
    <SectionShell id="testimonials" className="bg-slate-50">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
              Social Proof
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
              Homeowners call Anna&apos;s Air when comfort cannot wait
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
              Fast response, honest pricing, and real comfort improvements from actual local
              service calls.
            </p>
          </div>
          <Link
            href="/testimonials"
            className="text-sm font-semibold text-pink-600 underline-offset-4 transition hover:text-pink-700 hover:underline"
          >
            Read testimonials
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="mt-8 rounded-2xl border border-pink-200 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 p-6 text-white shadow-[0_22px_50px_rgba(236,72,153,0.26)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Most-talked-about outcome
          </p>
          <p className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
            Cooling restored in 15 minutes - even with a newborn at home.
          </p>
          <p className="mt-2 text-sm text-white/90">
            Real emergency call. Fast arrival. Immediate comfort restored for a local family.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {siteContent.testimonialHighlights.map((item, index) => (
          <Reveal key={item} delay={index * 0.05}>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm">
              {item}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {siteContent.testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.context} delay={index * 0.08}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <Quote size={20} className="text-pink-600" />
              <p className="mt-4 text-sm leading-relaxed text-slate-800 sm:text-base">“{testimonial.quote}”</p>
              <p className="mt-5 text-sm font-semibold text-slate-900">{testimonial.name}</p>
              <p className="text-xs text-slate-600">{testimonial.context}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
