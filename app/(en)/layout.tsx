import "../globals.css";
import { fontVars } from "../fonts";

export { viewport } from "@/lib/metadata";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
