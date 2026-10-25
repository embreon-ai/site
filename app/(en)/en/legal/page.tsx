import LegalPage from "@/components/LegalPage";
import { en } from "@/lib/dict";
import { pageMetadata } from "@/lib/metadata";
import { missing, site } from "@/lib/site";

export const metadata = pageMetadata(en, {
  path: "/en/legal",
  alternates: { fr: "/mentions-legales", en: "/en/legal" },
  title: "Legal notice · Embreon",
  description: "Publisher and host of embreon.com.",
});

export default function Page() {
  const l = site.legal;
  return (
    <LegalPage d={en} title="Legal notice" updated="Last updated October 25, 2026">
      <h2>Publisher</h2>
      <p>
        {l.publisher}, sole trader (micro-entreprise, France)
        <br />
        SIRET: {missing(l.siret, "en")}
        <br />
        Address: {missing(l.address, "en")}
        <br />
        Contact: {missing(l.email, "en")}
      </p>

      <h2>Publication director</h2>
      <p>{l.publisher}</p>

      <h2>Host</h2>
      <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>

      <h2>Personal data</h2>
      <p>
        The waitlist is the only data this site collects. See the <a href="/en/privacy">Privacy</a> page.
      </p>

      <h2>Intellectual property</h2>
      <p>The Embreon name, logo, mockups and film shown on this site belong to their publisher. The site’s code will be published as open source on GitHub.</p>
    </LegalPage>
  );
}
