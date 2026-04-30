import type { MetadataRoute } from "next";

import { siteContent } from "@/content/site";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "",               changeFrequency: "weekly",  priority: 1.0 },
  { path: "/services",      changeFrequency: "monthly", priority: 0.9 },
  { path: "/service-areas", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact",       changeFrequency: "monthly", priority: 0.8 },
  { path: "/about",         changeFrequency: "monthly", priority: 0.7 },
  { path: "/testimonials",  changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteContent.business.domain}`;
  const now = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
