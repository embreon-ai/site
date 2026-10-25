import "../globals.css";
import { fontVars } from "../fonts";

export { viewport } from "@/lib/metadata";

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
