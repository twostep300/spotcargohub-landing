import { Button } from "@/components/ui/button";

/* eslint-disable @next/next/no-img-element */

export function PainSection() {
  const items = [
    ["✉", "E-Mail-Ketten mit unklaren Versionen", "Excel-Vergleich und manuelle Nacharbeit"],
    ["⏱", "Rueckfragen, fehlende Daten, Verzoegerungen", "Angebote sind schwer vergleichbar"],
    ["⚠", "Vergaben passieren unter Zeitdruck", "Kein sauberes Archiv und keine Nachvollziehbarkeit"],
  ];

  return (
    <section className="py-[var(--section-space)]" id="vorteile">
      <div className="mx-auto grid w-[var(--container-width)] gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">Pain Point</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
            Wenn Spotanfragen per Mail laufen, wird es teuer.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-ink-soft)]">
            Nicht wegen eines einzelnen Preises - wegen Zeit, Rueckfragen und fehlender Vergleichbarkeit.
          </p>
          <div className="mt-8 overflow-hidden rounded-[var(--radius-lg)] border border-[rgba(23,19,16,0.08)] bg-[linear-gradient(135deg,_#1d1712_0%,_#2f241b_60%,_#ef8b2c_100%)] p-4 text-white shadow-[var(--shadow-md)]">
            <img
              alt="Infografik zu unstrukturierten Spotanfragen per Mail"
              className="h-auto w-full rounded-[22px] object-cover"
              src="/graphics/pain-infografik.png"
            />
          </div>
          <img
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 opacity-12"
            src="/graphics/hintergrund-elemente.png"
          />
        </div>
        <div className="grid gap-4 lg:pt-16">
          {items.map(([icon, primary, secondary]) => (
            <div
              className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-sm)]"
              key={primary}
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[rgba(245,204,87,0.24)] text-base font-bold text-[var(--color-brand)]">
                  {icon}
                </span>
                <div className="space-y-3">
                  <p className="text-sm font-semibold leading-6 text-[var(--color-ink)]">{primary}</p>
                  <p className="text-sm leading-6 text-[var(--color-ink-soft)]">{secondary}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="pt-2">
            <Button href="#so-funktionierts" variant="ghost">
              So sieht ein sauberer Workflow aus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
