import { BadgeCheck } from "lucide-react";

import { siteContent } from "@/content/site";

export function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.trustBarItems.map((item) => (
          <div
            key={item}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm font-medium text-slate-700"
          >
            <BadgeCheck size={16} className="text-rose-600" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
