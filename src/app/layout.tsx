import type { Metadata } from "next";
import { tokens } from "@/styles/tokens";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spotcargohub.com"),
  title: "SpotCargoHub | Transportanfragen digital statt per E-Mail",
  description:
    "Landingpage fuer Industrie- und Logistikteams: Spotanfragen schneller erstellen, Angebote strukturiert vergleichen und Vergaben sauber dokumentieren.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SpotCargoHub | 30 Tage kostenlos testen",
    description:
      "Conversion-optimierte LinkedIn-Ads Landingpage fuer digitales Tagespreismanagement im Transporteinkauf.",
    url: "https://spotcargohub.com",
    siteName: "SpotCargoHub",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body
        style={{
          fontFamily: tokens.fonts.sans,
        }}
      >
        {children}
      </body>
    </html>
  );
}
