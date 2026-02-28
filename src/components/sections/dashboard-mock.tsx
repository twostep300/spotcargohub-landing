import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function DashboardMock() {
  return (
    <Card className="overflow-hidden p-5 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
            Dashboard Mock
          </p>
          <p className="mt-1 text-sm font-medium text-[var(--color-ink-soft)]">
            Angebotsvergleich fuer Spotanfragen
          </p>
        </div>
        <Badge>Live-Status</Badge>
      </div>

      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        {[
          { label: "Angebote", value: "12", tone: "bg-[rgba(245,204,87,0.22)]" },
          { label: "Antwortzeit", value: "< 1h", tone: "bg-[rgba(239,139,44,0.16)]" },
          { label: "Vergabe", value: "bereit", tone: "bg-[rgba(23,19,16,0.06)]" },
        ].map((item) => (
          <div className={`rounded-2xl ${item.tone} p-4`} key={item.label}>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-4 rounded-2xl bg-[var(--color-surface)] p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          <Badge>Route: Hamburg - Lodz</Badge>
          <Badge className="bg-[rgba(239,139,44,0.14)] text-[var(--color-success)]">LKW</Badge>
          <Badge className="bg-[rgba(217,166,59,0.16)] text-[#946100]">Heute 14:00</Badge>
        </div>
        <svg
          aria-label="Illustration fuer Angebotsentwicklung"
          className="h-auto w-full"
          fill="none"
          viewBox="0 0 320 96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 77C37 70 48 58 72 55C99 52 113 64 137 53C159 43 184 18 209 21C235 24 251 56 273 60C291 63 302 52 312 45"
            stroke="var(--color-brand)"
            strokeLinecap="round"
            strokeWidth="6"
          />
          <circle cx="72" cy="55" fill="var(--color-accent)" r="7" />
          <circle cx="209" cy="21" fill="var(--color-brand)" r="7" />
          <circle cx="273" cy="60" fill="var(--color-success)" r="7" />
        </svg>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[var(--color-line)]">
        <div className="grid grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] bg-[var(--color-surface)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
          <span>Partner</span>
          <span>Preis</span>
          <span>Status</span>
          <span>Lieferfenster</span>
        </div>
        {[
          ["Carrier A", "1.420 EUR", "vollstaendig", "08:00"],
          ["Carrier B", "1.470 EUR", "Rueckfrage", "09:30"],
          ["Carrier C", "1.398 EUR", "Top-Angebot", "07:45"],
        ].map(([name, price, status, slot]) => (
          <div
            className="grid grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] items-center gap-2 border-t border-[var(--color-line)] px-4 py-3 text-sm text-[var(--color-ink-soft)]"
            key={name}
          >
            <span className="font-medium text-[var(--color-ink)]">{name}</span>
            <span>{price}</span>
            <span>
              <span className="rounded-full bg-[var(--color-surface)] px-2 py-1 text-xs font-semibold text-[var(--color-brand)]">
                {status}
              </span>
            </span>
            <span>{slot}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
