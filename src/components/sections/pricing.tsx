"use client";

import { useState } from "react";
import { Button, primaryCtaLabel } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Audience = "industrie" | "speditionen";

type Plan = {
  name: string;
  teaser: string;
  price: string;
  inheritedFrom?: string;
  core?: string[];
  delta?: string[];
  note?: string;
  highlight?: boolean;
  onRequest?: boolean;
};

const plans: Record<Audience, Plan[]> = {
  industrie: [
    {
      name: "Basic",
      teaser: "Der schlanke Einstieg fuer erste digitale Spotanfragen.",
      price: "EUR 89,90 mtl.",
      core: [
        "20 Anfragen pro Monat",
        "5 Benutzer",
        "Speditionsverwaltung inklusive",
      ],
      note: "Ideal, wenn Sie strukturiert starten wollen, ohne den Prozess sofort breit auszurollen.",
    },
    {
      name: "Business",
      teaser: "Mehr Volumen, mehr Nutzer, mehr Spielraum im Alltag.",
      price: "EUR 119,90 mtl.",
      inheritedFrom: "Basic",
      core: [
        "Unbegrenzte Anfragen statt 20",
        "7 Benutzer statt 5",
        "CargoBox optional statt semiautomated",
      ],
    },
    {
      name: "Business Plus",
      teaser: "Der klare Standard fuer Teams mit regelmaessigem Spotvolumen.",
      price: "EUR 169,90 mtl.",
      inheritedFrom: "Business",
      core: [
        "20 Benutzer statt 7",
        "Mehr Spielraum fuer mehrere Teams oder Standorte",
        "Voller Standard fuer operative Skalierung",
      ],
      highlight: true,
    },
    {
      name: "Corporate",
      teaser: "Individuelles Setup fuer komplexe Organisationen.",
      price: "Auf Anfrage",
      core: [
        "Individuelle Benutzer- und Rollout-Logik",
        "Mehrere Standorte und Freigabeprozesse",
        "Persoenliche Abstimmung statt Standardpaket",
      ],
      onRequest: true,
    },
  ],
  speditionen: [
    {
      name: "FREE",
      teaser: "Kostenfrei starten und erste digitale Kundenanbindungen testen.",
      price: "kostenfrei",
      core: [
        "1 PLZ-Bereich Reichweite",
        "1 Kundenanbindung",
        "2 aktive Benutzer",
      ],
      note: "Der niedrigste Einstieg, wenn Sie den Kanal erst pruefen wollen.",
    },
    {
      name: "Basic",
      teaser: "Mehr Reichweite und erste skalierbare Kundenarbeit.",
      price: "EUR 59,90 mtl.",
      inheritedFrom: "FREE",
      core: [
        "2 PLZ-Bereiche statt 1",
        "6 Kundenanbindungen statt 1",
        "5 Benutzer statt 2",
      ],
    },
    {
      name: "Business",
      teaser: "Mehr Kontakte und mehr aktive Vertriebsleistung.",
      price: "EUR 119,90 mtl.",
      inheritedFrom: "Basic",
      core: [
        "3 PLZ-Bereiche statt 2",
        "Bis zu 12 Kundenanbindungen statt 6",
        "Routen, CargoBox und Feedback verdoppelt",
      ],
    },
    {
      name: "Business Plus",
      teaser: "Volles Standardpaket fuer Reichweite, Vertrieb und Auswertung.",
      price: "EUR 169,90 mtl.",
      inheritedFrom: "Business",
      core: [
        "4 PLZ-Bereiche statt 3",
        "Bis zu 30 Kundenanbindungen statt 12",
        "CargoBox und Feedback unbegrenzt",
      ],
      highlight: true,
    },
  ],
};

function CompactPlanCard({ plan }: { plan: Plan }) {
  const featureRows = Array.from({ length: 3 }, (_, index) => plan.core?.[index] ?? null);

  return (
    <Card
      className={`flex h-full flex-col p-6 ${
        plan.highlight ? "border-[var(--color-accent-strong)] shadow-[var(--shadow-glow)]" : ""
      }`}
    >
      <div className="min-h-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)]">
            {plan.name}
          </p>
          {plan.highlight ? (
            <p className="mt-2 inline-flex rounded-full bg-[rgba(245,204,87,0.26)] px-3 py-1 text-xs font-semibold text-[var(--color-brand)]">
              Meist gewaehlt
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4 min-h-22">
        <p className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">{plan.price}</p>
        <p className="mt-2 text-sm leading-7 text-[var(--color-ink-soft)]">{plan.teaser}</p>
      </div>

      <div className="mt-5 min-h-14">
        {plan.inheritedFrom ? (
          <p className="rounded-2xl bg-[var(--color-surface)] px-4 py-3 text-sm font-semibold text-[var(--color-brand)]">
            Alles aus {plan.inheritedFrom} plus:
          </p>
        ) : (
          <div aria-hidden="true" className="h-12" />
        )}
      </div>

      <div className="mt-5 grid gap-3">
        {featureRows.map((item, index) => (
          <div
            className="flex min-h-14 items-start gap-3 border-b border-[rgba(231,216,196,0.7)] pb-3 text-sm leading-6 text-[var(--color-ink-soft)] last:border-b-0 last:pb-0"
            key={`${plan.name}-feature-${index}`}
          >
            <span className="mt-1 text-[var(--color-accent-strong)]">+</span>
            <span>{item ?? ""}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 min-h-16">
        {plan.note ? <p className="text-xs leading-6 text-[var(--color-muted)]">{plan.note}</p> : null}
      </div>

      <div className="mt-auto pt-6">
        <Button className="w-full" href="#booking">
          {plan.onRequest ? "Anfrage senden" : primaryCtaLabel}
        </Button>
      </div>
    </Card>
  );
}

export function PricingSection() {
  const [audience, setAudience] = useState<Audience>("industrie");
  const currentPlans = plans[audience];

  return (
    <section className="py-[var(--section-space)]" id="preise">
      <div className="mx-auto w-[var(--container-width)]">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">Preise</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
              Flexible Plaene fuer jeden Bedarf
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-ink-soft)]">
              Waehlen Sie den Plan, der zu Ihrem Unternehmen passt.
            </p>
          </div>
          <div className="inline-flex rounded-[var(--radius-pill)] border border-[var(--color-line)] bg-white p-1">
            <button
              className={`rounded-[var(--radius-pill)] px-5 py-3 text-sm font-semibold transition ${
                audience === "industrie"
                  ? "bg-[linear-gradient(135deg,_#FEC33A_0%,_#FFDF95_100%)] text-[var(--color-ink)]"
                  : "text-[var(--color-ink-soft)]"
              }`}
              onClick={() => setAudience("industrie")}
              type="button"
            >
              Industrieunternehmen
            </button>
            <button
              className={`rounded-[var(--radius-pill)] px-5 py-3 text-sm font-semibold transition ${
                audience === "speditionen"
                  ? "bg-[linear-gradient(135deg,_#FEC33A_0%,_#FFDF95_100%)] text-[var(--color-ink)]"
                  : "text-[var(--color-ink-soft)]"
              }`}
              onClick={() => setAudience("speditionen")}
              type="button"
            >
              Speditionen
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-4">
          {currentPlans.map((plan) => (
            <CompactPlanCard key={`${audience}-${plan.name}`} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
