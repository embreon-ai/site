import LegalPage from "@/components/LegalPage";
import { fr } from "@/lib/dict";
import { pageMetadata } from "@/lib/metadata";
import { missing, site } from "@/lib/site";

export const metadata = pageMetadata(fr, {
  path: "/mentions-legales",
  alternates: { fr: "/mentions-legales", en: "/en/legal" },
  title: "Mentions légales · Embreon",
  description: "Éditeur et hébergeur du site embreon.com.",
});

export default function Page() {
  const l = site.legal;
  return (
    <LegalPage d={fr} title="Mentions légales" updated="Mis à jour le 25 octobre 2026">
      <h2>Éditeur du site</h2>
      <p>
        {l.publisher}, {l.status}
        <br />
        SIRET : {missing(l.siret, "fr")}
        <br />
        Adresse : {missing(l.address, "fr")}
        <br />
        Contact : {missing(l.email, "fr")}
      </p>

      <h2>Directeur de la publication</h2>
      <p>{l.publisher}</p>

      <h2>Hébergeur</h2>
      <p>{l.host}</p>

      <h2>Données personnelles</h2>
      <p>
        La liste d’attente est la seule collecte de données du site. Tout est expliqué sur la page <a href="/confidentialite">Confidentialité</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>Le nom Embreon, le logo, les maquettes et le film présentés sur ce site appartiennent à leur éditeur. Le code du site sera publié en open source sur GitHub.</p>
    </LegalPage>
  );
}
