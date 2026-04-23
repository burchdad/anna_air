import Link from "next/link";

import { Quote } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

export function TestimonialsSection() {
  return (
    <SectionShell id="testimonials" className="bg-white">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-600">
              Social Proof
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Real feedback from local homeowners
            </h2>
          </div>
          <Link
            href="/testimonials"
            className="text-sm font-semibold text-slate-700 underline-offset-4 transition hover:text-rose-700 hover:underline"
          >
            Read testimonials
          </Link>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {siteContent.testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.context} delay={index * 0.08}>
            <article className="h-full rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-rose-50/40 p-6 shadow-sm">
              <Quote size={20} className="text-rose-500" />
              <p className="mt-4 text-base leading-relaxed text-slate-800">“{testimonial.quote}”</p>
              <p className="mt-5 text-sm font-semibold text-slate-900">{testimonial.name}</p>
              <p className="text-xs text-slate-600">{testimonial.context}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
