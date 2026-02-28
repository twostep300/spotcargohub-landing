/* eslint-disable @next/next/no-img-element */

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
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
                  <img
                    alt={`${title} Icon`}
                    className="absolute left-0 top-0 h-[200%] max-w-none w-[200%]"
                    src="/graphics/how-it-works-icons.png"
                    style={{ transform: `translate(${index % 2 === 1 ? "-50%" : "0"}, ${index > 1 ? "-50%" : "0"})` }}
                  />
                </div>
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
