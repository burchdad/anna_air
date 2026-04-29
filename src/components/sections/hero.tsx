import Image from "next/image";

import { PhoneCall } from "lucide-react";

import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-10 md:px-12 md:pb-16 md:pt-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(236,72,153,0.25),transparent_40%),radial-gradient(circle_at_82%_12%,rgba(236,72,153,0.2),transparent_38%),linear-gradient(to_bottom,#fff,#fef2f6)]" />

      <div className="mx-auto w-full max-w-5xl rounded-[2rem] border-2 border-pink-200 bg-white/90 p-5 text-center shadow-[0_24px_60px_rgba(236,72,153,0.18)] sm:p-8 md:p-10">
        <Image
          src="/images/logo.png"
          alt="Anna's Air LLC flame and snow logo"
          width={520}
          height={520}
          className="mx-auto h-auto w-full max-w-[500px] sm:max-w-[680px] md:max-w-[760px]"
          priority
        />

        <a
          href={siteContent.business.phoneHref}
          className="mt-4 inline-block text-4xl font-extrabold tracking-tight text-pink-700 transition hover:text-pink-800 sm:text-5xl"
        >
          {siteContent.business.phoneDisplay}
        </a>

        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {siteContent.heroProof.map((item) => (
            <span
              key={item}
              className="inline-flex rounded-full border border-pink-300 bg-gradient-to-r from-pink-50 to-white px-3 py-1.5 text-xs font-semibold text-pink-700 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={siteContent.business.phoneHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pink-600 px-4 py-3 text-base font-bold text-white shadow-lg transition hover:bg-pink-700 hover:shadow-xl active:scale-95 sm:w-auto sm:px-7 sm:py-4"
          >
            <PhoneCall size={18} />
            Call Now
          </a>
          <a
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-pink-300 bg-white px-4 py-3 text-base font-semibold text-pink-700 transition hover:border-pink-400 hover:bg-pink-50 active:scale-95 sm:w-auto sm:px-7 sm:py-4"
          >
            Book Service
          </a>
        </div>

      </div>
    </section>
  );
}
