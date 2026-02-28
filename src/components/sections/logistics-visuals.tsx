/* eslint-disable @next/next/no-img-element */

const visuals = [
  {
    src: "https://www.spotcargohub.com/_next/image?url=%2Fimages%2FSpotCargoHub-Blog-Contract-and-Spot.jpg&w=1920&q=75",
    title: "Spot und Vertrag im selben Marktbild",
    copy: "Schneller entscheiden, wenn Tagespreise und feste Konditionen sichtbar nebeneinander liegen.",
  },
  {
    src: "https://www.spotcargohub.com/_next/image?url=%2Fimages%2FSpotCargoHub-Blog-Broken-Prices.jpg&w=3840&q=75",
    title: "Weniger Brueche im Prozess",
    copy: "Wenn Daten strukturiert ankommen, sinken Rueckfragen und Nacharbeit im Tagesgeschaeft.",
  },
  {
    src: "https://www.spotcargohub.com/_next/image?url=%2Fimages%2FSpotCargoHub-Blog-Award.jpg&w=1920&q=75",
    title: "Professioneller Auftritt im Einkauf",
    copy: "Transparenz im Prozess wirkt intern besser und schafft mehr Verbindlichkeit in Vergaben.",
  },
];

export function LogisticsVisualsSection() {
  return (
    <section className="pb-[var(--section-space)]">
      <div className="mx-auto w-[var(--container-width)]">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
            Aus dem Logistikalltag
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
            Mehr Klarheit im operativen Tagesgeschaeft
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {visuals.map((item) => (
            <div
              className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white shadow-[var(--shadow-sm)]"
              key={item.title}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                  loading="lazy"
                  src={item.src}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
