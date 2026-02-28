import { Card } from "@/components/ui/card";

export function SolutionSection() {
  const cards = [
    {
      title: "Transparenz",
      description: "Alle Angebote in einer Ansicht - klar, vergleichbar, nachvollziehbar.",
      bullets: ["Status & Historie", "Vergabeentscheidungen dokumentiert"],
    },
    {
      title: "Effiziente digitale Prozesse",
      description: "Weniger Pingpong. Weniger Nachfragen. Mehr Tempo.",
      bullets: ["Struktur statt E-Mail", "Schneller Standardprozess"],
    },
    {
      title: "Kosteneinsparungen",
      description: "Besseres Marktbild fuehrt zu besseren Entscheidungen.",
      bullets: ["Preisniveau sichtbar", "weniger Opportunitaetskosten"],
    },
  ];

  return (
    <section className="pb-[var(--section-space)]">
      <div className="mx-auto w-[var(--container-width)]">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
          Ein Workflow, der Entscheidungen leichter macht.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <Card className="p-6" key={card.title}>
              <h3 className="text-xl font-semibold text-[var(--color-ink)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{card.description}</p>
              <div className="mt-6 space-y-2">
                {card.bullets.map((bullet) => (
                  <p className="text-sm font-medium text-[var(--color-brand)]" key={bullet}>
                    {bullet}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
