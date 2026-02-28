import { partnerLogoComponents } from "@/components/sections/partner-logos";

export function SocialProof() {
  return (
    <section className="pb-18">
      <div className="mx-auto w-[var(--container-width)] rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white px-6 py-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
          Genutzt von Industrie- und Logistikteams
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partnerLogoComponents.map((Logo, index) => (
            <div
              className="flex min-h-24 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-5"
              key={index}
            >
              <Logo className="h-8 w-auto max-w-[9.5rem] opacity-80" />
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--color-ink-soft)]">Referenzen koennen hier ergaenzt werden.</p>
      </div>
    </section>
  );
}
