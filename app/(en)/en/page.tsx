import Landing from "@/components/Landing";
import { en } from "@/lib/dict";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(en, { path: "/en", alternates: { fr: "/", en: "/en" } });

export default function Page() {
  return <Landing d={en} />;
}
