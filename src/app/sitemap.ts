import type { MetadataRoute } from "next";

import { siteContent } from "@/content/site";

const routes = ["", "/about", "/services", "/service-areas", "/testimonials", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteContent.business.domain}`;

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
