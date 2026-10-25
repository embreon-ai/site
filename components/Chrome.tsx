import type { Dict } from "@/lib/dict";

export function SiteHeader({ d, home }: { d: Dict; home: string }) {
  const other = d.lang === "fr" ? "en" : "fr";
  return (
    <header className="site-header">
      <a href={home} className="brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="Embreon" width={153} height={32} />
      </a>
      <nav aria-label={d.lang === "fr" ? "Principale" : "Main"} className="site-nav">
        <a href={d.nav.switchHref} hrefLang={other} lang={other} aria-label={d.nav.switchLabel} className="lang">
          {d.nav.switchLang}
        </a>
        <a href={`${home}#liste`} className="nav-cta">
          {d.nav.cta}
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter({ d, home }: { d: Dict; home: string }) {
  const other = d.lang === "fr" ? "en" : "fr";
  return (
    <footer className="site-footer">
      <a href={home} className="footer-mark" aria-label="Embreon">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/symbole.svg" alt="" width={28} height={28} />
      </a>
      <p>{d.footer.rights}</p>
      <ul>
        <li>
          <a href={d.footer.privacyHref}>{d.footer.privacy}</a>
        </li>
        <li>
          <a href={d.footer.legalHref}>{d.footer.legal}</a>
        </li>
        <li>
          <a href={d.nav.switchHref} hrefLang={other} lang={other}>
            {d.nav.switchLabel}
          </a>
        </li>
      </ul>
    </footer>
  );
}
