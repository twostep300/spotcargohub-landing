import { Button, primaryCtaLabel } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="pb-[var(--section-space)]">
      <div className="mx-auto w-[var(--container-width)] rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white px-6 py-10 text-center md:px-8">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
          Weniger Aufwand. Mehr Transparenz. Schnellere Entscheidungen.
        </h2>
        <div className="mt-8 flex justify-center">
          <Button href="#booking">{primaryCtaLabel}</Button>
        </div>
        <p className="mt-5 text-sm font-medium text-[var(--color-ink-soft)]">
          Schneller Start | Bestehende Speditionen | Nachvollziehbarkeit
        </p>
      </div>
    </section>
  );
}
