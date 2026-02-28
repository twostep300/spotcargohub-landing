import { Accordion } from "@/components/ui/accordion";
import { Button, primaryCtaLabel } from "@/components/ui/button";

export function FaqSection() {
  const items = [
    {
      question: "Muessen wir ein IT-Projekt starten?",
      answer:
        "Nein. In der Regel starten Teams ohne grosses IT-Projekt. Setup und Onboarding sind schlank.",
    },
    {
      question: "Koennen wir mit unseren bestehenden Speditionen arbeiten?",
      answer:
        "Ja. Sie koennen Ihren Speditionskreis abbilden und Partner einladen. Matching ist optional.",
    },
    {
      question: "Welche Transportarten unterstuetzt ihr?",
      answer:
        "Typisch LKW, Luft und See - je nach Setup. Details klaeren wir in der Demo.",
    },
    {
      question: "Wie schnell sind wir live?",
      answer:
        "Oft innerhalb weniger Tage - abhaengig von Abstimmungen und Nutzerkreis.",
    },
    {
      question: "Wie funktioniert Matching?",
      answer:
        "Sie definieren Kriterien und Partnerkreis. Matching unterstuetzt bei der Auswahl - Sie behalten die Kontrolle.",
    },
    {
      question: "Wie laeuft die Testphase?",
      answer:
        "Sie testen den Workflow in einem klaren Rahmen. Danach entscheiden Sie, ob es passt.",
    },
    {
      question: "Was ist mit Datenschutz und Vertraulichkeit?",
      answer:
        "B2B-Standards, klare Rollen, Zugriffskontrolle. Details koennen im Security Fact Sheet dokumentiert werden.",
    },
    {
      question: "Gibt es Schnittstellen?",
      answer:
        "Ja, je nach Bedarf (z.B. CSV/API). Wir besprechen das pragmatisch in der Demo.",
    },
  ];

  return (
    <section className="py-[var(--section-space)]" id="faq">
      <div className="mx-auto w-[var(--container-width)]">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
          Haeufige Fragen
        </h2>
        <div className="mt-8">
          <Accordion items={items} />
        </div>
        <div className="mt-8">
          <Button href="#booking">{primaryCtaLabel}</Button>
        </div>
      </div>
    </section>
  );
}
