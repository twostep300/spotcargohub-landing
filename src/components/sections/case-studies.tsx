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
          So teuer ist unstrukturierter Einkauf wirklich
        </h2>
        <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
          Zwei typische Szenarien, die zeigen, wo Zeit und Marge verloren gehen - und was ein klarer Prozess aendert.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {cases.map((item, index) => (
            <Card className={`overflow-hidden p-0 ${index === 0 ? "bg-[var(--color-ink)] text-white" : "bg-white"}`} key={item.name}>
              <div className={`p-6 ${index === 0 ? "text-white" : ""}`}>
                <p className={`text-sm font-semibold uppercase tracking-[0.14em] ${index === 0 ? "text-[var(--color-accent)]" : "text-[var(--color-brand)]"}`}>{item.name}</p>
                <p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-[rgba(255,255,255,0.78)]" : "text-[var(--color-ink-soft)]"}`}>
                  Ausgangslage: {item.situation}
                </p>
              </div>
              <div className={`grid gap-3 px-6 pb-2 sm:grid-cols-3 ${index === 0 ? "bg-[rgba(255,255,255,0.03)]" : ""}`}>
                {item.kpis.map((kpi) => (
                  <div className={`rounded-2xl px-4 py-4 text-center text-sm font-semibold ${index === 0 ? "bg-[rgba(255,255,255,0.08)] text-white" : "bg-[var(--color-surface)] text-[var(--color-ink)]"}`} key={kpi}>
                    {kpi}
                  </div>
                ))}
              </div>
              <div className="p-6">
                <blockquote className={`border-l-2 pl-4 text-base italic ${index === 0 ? "border-[var(--color-accent)] text-white" : "border-[var(--color-accent)] text-[var(--color-ink)]"}`}>
                  {item.quote}
                </blockquote>
                <div className="mt-6">
                  <Button onClick={onOpenCaseModal} type="button" variant={index === 0 ? "secondary" : "ghost"}>
                    Case Study anfordern
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
