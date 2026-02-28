/* eslint-disable @next/next/no-img-element */

const brands = [
  { name: "DHL", src: "https://cdn.simpleicons.org/dhl/171310" },
  { name: "Bosch", src: "https://cdn.simpleicons.org/bosch/171310" },
  { name: "Siemens", src: "https://cdn.simpleicons.org/siemens/171310" },
  { name: "Airbus", src: "https://cdn.simpleicons.org/airbus/171310" },
  { name: "Volkswagen", src: "https://cdn.simpleicons.org/volkswagen/171310" },
  { name: "Maersk", src: "https://cdn.simpleicons.org/maersk/171310" },
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
              key={brand.name}
            >
              <img
                alt={`${brand.name} Logo`}
                className="h-9 w-auto max-w-[8rem] object-contain opacity-85"
                loading="lazy"
                src={brand.src}
              />
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--color-ink-soft)]">Beispiel-Logos als Platzhalter fuer Referenzen.</p>
      </div>
    </section>
  );
}
