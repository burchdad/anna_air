import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/sections/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import { siteContent } from "@/content/site";

export function AboutPreview() {
  return (
    <SectionShell className="bg-white">
      <Reveal>
        <div className="grid gap-6 rounded-3xl border border-pink-200 bg-[linear-gradient(130deg,#fff,#fff0f6)] p-5 shadow-sm sm:p-7 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
              About Anna&apos;s Air
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {siteContent.about.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
              {siteContent.about.story}
            </p>
            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-pink-200 bg-white p-4 text-sm text-pink-800 font-medium shadow-sm">
                {siteContent.about.firstFemaleClaim}
              </div>
              <div className="rounded-2xl border border-pink-100 bg-white p-4 text-sm text-slate-700 shadow-sm">
                Veteran-owned standards with respectful service
              </div>
              <Link
                href="/about"
                className="inline-flex rounded-full bg-gradient-to-r from-pink-600 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-pink-700 hover:to-pink-600 shadow-lg"
              >
                Read the story
              </Link>
            </div>
          </div>

          <div className="hidden overflow-hidden rounded-3xl border-2 border-pink-200 shadow-[0_16px_40px_rgba(236,72,153,0.15)] md:block">
            <Image
              src="/images/door-hanger-back.jpg"
              alt="Anna's Air LLC — Company Owned and Operated by a Female Veteran"
              width={340}
              height={560}
              className="w-full object-cover"
            />
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
