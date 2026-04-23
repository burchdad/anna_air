import { BadgeCheck } from "lucide-react";

import { siteContent } from "@/content/site";

export function TrustBar() {
  return (
    <section className="border-y border-pink-200 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto mb-4 w-full max-w-6xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white">
          Trusted Credentials and Service Standards
        </p>
      </div>
      <div className="mx-auto grid w-full max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.trustBarItems.map((item) => (
          <div
            key={item}
            className="inline-flex items-start gap-2 rounded-xl border border-white/30 bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/25 sm:text-sm"
          >
            <BadgeCheck size={16} className="mt-0.5 shrink-0 text-white" />
            <span className="min-w-0 leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
