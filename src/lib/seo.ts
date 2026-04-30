import type { Metadata } from "next";

import { siteContent } from "@/content/site";

const baseUrl = `https://${siteContent.business.domain}`;
const defaultKeywords = [
  "San Antonio HVAC",
  "AC repair San Antonio",
  "HVAC service",
  "Emergency HVAC",
  "Air conditioning repair",
  "HVAC installation",
  "Ductwork service",
  "Hill Country HVAC",
  "female veteran owned HVAC",
  "Anna's Air",
];

export function createPageMetadata(
  title: string,
  description: string,
  path = "/",
  options?: { absolute?: boolean; keywords?: string[] },
): Metadata {
  const url = `${baseUrl}${path}`;
  const resolvedTitle = options?.absolute ? ({ absolute: title } as const) : title;

  return {
    title: resolvedTitle,
    description,
    keywords: options?.keywords ?? defaultKeywords,
    category: "Home Services",
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteContent.business.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${baseUrl}${siteContent.seo.ogImage}`,
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
      images: [`${baseUrl}${siteContent.seo.ogImage}`],
    },
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness"],
    name: siteContent.business.name,
    url: baseUrl,
    telephone: siteContent.business.phoneHref.replace("tel:", ""),
    email: siteContent.business.email,
    description: siteContent.seo.defaultDescription,
    image: `${baseUrl}${siteContent.seo.ogImage}`,
    priceRange: "$$",
    paymentAccepted: "Cash, Check, Credit Card",
    currenciesAccepted: "USD",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.4241,
      longitude: -98.4936,
    },
    areaServed: siteContent.serviceAreas.primaryAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC Services",
      itemListElement: siteContent.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    knowsAbout: ["HVAC", "Air Conditioning", "Heating Systems", "Ductwork", "Emergency HVAC Service"],
    award: siteContent.business.ownershipBadges,
  };
}

export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteContent.business.name,
    url: baseUrl,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: siteContent.business.name,
      url: baseUrl,
      logo: `${baseUrl}${siteContent.seo.ogImage}`,
    },
  };
}

export function createServiceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "HVAC Services",
    itemListElement: siteContent.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        areaServed: "San Antonio and Texas Hill Country",
        provider: {
          "@type": "HVACBusiness",
          name: siteContent.business.name,
          url: baseUrl,
        },
      },
    })),
  };
}

export function createFaqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
