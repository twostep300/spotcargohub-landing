import { Card } from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      title: "Strukturierte Angebotsverwaltung",
      copy: "Alle Angebote sauber an einem Ort.",
      bullets: ["Filter & Vergleich", "Status & Notizen"],
    },
    {
      title: "Speditionskreis & Netzwerk",
      copy: "Arbeiten Sie mit Ihren Partnern - ohne Medienbruch.",
      bullets: ["Einladen", "Matching optional"],
    },
    {
      title: "Revisionssichere Dokumentation",
      copy: "Nachvollziehbarkeit fuer Einkauf & Management.",
      bullets: ["Archiv", "Vergabehistorie"],
    },
    {
      title: "Schneller Start",
      copy: "Kein monatelanges IT-Projekt.",
      bullets: ["Setup in Tagen", "Onboarding unterstuetzt"],
    },
    {
      title: "Integration-ready",
      copy: "CSV/API optional - wenn Sie es brauchen.",
      bullets: ["Daten exportierbar", "Schnittstellen vorbereitbar"],
    },
    {
      title: "Sicherheit & Vertraulichkeit",
      copy: "B2B-Standards, Zugriffskontrolle, klare Rollen.",
      bullets: ["Rollen", "Zugriffsrechte"],
    },
  ];

  return (
    <section className="pb-[var(--section-space)]">
      <div className="mx-auto w-[var(--container-width)]">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
          Das bekommen Sie im Alltag wirklich
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <Card className="p-6" key={feature.title}>
              <h3 className="text-xl font-semibold text-[var(--color-ink)]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{feature.copy}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {feature.bullets.map((bullet) => (
                  <span
                    className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold text-[var(--color-brand)]"
                    key={bullet}
                  >
                    {bullet}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
