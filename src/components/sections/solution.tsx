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
              <div className="mb-5 rounded-3xl bg-[linear-gradient(135deg,_#fffdfa_0%,_#f6efe4_100%)] p-4">
                {card.visual === "grid" ? (
                  <svg className="h-16 w-full" fill="none" viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="10" width="66" height="42" rx="14" fill="white" />
                    <rect x="77" y="10" width="66" height="42" rx="14" fill="white" />
                    <rect x="152" y="10" width="66" height="42" rx="14" fill="white" />
                    <rect x="18" y="24" width="34" height="6" rx="3" fill="#E7D8C4" />
                    <rect x="93" y="24" width="34" height="6" rx="3" fill="#E7D8C4" />
                    <rect x="168" y="24" width="34" height="6" rx="3" fill="#E7D8C4" />
                  </svg>
                ) : null}
                {card.visual === "flow" ? (
                  <svg className="h-16 w-full" fill="none" viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="16" width="48" height="32" rx="12" fill="white" />
                    <rect x="86" y="16" width="48" height="32" rx="12" fill="white" />
                    <rect x="166" y="16" width="48" height="32" rx="12" fill="white" />
                    <path d="M60 32H80" stroke="#EF8B2C" strokeLinecap="round" strokeWidth="4" />
                    <path d="M140 32H160" stroke="#EF8B2C" strokeLinecap="round" strokeWidth="4" />
                    <path d="M75 24L83 32L75 40" stroke="#EF8B2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                    <path d="M155 24L163 32L155 40" stroke="#EF8B2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                  </svg>
                ) : null}
                {card.visual === "chart" ? (
                  <svg className="h-16 w-full" fill="none" viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="34" width="28" height="18" rx="8" fill="white" />
                    <rect x="64" y="26" width="28" height="26" rx="8" fill="white" />
                    <rect x="108" y="18" width="28" height="34" rx="8" fill="white" />
                    <rect x="152" y="10" width="28" height="42" rx="8" fill="white" />
                    <path d="M18 16C42 24 72 26 92 18C112 10 144 18 182 8" stroke="#EF8B2C" strokeLinecap="round" strokeWidth="4" />
                  </svg>
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
