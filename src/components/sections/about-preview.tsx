import Link from "next/link";

import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

export function AboutPreview() {
  return (
    <SectionShell className="bg-white">
      <Reveal>
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-[linear-gradient(130deg,#fff,#fff5fa)] p-7 shadow-sm md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-600">
              About Anna&apos;s Air
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {siteContent.about.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
              {siteContent.about.story}
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-rose-100 bg-white p-4 text-sm text-slate-700 shadow-sm">
              {siteContent.about.firstFemaleClaim}
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
              Veteran-owned standards with respectful service
            </div>
            <Link
              href="/about"
              className="inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Read the story
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
