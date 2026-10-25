import type { Dict } from "@/lib/dict";
import { SiteFooter, SiteHeader } from "./Chrome";

export default function LegalPage({ d, title, updated, children }: { d: Dict; title: string; updated: string; children: React.ReactNode }) {
  const home = d.lang === "fr" ? "/" : "/en";
  return (
    <>
      <SiteHeader d={d} home={home} />
      <main className="prose">
        <h1>{title}</h1>
        <p className="updated">{updated}</p>
        {children}
      </main>
      <SiteFooter d={d} home={home} />
    </>
  );
}
