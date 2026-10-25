import localFont from "next/font/local";

export const geist = localFont({
  src: [
    { path: "./fonts/geist-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/geist-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/geist-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-ui",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const geistMono = localFont({
  src: [{ path: "./fonts/geist-mono-latin-400-normal.woff2", weight: "400", style: "normal" }],
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "SF Mono", "Menlo", "monospace"],
});

export const voice = localFont({
  src: [{ path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" }],
  variable: "--font-voice",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const fontVars = `${geist.variable} ${geistMono.variable} ${voice.variable}`;
