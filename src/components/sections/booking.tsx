"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, primaryCtaLabel } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";

type BookingSectionProps = {
  calendlyOpen: boolean;
  onOpenCalendly: () => void;
  onCloseCalendly: () => void;
};

type Errors = Partial<Record<"email" | "privacy", string>>;

const initialForm = {
  email: "",
  privacy: false,
};

export function BookingSection({ calendlyOpen, onOpenCalendly, onCloseCalendly }: BookingSectionProps) {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  function validate() {
    const nextErrors: Errors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Bitte gueltige E-Mail eingeben.";
    if (!form.privacy) nextErrors.privacy = "Bitte Datenschutz bestaetigen.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    setLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    router.push("/thank-you");
  }

  return (
    <>
      <section className="py-[var(--section-space)]" id="booking">
        <div className="mx-auto grid w-[var(--container-width)] gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">Demo-Anfrage</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
              30 Tage kostenlos testen
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-ink-soft)]">
              Tragen Sie nur Ihre E-Mail ein. Wir melden uns mit dem naechsten Schritt fuer Ihren Testzugang.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Dauer 5 Min", "Keine Kreditkarte", "Schneller Start", "Direkter Rueckruf"].map((item) => (
                <div className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-ink-soft)]" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Card className="p-6 md:p-7">
            <form className="space-y-5" noValidate onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--color-ink)]" htmlFor="email">
                  E-Mail
                </label>
                <input
                  className="field"
                  id="email"
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  required
                  type="email"
                  value={form.email}
                />
                {errors.email ? <p className="mt-2 text-sm text-[#b54747]">{errors.email}</p> : null}
              </div>

              <div>
                <label className="flex items-start gap-3 text-sm leading-6 text-[var(--color-ink-soft)]">
                  <input
                    checked={form.privacy}
                    onChange={(event) => setForm((current) => ({ ...current, privacy: event.target.checked }))}
                    type="checkbox"
                  />
                  <span>Ich stimme der Verarbeitung meiner Daten gemaess Datenschutz zu.</span>
                </label>
                {errors.privacy ? <p className="mt-2 text-sm text-[#b54747]">{errors.privacy}</p> : null}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button disabled={loading} type="submit">
                  {loading ? "Wird gesendet..." : primaryCtaLabel}
                </Button>
                <button
                  className="text-sm font-semibold text-[var(--color-brand)]"
                  onClick={onOpenCalendly}
                  type="button"
                >
                  Direkt Termin waehlen
                </button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <Modal onClose={onCloseCalendly} open={calendlyOpen} title="Termin waehlen">
        <div className="rounded-3xl border border-dashed border-[var(--color-line)] bg-[var(--color-surface)] p-8 text-center text-sm text-[var(--color-ink-soft)]">
          <p className="font-semibold text-[var(--color-ink)]">
            {"// Calendly Embed hier einfuegen"}
          </p>
        </div>
        <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
          Tragen Sie hier spaeter Ihren Calendly-Link ein.
        </p>
      </Modal>
    </>
  );
}
