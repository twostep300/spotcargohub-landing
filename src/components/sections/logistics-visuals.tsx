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
            <div className="rounded-[26px] border border-[rgba(255,255,255,0.12)] bg-[rgba(10,8,7,0.38)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.56)]">
                  Demo Player
                </span>
              </div>
              <div className="rounded-3xl bg-[rgba(255,255,255,0.04)] p-4">
                <div className="grid gap-3 sm:grid-cols-3">
                  {["Anfrage", "Angebote", "Vergabe"].map((item) => (
                    <div className="rounded-2xl bg-[rgba(255,255,255,0.08)] px-3 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em]" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="space-y-3 rounded-2xl bg-[rgba(255,255,255,0.05)] p-3">
                    <div className="h-3 w-3/4 rounded-full bg-white/70" />
                    <div className="h-3 w-2/3 rounded-full bg-white/40" />
                    <div className="h-22 rounded-2xl bg-[linear-gradient(180deg,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0.03)_100%)]" />
                  </div>
                  <div className="space-y-2 rounded-2xl bg-[rgba(255,255,255,0.05)] p-3">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-2xl bg-white/10" />
                      <div className="h-12 rounded-2xl bg-white/10" />
                      <div className="h-12 rounded-2xl bg-white/10" />
                    </div>
                    <div className="h-3 rounded-full bg-white/50" />
                    <div className="h-3 w-5/6 rounded-full bg-white/35" />
                    <div className="h-3 w-2/3 rounded-full bg-white/25" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-xs font-medium text-[rgba(255,255,255,0.74)]">00:43</span>
                  <div className="h-1.5 flex-1 rounded-full bg-white/10">
                    <div className="h-1.5 w-2/3 rounded-full bg-[linear-gradient(135deg,_#FEC33A_0%,_#FFDF95_100%)]" />
                  </div>
                  <span className="text-xs font-medium text-[rgba(255,255,255,0.74)]">01:30</span>
                </div>
              </div>
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
            <div className="space-y-3">
              <div className="rounded-2xl bg-white/14 p-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-white/22" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2.5 w-2/3 rounded-full bg-white/68" />
                    <div className="h-2.5 w-1/2 rounded-full bg-white/40" />
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white/14 p-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-white/22" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2.5 w-3/4 rounded-full bg-white/68" />
                    <div className="h-2.5 w-1/3 rounded-full bg-white/40" />
                  </div>
                </div>
              </div>
              <div className="h-1.5 rounded-full bg-white/16">
                <div className="h-1.5 w-2/5 rounded-full bg-white/68" />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                <div className="h-10 rounded-2xl bg-white/18" />
                <div className="h-10 rounded-2xl bg-white/18" />
                <div className="h-10 rounded-2xl bg-white/18" />
              </div>
              <div className="rounded-2xl bg-white/14 p-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-3 rounded-full bg-white/65" />
                  <div className="h-3 rounded-full bg-white/45" />
                  <div className="h-3 rounded-full bg-white/35" />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="h-3 rounded-full bg-white/45" />
                  <div className="h-3 rounded-full bg-white/65" />
                  <div className="h-3 rounded-full bg-white/35" />
                </div>
              </div>
              <div className="h-1.5 rounded-full bg-white/16">
                <div className="h-1.5 w-3/5 rounded-full bg-white/68" />
              </div>
            </div>
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
              title="Ein Blick statt mehrere Tabellen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
