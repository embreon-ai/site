import LegalPage from "@/components/LegalPage";
import { fr } from "@/lib/dict";
import { pageMetadata } from "@/lib/metadata";
import { missing, site } from "@/lib/site";

export const metadata = pageMetadata(fr, {
  path: "/confidentialite",
  alternates: { fr: "/confidentialite", en: "/en/privacy" },
  title: "Confidentialité · Embreon",
  description: "Comment Embreon utilise l’adresse e-mail laissée sur la liste d’attente.",
});

export default function Page() {
  const l = site.legal;
  return (
    <LegalPage d={fr} title="Confidentialité" updated="Mis à jour le 25 octobre 2026">
      <p>Ce site ne collecte qu’une seule donnée personnelle : l’adresse e-mail que tu laisses pour rejoindre la liste d’attente.</p>

      <h2>Ce qui est enregistré</h2>
      <ul>
        <li>Ton adresse e-mail.</li>
        <li>La langue de la page (français ou anglais) et l’endroit du formulaire utilisé.</li>
        <li>La date d’inscription.</li>
      </ul>

      <h2>Pourquoi</h2>
      <p>Uniquement pour te prévenir de la sortie d’Embreon et des étapes importantes de son lancement. Ton adresse n’est ni vendue, ni partagée, ni utilisée pour de la publicité.</p>

      <h2>Sur quelle base</h2>
      <p>Ton consentement, donné en t’inscrivant. Tu peux le retirer à tout moment.</p>

      <h2>Combien de temps</h2>
      <p>Jusqu’au lancement, puis au plus 12 mois après, ou jusqu’à ce que tu demandes la suppression.</p>

      <h2>Où</h2>
      <p>Les adresses sont stockées chez {l.dataProcessor}. Le site est hébergé par {l.host}.</p>

      <h2>Tes droits</h2>
      <p>
        Tu peux demander l’accès à tes données, leur correction ou leur suppression en écrivant à {missing(l.email, "fr")}. Si tu estimes que tes droits ne sont pas respectés, tu peux saisir la CNIL (cnil.fr).
      </p>

      <h2>Cookies</h2>
      <p>Ce site n’utilise ni cookie publicitaire ni outil de suivi.</p>
    </LegalPage>
  );
}
