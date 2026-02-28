export function HowItWorksSection() {
  const steps = [
    "Anfrage erstellen",
    "Speditionskreis waehlen",
    "Angebote vergleichen",
    "Vergeben",
  ];

  return (
    <section className="py-[var(--section-space)]" id="so-funktionierts">
      <div className="mx-auto w-[var(--container-width)]">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
          So funktioniert&apos;s in 4 Schritten
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((title, index) => (
            <div
              className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white px-5 py-5 shadow-[var(--shadow-sm)]"
              key={title}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,_#FEC33A_0%,_#FFDF95_100%)] text-sm font-bold text-[var(--color-ink)]">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-ink)]">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
