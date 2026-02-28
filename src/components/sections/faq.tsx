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
  ];

  return (
    <section className="py-[var(--section-space)]" id="faq">
      <div className="mx-auto w-[var(--container-width)]">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
          Haeufige Fragen
        </h2>
        <div className="mt-8 max-w-4xl">
          <Accordion items={items} />
        </div>
        <div className="mt-8">
          <Button href="#booking">{primaryCtaLabel}</Button>
        </div>
      </div>
    </section>
  );
}
