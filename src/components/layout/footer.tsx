import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-pink-200 bg-gradient-to-br from-pink-700 to-pink-800 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <Image
            src="/images/logo.png"
            alt="Anna's Air LLC"
            width={200}
            height={100}
            className="h-24 w-auto sm:h-28"
          />
          <p className="max-w-md text-sm text-pink-100">
            Premium local HVAC support with urgency, honesty, and professional care for
            Texas families. Serving San Antonio and surrounding Hill Country.
          </p>
          <a
            href={siteContent.business.phoneHref}
            className="inline-flex rounded-full bg-white px-5 py-2.5 text-base font-bold text-pink-600 shadow-lg transition hover:bg-pink-50"
          >
            <span>Call {siteContent.business.phoneDisplay}</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="space-y-2">
            <p className="font-semibold text-white">Company</p>
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-pink-100 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-white">Trust</p>
            <p className="text-pink-100">License: {siteContent.business.licenseNumber}</p>
            <p className="text-pink-100">{siteContent.business.insuredStatus}</p>
            <p className="text-pink-100">{siteContent.business.emergencyLabel}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-pink-600 px-4 py-4 text-center text-xs text-pink-100">
        <p>
          © {new Date().getFullYear()} {siteContent.business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
