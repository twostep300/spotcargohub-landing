import { Card } from "@/components/ui/card";

export function TestimonialSection() {
  return (
    <section className="pb-[var(--section-space)]">
      <div className="mx-auto w-[var(--container-width)]">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">Kundenstimme</h2>
        <Card className="mt-8 p-8">
          <p className="text-xl leading-9 text-[var(--color-ink)]">
            &ldquo;Spotanfragen sind bei uns deutlich strukturierter - und wir sparen jede Woche Zeit.&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold text-[var(--color-brand)]">Leitung Logistik (Platzhalter)</p>
          <p className="mt-1 text-sm text-[var(--color-ink-soft)]">Industrieunternehmen (Platzhalter)</p>
        </Card>
      </div>
    </section>
  );
}
