import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PainSection() {
  const items = [
    "E-Mail-Ketten mit unklaren Versionen",
    "Excel-Vergleich, Copy/Paste, manuelle Nacharbeit",
    "Rueckfragen, fehlende Daten, Verzoegerungen",
    "Angebote sind schwer vergleichbar",
    "Vergaben passieren unter Zeitdruck",
    "Kein sauberes Archiv / keine Nachvollziehbarkeit",
  ];

  return (
    <section className="py-[var(--section-space)]" id="vorteile">
      <div className="mx-auto w-[var(--container-width)]">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">Pain Point</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
            Wenn Spotanfragen per Mail laufen, wird es teuer.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-ink-soft)]">
            Nicht wegen eines einzelnen Preises - wegen Zeit, Rueckfragen und fehlender Vergleichbarkeit.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Card className="flex items-start gap-4 p-5" key={item}>
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(245,204,87,0.24)] text-[var(--color-brand)]">
                o
              </span>
              <p className="text-sm font-medium leading-7 text-[var(--color-ink-soft)]">{item}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button href="#so-funktionierts" variant="ghost">
            So sieht ein sauberer Workflow aus
          </Button>
        </div>
      </div>
    </section>
  );
}
