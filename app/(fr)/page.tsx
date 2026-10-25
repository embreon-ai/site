import Landing from "@/components/Landing";
import { fr } from "@/lib/dict";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(fr, { path: "/", alternates: { fr: "/", en: "/en" } });

export default function Page() {
  return <Landing d={fr} />;
}
