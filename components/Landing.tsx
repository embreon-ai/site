import Image from "next/image";
import type { Dict } from "@/lib/dict";
import { site } from "@/lib/site";
import Core from "./Core";
import Film from "./Film";
import WaitlistForm from "./WaitlistForm";
import { SiteFooter, SiteHeader } from "./Chrome";

const CLOCK_TONE = ["tone-ember", "tone-dim", "tone-blue"];

export default function Landing({ d }: { d: Dict }) {
  const home = d.lang === "fr" ? "/" : "/en";
  return (
    <>
      <SiteHeader d={d} home={home} />
      <main>
        <section className="hero">
          <Core size={360} />
          <h1>{d.hero.title}</h1>
          <p className="lead">{d.hero.lead}</p>
          <div id="liste" className="hero-form">
            <WaitlistForm d={d} source="hero" />
          </div>
        </section>

        <section className="film-section" aria-label={d.film.label}>
          <Film d={d} />
        </section>

        <section className="day" aria-labelledby="day-title">
          <h2 id="day-title">{d.day.title}</h2>
          <ol className="moments">
            {d.day.moments.map((m, i) => (
              <li key={m.time} className="moment">
                <div className="moment-text">
                  <time className={`clock ${CLOCK_TONE[i]}`} dateTime={m.time}>
                    {m.time}
                  </time>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
                <div className="moment-shot">
                  <Image src={m.image} alt={m.alt} width={1440} height={900} sizes="(max-width: 860px) 100vw, 720px" />
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="trust" aria-labelledby="trust-title">
          <div className="trust-inner">
            <h2 id="trust-title">{d.trust.title}</h2>
            <p className="trust-intro">{d.trust.intro}</p>
            <dl className="rules">
              {d.trust.rules.map((r) => (
                <div key={r.title} className="rule">
                  <dt>{r.title}</dt>
                  <dd>{r.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="build" aria-labelledby="build-title">
          <h2 id="build-title">{d.build.title}</h2>
          <p>{d.build.body}</p>
          <ul className="build-links">
            <li>
              <a href={site.instagram.url} rel="noopener" target="_blank">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                </svg>
                {d.build.instagram}
                <span className="handle">{site.instagram.handle}</span>
              </a>
            </li>
            <li>
              <a href={site.github.url} rel="noopener" target="_blank">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.65-.2.65-.46v-1.6c-2.64.57-3.2-1.27-3.2-1.27-.43-1.1-1.06-1.39-1.06-1.39-.86-.59.07-.58.07-.58.95.07 1.45.98 1.45.98.85 1.45 2.22 1.03 2.76.79.09-.61.33-1.03.6-1.27-2.11-.24-4.33-1.06-4.33-4.7 0-1.04.37-1.89.98-2.55-.1-.24-.42-1.21.09-2.52 0 0 .8-.26 2.61.97a9.1 9.1 0 0 1 4.76 0c1.81-1.23 2.6-.97 2.6-.97.52 1.31.2 2.28.1 2.52.61.66.98 1.51.98 2.55 0 3.65-2.23 4.45-4.35 4.69.34.29.65.87.65 1.76v2.6c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z"
                  />
                </svg>
                {d.build.github}
                <span className="handle">{site.github.handle}</span>
              </a>
            </li>
          </ul>
          <div className="build-form">
            <WaitlistForm d={d} source="footer" />
          </div>
        </section>
      </main>
      <SiteFooter d={d} home={home} />
    </>
  );
}
