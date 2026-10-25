import LegalPage from "@/components/LegalPage";
import { en } from "@/lib/dict";
import { pageMetadata } from "@/lib/metadata";
import { missing, site } from "@/lib/site";

export const metadata = pageMetadata(en, {
  path: "/en/privacy",
  alternates: { fr: "/confidentialite", en: "/en/privacy" },
  title: "Privacy · Embreon",
  description: "How Embreon uses the email address left on the waitlist.",
});

export default function Page() {
  const l = site.legal;
  return (
    <LegalPage d={en} title="Privacy" updated="Last updated October 25, 2026">
      <p>This site collects a single piece of personal data: the email address you leave to join the waitlist.</p>

      <h2>What is stored</h2>
      <ul>
        <li>Your email address.</li>
        <li>The page language (French or English) and which form you used.</li>
        <li>The signup date.</li>
      </ul>

      <h2>Why</h2>
      <p>Only to tell you when Embreon ships and about major launch milestones. Your address is never sold, shared or used for advertising.</p>

      <h2>Legal basis</h2>
      <p>Your consent, given when you sign up. You can withdraw it at any time.</p>

      <h2>How long</h2>
      <p>Until launch, then at most 12 months after, or until you ask for deletion.</p>

      <h2>Where</h2>
      <p>Addresses are stored with Supabase Inc. (data hosted in the European Union). The site is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.</p>

      <h2>Your rights</h2>
      <p>
        You can ask to access, correct or delete your data by writing to {missing(l.email, "en")}. If you believe your rights are not respected, you can contact the French data protection authority, the CNIL (cnil.fr).
      </p>

      <h2>Cookies</h2>
      <p>This site uses no advertising cookies and no tracking tools.</p>
    </LegalPage>
  );
}
