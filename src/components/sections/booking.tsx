"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, primaryCtaLabel } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";

type BookingSectionProps = {
  calendlyOpen: boolean;
  onOpenCalendly: () => void;
  onCloseCalendly: () => void;
};

type Errors = Partial<Record<"name" | "company" | "email" | "privacy", string>>;

const initialForm = {
  name: "",
  company: "",
  email: "",
  role: "Einkauf",
  transportTypes: [] as string[],
  message: "",
  privacy: false,
};

export function BookingSection({ calendlyOpen, onOpenCalendly, onCloseCalendly }: BookingSectionProps) {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const checklist = useMemo(
    () => [
      "Anfrage in < 2 Minuten erstellen",
      "Speditionskreis / Matching",
      "Angebotsvergleich & Vergabe",
      "Archiv & Nachvollziehbarkeit",
    ],
    [],
  );

  function validate() {
    const nextErrors: Errors = {};
    if (!form.name.trim()) nextErrors.name = "Bitte Namen eingeben.";
    if (!form.company.trim()) nextErrors.company = "Bitte Firma eingeben.";
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

  function toggleTransport(value: string) {
    setForm((current) => {
      const exists = current.transportTypes.includes(value);
      return {
        ...current,
        transportTypes: exists
          ? current.transportTypes.filter((item) => item !== value)
          : [...current.transportTypes, value],
      };
    });
  }

  return (
    <>
      <section className="py-[var(--section-space)]" id="booking">
        <div className="mx-auto grid w-[var(--container-width)] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">Booking</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
              30 Tage kostenlos testen
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-ink-soft)]">
              In 5 Minuten starten Sie Ihren Testzugang - ohne E-Mail-Chaos.
            </p>
            <div className="mt-8 space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                Das sehen Sie in der Demo
              </p>
              {checklist.map((item) => (
                <div className="flex items-start gap-3 text-sm font-medium text-[var(--color-ink-soft)]" key={item}>
                  <span className="mt-1 text-[var(--color-brand)]">+</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="p-6 md:p-8">
            <form className="space-y-5" noValidate onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--color-ink)]" htmlFor="name">
                  Vorname Nachname
                </label>
                <input
                  className="field"
                  id="name"
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  required
                  value={form.name}
                />
                {errors.name ? <p className="mt-2 text-sm text-[#b54747]">{errors.name}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--color-ink)]" htmlFor="company">
                  Firma
                </label>
                <input
                  className="field"
                  id="company"
                  onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
                  required
                  value={form.company}
                />
                {errors.company ? <p className="mt-2 text-sm text-[#b54747]">{errors.company}</p> : null}
              </div>

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
                <label className="mb-2 block text-sm font-semibold text-[var(--color-ink)]" htmlFor="role">
                  Rolle
                </label>
                <select
                  className="field"
                  id="role"
                  onChange={(event) => setForm((current) => ({ ...current, role: event.target.value }))}
                  value={form.role}
                >
                  <option>Einkauf</option>
                  <option>Logistik</option>
                  <option>Supply Chain</option>
                  <option>GF</option>
                  <option>Sonstiges</option>
                </select>
              </div>

              <div>
                <span className="mb-2 block text-sm font-semibold text-[var(--color-ink)]">Transportarten</span>
                <div className="flex flex-wrap gap-3">
                  {["LKW", "Luft", "See"].map((item) => (
                    <label
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-medium text-[var(--color-ink-soft)]"
                      key={item}
                    >
                      <input
                        checked={form.transportTypes.includes(item)}
                        onChange={() => toggleTransport(item)}
                        type="checkbox"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--color-ink)]" htmlFor="message">
                  Nachricht
                </label>
                <textarea
                  className="field min-h-28 py-3"
                  id="message"
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  value={form.message}
                />
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

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button disabled={loading} type="submit">
                  {loading ? "Wird gesendet..." : primaryCtaLabel}
                </Button>
                <Button onClick={onOpenCalendly} type="button" variant="ghost">
                  Direkt Termin waehlen
                </Button>
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
