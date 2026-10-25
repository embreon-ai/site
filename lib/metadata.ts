import type { Metadata, Viewport } from "next";
import type { Dict } from "./dict";
import { site } from "./site";

type PageInfo = { path: string; alternates: { fr: string; en: string }; title?: string; description?: string };

export function pageMetadata(d: Dict, page: PageInfo): Metadata {
  const title = page.title ?? d.meta.title;
  const description = page.description ?? d.meta.description;
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: { canonical: page.path, languages: page.alternates },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      ],
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      type: "website",
      url: page.path,
      siteName: "Embreon",
      title,
      description,
      locale: d.lang === "fr" ? "fr_FR" : "en_US",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Embreon" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

export const viewport: Viewport = {
  themeColor: "#0D0C0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
