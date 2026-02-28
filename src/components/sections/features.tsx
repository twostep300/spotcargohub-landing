export function FeaturesSection() {
  const features = [
    {
      title: "Strukturierte Angebotsverwaltung",
      copy: "Alle Angebote sauber an einem Ort.",
      kicker: "Vergleich",
      accent: "bg-[linear-gradient(135deg,_#171310_0%,_#483526_60%,_#ef8b2c_100%)] text-white",
    },
    {
      title: "Speditionskreis & Netzwerk",
      copy: "Arbeiten Sie mit Ihren Partnern - ohne Medienbruch.",
      kicker: "Netzwerk",
      accent: "bg-[linear-gradient(135deg,_#ef8b2c_0%,_#fec33a_100%)] text-[var(--color-ink)]",
    },
    {
      title: "Revisionssichere Dokumentation",
      copy: "Nachvollziehbarkeit fuer Einkauf & Management.",
      kicker: "Kontrolle",
      accent: "bg-[linear-gradient(135deg,_#fffdf9_0%,_#f6efe4_100%)] text-[var(--color-ink)] border border-[var(--color-line)]",
    },
  ];

  return (
    <section className="pb-[var(--section-space)]">
      <div className="mx-auto w-[var(--container-width)]">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
          Das bekommen Sie im Alltag wirklich
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {features.map((feature) => (
            <div className={`rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)] ${feature.accent}`} key={feature.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-75">{feature.kicker}</p>
              <div className="mt-10 min-h-36">
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 opacity-85">{feature.copy}</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] opacity-70">Im Tagesgeschaeft</span>
                <span className="text-xl">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
