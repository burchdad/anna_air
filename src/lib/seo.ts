import type { Metadata } from "next";

import { siteContent } from "@/content/site";

const baseUrl = `https://${siteContent.business.domain}`;

export function createPageMetadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteContent.business.name,
      type: "website",
      images: [
        {
          url: siteContent.seo.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteContent.business.name} Heating and Cooling Service`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteContent.seo.ogImage],
    },
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: siteContent.business.name,
    url: `https://${siteContent.business.domain}`,
    telephone: siteContent.business.phoneDisplay,
    description: siteContent.seo.defaultDescription,
    areaServed: siteContent.serviceAreas.primaryAreas,
    serviceType: siteContent.services.map((service) => service.title),
  };
}
