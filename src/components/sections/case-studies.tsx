import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type CaseStudiesSectionProps = {
  onOpenCaseModal: () => void;
};

function CaseVisual({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`rounded-3xl p-4 ${dark ? "bg-[rgba(255,255,255,0.06)]" : "bg-[var(--color-surface)]"}`}>
      <svg className="h-36 w-full" fill="none" viewBox="0 0 320 144" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="18" width="304" height="96" rx="24" fill={dark ? "rgba(255,255,255,0.08)" : "white"} />
        <rect x="28" y="38" width="82" height="56" rx="16" fill={dark ? "rgba(255,255,255,0.12)" : "#F6EFE4"} />
        <rect x="126" y="38" width="166" height="14" rx="7" fill={dark ? "rgba(255,255,255,0.42)" : "#E7D8C4"} />
        <rect x="126" y="61" width="122" height="12" rx="6" fill={dark ? "rgba(255,255,255,0.24)" : "rgba(23,19,16,0.12)"} />
        <rect x="126" y="81" width="148" height="12" rx="6" fill={dark ? "rgba(255,255,255,0.18)" : "rgba(23,19,16,0.08)"} />
        <path d="M42 80L58 60L76 70L94 48" stroke="#EF8B2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
        <circle cx="42" cy="80" r="4" fill="#FEC33A" />
        <circle cx="58" cy="60" r="4" fill="#FEC33A" />
        <circle cx="76" cy="70" r="4" fill="#FEC33A" />
        <circle cx="94" cy="48" r="4" fill="#FEC33A" />
        <path d="M22 124H298" stroke={dark ? "rgba(255,255,255,0.12)" : "#E7D8C4"} strokeLinecap="round" strokeWidth="4" />
      </svg>
    </div>
  );
}

export function CaseStudiesSection({ onOpenCaseModal }: CaseStudiesSectionProps) {
  const cases = [
    {
      name: "Maschinenbau (Beispiel)",
      situation: "Viele Spotanfragen ueber Mail/Excel, Angebote kamen unstrukturiert.",
      kpis: ["-40% Aufwand", "Angebote < 1h", "mehr Vergleichbarkeit"],
      quote: "Seit wir strukturierter anfragen, entscheiden wir deutlich schneller.",
    },
    {
      name: "Chemie/Industrie (Beispiel)",
      situation: "Hoher Zeitdruck bei Tagespreisen, wenig Transparenz ueber Entscheidungen.",
      kpis: ["schnellere Vergabe", "klarer Ueberblick", "sauberes Archiv"],
      quote: "Endlich sehen wir Angebote und Vergaben an einem Ort.",
    },
  ];

  return (
    <section className="py-[var(--section-space)]" id="ergebnisse">
      <div className="mx-auto w-[var(--container-width)]">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">Ergebnisse</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
          So teuer ist unstrukturierter Einkauf wirklich
        </h2>
        <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
          Zwei typische Szenarien, die zeigen, wo Zeit und Marge verloren gehen - und was ein klarer Prozess aendert.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {cases.map((item, index) => (
            <Card className={`overflow-hidden p-0 ${index === 0 ? "bg-[var(--color-ink)] text-white" : "bg-white"}`} key={item.name}>
              <div className={`p-6 ${index === 0 ? "text-white" : ""}`}>
                <p className={`text-sm font-semibold uppercase tracking-[0.14em] ${index === 0 ? "text-[var(--color-accent)]" : "text-[var(--color-brand)]"}`}>{item.name}</p>
                <p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-[rgba(255,255,255,0.78)]" : "text-[var(--color-ink-soft)]"}`}>
                  Ausgangslage: {item.situation}
                </p>
                <div className="mt-5">
                  <CaseVisual dark={index === 0} />
                </div>
              </div>
              <div className={`grid gap-3 px-6 pb-2 sm:grid-cols-3 ${index === 0 ? "bg-[rgba(255,255,255,0.03)]" : ""}`}>
                {item.kpis.map((kpi) => (
                  <div className={`rounded-2xl px-4 py-4 text-center text-sm font-semibold ${index === 0 ? "bg-[rgba(255,255,255,0.08)] text-white" : "bg-[var(--color-surface)] text-[var(--color-ink)]"}`} key={kpi}>
                    {kpi}
                  </div>
                ))}
              </div>
              <div className="p-6">
                <blockquote className={`border-l-2 pl-4 text-base italic ${index === 0 ? "border-[var(--color-accent)] text-white" : "border-[var(--color-accent)] text-[var(--color-ink)]"}`}>
                  {item.quote}
                </blockquote>
                <div className="mt-6">
                  <Button onClick={onOpenCaseModal} type="button" variant={index === 0 ? "secondary" : "ghost"}>
                    Case Study anfordern
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
