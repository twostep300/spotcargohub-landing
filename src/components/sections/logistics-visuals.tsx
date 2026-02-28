/* eslint-disable @next/next/no-img-element */

function VideoStyleCard() {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[linear-gradient(135deg,_#1d1712_0%,_#2b2219_55%,_#7f4a1b_100%)] text-white shadow-[var(--shadow-md)]">
      <div className="relative aspect-[15/9] p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,_rgba(254,195,58,0.25),_transparent_20%),radial-gradient(circle_at_20%_70%,_rgba(255,223,149,0.12),_transparent_25%)]" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-[rgba(255,255,255,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
              Video-Eindruck
            </span>
            <span className="text-xs font-medium text-[rgba(255,255,255,0.7)]">90 Sek. Produktblick</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,_#FEC33A_0%,_#FFDF95_100%)] text-[var(--color-ink)] shadow-[var(--shadow-glow)]">
                <span className="ml-1 text-2xl">▶</span>
              </div>
              <p className="mt-4 text-xl font-semibold tracking-[-0.03em]">Wie der Prozess in der Praxis aussieht</p>
              <p className="mt-2 max-w-md text-sm leading-6 text-[rgba(255,255,255,0.78)]">
                Eine Demo-Ansicht wie in einem echten Backend: Anfrage, Angebotsvergleich und Vergabe in einem klaren Flow.
              </p>
            </div>
            <div className="rounded-[26px] border border-[rgba(255,255,255,0.12)] bg-[rgba(10,8,7,0.38)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <img
                alt="Videoposter einer Demo-Ansicht im Backend-Stil"
                className="h-auto w-full rounded-[20px] object-cover"
                src="/graphics/video-poster-16-9.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SnapshotCard({
  title,
  copy,
  accent,
  kind,
}: {
  title: string;
  copy: string;
  accent: string;
  kind: "mail" | "table";
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white shadow-[var(--shadow-sm)]">
      <div className={`aspect-[4/3] ${accent} p-5`}>
        <div className="flex h-full flex-col justify-between rounded-[24px] border border-[rgba(255,255,255,0.34)] bg-[rgba(255,255,255,0.12)] p-4 backdrop-blur-sm">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          </div>
          {kind === "mail" ? (
            <svg className="h-full w-full" fill="none" viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="24" width="196" height="34" rx="14" fill="rgba(255,255,255,0.16)" />
              <rect x="26" y="36" width="26" height="10" rx="5" fill="rgba(255,255,255,0.32)" />
              <rect x="64" y="34" width="88" height="6" rx="3" fill="rgba(255,255,255,0.68)" />
              <rect x="64" y="44" width="54" height="6" rx="3" fill="rgba(255,255,255,0.38)" />
              <rect x="12" y="68" width="196" height="34" rx="14" fill="rgba(255,255,255,0.16)" />
              <rect x="26" y="80" width="26" height="10" rx="5" fill="rgba(255,255,255,0.32)" />
              <rect x="64" y="78" width="102" height="6" rx="3" fill="rgba(255,255,255,0.68)" />
              <rect x="64" y="88" width="64" height="6" rx="3" fill="rgba(255,255,255,0.38)" />
              <path d="M20 118H200" stroke="rgba(255,255,255,0.18)" strokeLinecap="round" strokeWidth="6" />
              <path d="M20 118H108" stroke="rgba(255,255,255,0.68)" strokeLinecap="round" strokeWidth="6" />
            </svg>
          ) : (
            <svg className="h-full w-full" fill="none" viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="22" width="58" height="28" rx="12" fill="rgba(255,255,255,0.18)" />
              <rect x="81" y="22" width="58" height="28" rx="12" fill="rgba(255,255,255,0.18)" />
              <rect x="152" y="22" width="58" height="28" rx="12" fill="rgba(255,255,255,0.18)" />
              <rect x="10" y="64" width="200" height="44" rx="18" fill="rgba(255,255,255,0.14)" />
              <rect x="28" y="78" width="42" height="8" rx="4" fill="rgba(255,255,255,0.6)" />
              <rect x="86" y="78" width="42" height="8" rx="4" fill="rgba(255,255,255,0.38)" />
              <rect x="144" y="78" width="42" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
              <rect x="28" y="92" width="42" height="8" rx="4" fill="rgba(255,255,255,0.32)" />
              <rect x="86" y="92" width="42" height="8" rx="4" fill="rgba(255,255,255,0.62)" />
              <rect x="144" y="92" width="42" height="8" rx="4" fill="rgba(255,255,255,0.28)" />
              <path d="M18 122H202" stroke="rgba(255,255,255,0.18)" strokeLinecap="round" strokeWidth="6" />
              <path d="M18 122H134" stroke="rgba(255,255,255,0.68)" strokeLinecap="round" strokeWidth="6" />
            </svg>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[var(--color-ink)]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{copy}</p>
      </div>
    </div>
  );
}

export function LogisticsVisualsSection() {
  return (
    <section className="pb-[var(--section-space)]">
      <div className="mx-auto w-[var(--container-width)]">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
            Visueller Eindruck
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">
            So wirkt ein sauberer Prozess im Alltag
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
          <VideoStyleCard />
          <div className="grid gap-5">
            <SnapshotCard
              accent="bg-[linear-gradient(135deg,_#ef8b2c_0%,_#fec33a_100%)]"
              copy="Weniger Rueckfragen, wenn Anforderungen, Status und Antworten im selben Ablauf sichtbar sind."
              kind="mail"
              title="Klare Anfrage statt Mail-Pingpong"
            />
            <SnapshotCard
              accent="bg-[linear-gradient(135deg,_#3a2b1f_0%,_#7a4d27_55%,_#ffdf95_100%)]"
              copy="Transparenz wirkt besser, wenn Preise, Historie und Vergabe nicht in mehreren Dateien verstreut sind."
              kind="table"
              title="Ein Blick statt mehr Tabellen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
