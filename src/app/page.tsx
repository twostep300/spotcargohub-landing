import { LandingPage } from "@/components/landing-page";
import type { HeroVariant } from "@/styles/tokens";

const heroVariant: HeroVariant = "A";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "SpotCargoHub",
        url: "https://spotcargohub.com",
        email: "hallo@spotcargohub.com",
      },
      {
        "@type": "SoftwareApplication",
        name: "SpotCargoHub",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Digitales Tagespreismanagement fuer Transportanfragen, Angebotsvergleich und dokumentierte Vergaben.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
      },
    ],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
        type="application/ld+json"
      />

      {/* LinkedIn Insight Tag placeholder */}
      {/* GTM snippet placeholder */}

      <LandingPage heroVariant={heroVariant} />
    </>
  );
}
