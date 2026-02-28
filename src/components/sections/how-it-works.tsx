import { Button, primaryCtaLabel } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HowItWorksSection() {
  const steps = [
    ["1. Anfrage erstellen", "Transportart, Route, Anforderungen, Zeitfenster."],
    ["2. Speditionskreis waehlen", "Bestehende Partner einladen oder Matching nutzen."],
    ["3. Angebote vergleichen", "Strukturiert, filterbar, nachvollziehbar."],
    ["4. Vergeben & dokumentieren", "Vergabe mit Begruendung, Archiv inklusive."],
  ];

  return (
    <section className="py-[var(--section-space)]" id="so-funktionierts">
      <div className="mx-auto w-[var(--container-width)]">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
          So funktioniert&apos;s in 4 Schritten
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {steps.map(([title, copy]) => (
            <Card className="p-6" key={title}>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)]">{title}</p>
              <p className="mt-4 text-base leading-8 text-[var(--color-ink-soft)]">{copy}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button href="#booking">{primaryCtaLabel}</Button>
        </div>
      </div>
    </section>
  );
}
