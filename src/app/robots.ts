import type { MetadataRoute } from "next";

import { siteContent } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const url = `https://${siteContent.business.domain}`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    host: url,
    sitemap: `${url}/sitemap.xml`,
  };
}
