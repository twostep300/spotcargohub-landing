import type { HeroVariant } from "@/styles/tokens";
import { Button, primaryCtaLabel } from "@/components/ui/button";

/* eslint-disable @next/next/no-img-element */

const heroContent = {
  A: {
    headline: "Transportanfragen in Minuten statt Stunden.",
    subheadline:
      "Digitalisieren Sie Spotanfragen (LKW, Luft, See) - weniger E-Mail-Chaos, bessere Vergleichbarkeit, schnellere Vergabe.",
    microcopy: "Dauer 5 Min | Keine Kreditkarte noetig",
  },
  B: {
    headline: "Digitales Tagespreismanagement - ohne E-Mail-Chaos.",
    subheadline:
      "Anfragen buendeln, Angebote strukturiert vergleichen und Entscheidungen schneller treffen.",
    microcopy: "Dauer 5 Min | Keine Kreditkarte noetig",
  },
} as const;

export function Hero({ heroVariant }: { heroVariant: HeroVariant }) {
  const content = heroContent[heroVariant];

  return (
    <section className="relative overflow-hidden pb-20 pt-10 md:pb-24 md:pt-16" id="top">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_right,_rgba(245,204,87,0.32),_transparent_32%),radial-gradient(circle_at_72%_18%,_rgba(239,139,44,0.18),_transparent_24%),linear-gradient(180deg,_rgba(246,239,228,1)_0%,_rgba(246,239,228,0)_100%)]" />
      <div className="mx-auto grid w-[var(--container-width)] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
            Digitales Tagespreismanagement fuer Transporteinkauf
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] md:text-6xl">
            {content.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--color-ink-soft)]">{content.subheadline}</p>
          <div className="mt-8">
            <Button href="#booking">{primaryCtaLabel}</Button>
          </div>
          <p className="mt-3 text-sm font-medium text-[var(--color-muted)]">{content.microcopy}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              "Schneller Start ohne IT-Projekt",
              "Arbeiten Sie mit Ihren bestehenden Speditionen",
              "Volle Transparenz ueber Angebote und Vergaben",
            ].map((item) => (
              <div
                className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-ink-soft)]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm font-medium text-[var(--color-brand)]">
            Fuer Einkaufs- und Logistikteams im industriellen Mittelstand.
          </p>
        </div>
        <div className="relative">
          <img
            alt="SpotCargoHub Produktvisual fuer digitales Tagespreismanagement"
            className="relative z-10 h-auto w-full rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white shadow-[var(--shadow-md)]"
            src="/graphics/hero-produktvisual.png"
          />
          <img
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-6 z-0 h-40 w-40 opacity-18"
            src="/graphics/hintergrund-elemente.png"
          />
        </div>
      </div>
    </section>
  );
}
