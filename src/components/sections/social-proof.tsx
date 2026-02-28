const brands = [
  "BASF",
  "BOSCH",
  "SIEMENS",
  "DHL",
  "DB SCHENKER",
  "MAERSK",
];

export function SocialProof() {
  return (
    <section className="pb-18">
      <div className="mx-auto w-[var(--container-width)] rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.96)_0%,_rgba(246,239,228,0.78)_100%)] px-6 py-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
          Genutzt von Industrie- und Logistikteams
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <div
              className="flex min-h-20 items-center justify-center rounded-2xl border border-[rgba(231,216,196,0.8)] bg-white px-5 py-5"
              key={brand}
            >
              <span className="text-base font-extrabold tracking-[0.22em] text-[rgba(23,19,16,0.78)]">
                {brand}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--color-ink-soft)]">Beispiel-Logos als Platzhalter fuer Referenzen.</p>
      </div>
    </section>
  );
}
