"use client";

import { useState } from "react";
import type { HeroVariant } from "@/styles/tokens";
import { Topbar } from "@/components/sections/topbar";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { LogisticsVisualsSection } from "@/components/sections/logistics-visuals";
import { PainSection } from "@/components/sections/pain";
import { SolutionSection } from "@/components/sections/solution";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { FeaturesSection } from "@/components/sections/features";
import { PricingSection } from "@/components/sections/pricing";
import { CtaBand } from "@/components/sections/cta-band";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { TestimonialSection } from "@/components/sections/testimonial";
import { BookingSection } from "@/components/sections/booking";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { MobileStickyBar } from "@/components/sections/mobile-sticky-bar";

type LandingPageProps = {
  heroVariant: HeroVariant;
};

export function LandingPage({ heroVariant }: LandingPageProps) {
  const [caseModalOpen, setCaseModalOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [caseForm, setCaseForm] = useState({
    name: "",
    company: "",
    email: "",
    role: "Einkauf",
  });
  const [caseSuccess, setCaseSuccess] = useState(false);

  function submitCase(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCaseSuccess(true);
  }

  return (
    <>
      <Topbar />
      <main>
        <Hero heroVariant={heroVariant} />
        <SocialProof />
        <LogisticsVisualsSection />
        <PainSection />
        <CtaBand
          description="Ein klarer, digitaler Standard spart Zeit und reduziert operative Reibung."
          title="Weg von Mail-Ketten, hin zu einem klaren Prozess."
        />
        <SolutionSection />
        <HowItWorksSection />
        <CtaBand
          description="Wenn der Ablauf klar ist, wird die Entscheidung deutlich einfacher."
          title="Struktur im Prozess zahlt direkt auf Tempo und Nachvollziehbarkeit ein."
        />
        <FeaturesSection />
        <PricingSection />
        <CaseStudiesSection onOpenCaseModal={() => {
          setCaseSuccess(false);
          setCaseModalOpen(true);
        }} />
        <CtaBand
          description="Praxisbeispiele schaffen Vertrauen und machen den Test greifbarer."
          title="Wenn die Richtung passt, lohnt sich der direkte Blick in Ihren Workflow."
        />
        <TestimonialSection />
        <BookingSection
          calendlyOpen={calendlyOpen}
          onCloseCalendly={() => setCalendlyOpen(false)}
          onOpenCalendly={() => setCalendlyOpen(true)}
        />
        <FinalCtaSection />
      </main>
      <Footer />
      <MobileStickyBar />

      <Modal onClose={() => setCaseModalOpen(false)} open={caseModalOpen} title="Case Study anfordern">
        {caseSuccess ? (
          <div>
            <p className="rounded-2xl bg-[rgba(245,204,87,0.22)] px-4 py-4 text-sm font-medium text-[var(--color-success)]">
              Danke. Die Anfrage wurde als UI-Flow erfasst.
            </p>
            <div className="mt-5">
              <Button onClick={() => setCaseModalOpen(false)} type="button">
                Schliessen
              </Button>
            </div>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={submitCase}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[var(--color-ink)]" htmlFor="case-name">
                Name
              </label>
              <input
                className="field"
                id="case-name"
                onChange={(event) => setCaseForm((current) => ({ ...current, name: event.target.value }))}
                required
                value={caseForm.name}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[var(--color-ink)]" htmlFor="case-company">
                Firma
              </label>
              <input
                className="field"
                id="case-company"
                onChange={(event) => setCaseForm((current) => ({ ...current, company: event.target.value }))}
                required
                value={caseForm.company}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[var(--color-ink)]" htmlFor="case-email">
                E-Mail
              </label>
              <input
                className="field"
                id="case-email"
                onChange={(event) => setCaseForm((current) => ({ ...current, email: event.target.value }))}
                required
                type="email"
                value={caseForm.email}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[var(--color-ink)]" htmlFor="case-role">
                Rolle
              </label>
              <select
                className="field"
                id="case-role"
                onChange={(event) => setCaseForm((current) => ({ ...current, role: event.target.value }))}
                value={caseForm.role}
              >
                <option>Einkauf</option>
                <option>Logistik</option>
                <option>Supply Chain</option>
                <option>GF</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <Button type="submit">Case Study anfordern</Button>
          </form>
        )}
      </Modal>
    </>
  );
}
