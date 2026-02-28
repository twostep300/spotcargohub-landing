export function SolutionSection() {
  const cards = [
    {
      title: "Transparenz",
      description: "Alle Angebote in einer Ansicht - klar, vergleichbar, nachvollziehbar.",
      bullets: ["Status & Historie", "Vergabeentscheidungen dokumentiert"],
      visual: "grid",
    },
    {
      title: "Effiziente digitale Prozesse",
      description: "Weniger Pingpong. Weniger Nachfragen. Mehr Tempo.",
      bullets: ["Struktur statt E-Mail", "Schneller Standardprozess"],
      visual: "flow",
    },
    {
      title: "Kosteneinsparungen",
      description: "Besseres Marktbild fuehrt zu besseren Entscheidungen.",
      bullets: ["Preisniveau sichtbar", "weniger Opportunitaetskosten"],
      visual: "chart",
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
            <div
              className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-sm)]"
              key={card.title}
            >
              <div className="mb-5 rounded-3xl bg-[var(--color-surface)] p-4">
                {card.visual === "grid" ? (
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-2xl bg-white" />
                    <div className="h-12 rounded-2xl bg-white" />
                    <div className="h-12 rounded-2xl bg-white" />
                  </div>
                ) : null}
                {card.visual === "flow" ? (
                  <div className="flex items-center gap-2">
                    <div className="h-10 flex-1 rounded-2xl bg-white" />
                    <span className="text-[var(--color-accent-strong)]">→</span>
                    <div className="h-10 flex-1 rounded-2xl bg-white" />
                    <span className="text-[var(--color-accent-strong)]">→</span>
                    <div className="h-10 flex-1 rounded-2xl bg-white" />
                  </div>
                ) : null}
                {card.visual === "chart" ? (
                  <div className="flex h-12 items-end gap-2">
                    <div className="h-4 w-full rounded-t-2xl bg-white" />
                    <div className="h-7 w-full rounded-t-2xl bg-white" />
                    <div className="h-10 w-full rounded-t-2xl bg-white" />
                    <div className="h-12 w-full rounded-t-2xl bg-white" />
                  </div>
                ) : null}
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{card.description}</p>
              <div className="mt-6 space-y-2">
                {card.bullets.map((bullet) => (
                  <p className="text-sm font-medium text-[var(--color-brand)]" key={bullet}>
                    {bullet}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
