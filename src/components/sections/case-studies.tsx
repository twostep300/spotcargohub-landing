import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type CaseStudiesSectionProps = {
  onOpenCaseModal: () => void;
};

export function CaseStudiesSection({ onOpenCaseModal }: CaseStudiesSectionProps) {
  const cases = [
    {
      name: "Maschinenbau (Beispiel)",
      situation: "Viele Spotanfragen ueber Mail/Excel, Angebote kamen unstrukturiert.",
      kpis: ["-40% Aufwand", "Angebote < 1h", "mehr Vergleichbarkeit"],
      quote: "Seit wir strukturierter anfragen, entscheiden wir deutlich schneller.",
    },
    {
      name: "Chemie/Industrie (Beispiel)",
      situation: "Hoher Zeitdruck bei Tagespreisen, wenig Transparenz ueber Entscheidungen.",
      kpis: ["schnellere Vergabe", "klarer Ueberblick", "sauberes Archiv"],
      quote: "Endlich sehen wir Angebote und Vergaben an einem Ort.",
    },
  ];

  return (
    <section className="py-[var(--section-space)]" id="ergebnisse">
      <div className="mx-auto w-[var(--container-width)]">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">Ergebnisse</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
          Ergebnisse, die Entscheider sehen wollen
        </h2>
        <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
          Beispiele - echte Werte bitte bei Bedarf einsetzen.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {cases.map((item) => (
            <Card className="p-6" key={item.name}>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)]">{item.name}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
                Ausgangslage: {item.situation}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {item.kpis.map((kpi) => (
                  <div className="rounded-2xl bg-[var(--color-surface)] px-4 py-4 text-center text-sm font-semibold text-[var(--color-ink)]" key={kpi}>
                    {kpi}
                  </div>
                ))}
              </div>
              <blockquote className="mt-6 border-l-2 border-[var(--color-accent)] pl-4 text-base italic text-[var(--color-ink)]">
                {item.quote}
              </blockquote>
              <div className="mt-6">
                <Button onClick={onOpenCaseModal} type="button" variant="ghost">
                  Case Study anfordern
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
