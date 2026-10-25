/**
 * Site-wide facts. The legal fields feed the legal notice and privacy pages:
 * fill every empty value before pointing embreon.com at this site.
 */
export const site = {
  url: "https://embreon.com",
  instagram: { handle: "@embreon_ai", url: "https://www.instagram.com/embreon_ai/" },
  github: { handle: "embreon-ai", url: "https://github.com/embreon-ai" },
  legal: {
    publisher: "Alistair Piot",
    status: "Entrepreneur individuel (micro-entreprise)",
    siret: "",
    address: "",
    email: "",
    host: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    dataProcessor: "Supabase Inc. (données hébergées dans l’Union européenne)",
  },
} as const;

export const missing = (value: string, lang: "fr" | "en") =>
  value || (lang === "fr" ? "[à compléter]" : "[to be completed]");
