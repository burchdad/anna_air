import { BadgeCheck } from "lucide-react";

import { siteContent } from "@/content/site";

export function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 px-4 py-6 sm:px-6 md:px-12">
      <div className="mx-auto mb-4 w-full max-w-7xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
          Trusted Credentials and Service Standards
        </p>
      </div>
      <div className="mx-auto grid w-full max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.trustBarItems.map((item) => (
          <div
            key={item}
            className="inline-flex items-start gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm"
          >
            <BadgeCheck size={16} className="mt-0.5 shrink-0 text-pink-600" />
            <span className="min-w-0 leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
