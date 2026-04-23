import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { siteContent } from "@/content/site";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteContent.business.domain}`),
  title: {
    default: siteContent.seo.defaultTitle,
    template: siteContent.seo.titleTemplate,
  },
  description: siteContent.seo.defaultDescription,
  openGraph: {
    type: "website",
    title: siteContent.seo.defaultTitle,
    description: siteContent.seo.defaultDescription,
    siteName: siteContent.business.name,
    images: [siteContent.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pb-24 md:pb-0">{children}</main>
          <Footer />
          <StickyMobileCta />
        </div>
      </body>
    </html>
  );
}
