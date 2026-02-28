import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center bg-[var(--color-surface)] px-4 py-10">
      <div className="mx-auto w-full max-w-2xl rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-sm)]">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">Anfrage erfasst</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
          Danke - wir melden uns kurzfristig.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-ink-soft)]">
          Wir pruefen Ihre Anfrage und schicken Ihnen Terminvorschlaege per E-Mail.
        </p>
        <Link
          className="inline-flex min-h-[var(--button-height)] items-center justify-center rounded-[var(--radius-pill)] border border-[rgba(23,19,16,0.08)] bg-[linear-gradient(135deg,_#FEC33A_0%,_#FFDF95_100%)] px-6 text-sm font-semibold text-[var(--color-ink)] shadow-[var(--shadow-glow)] transition-all duration-200 hover:-translate-y-px hover:brightness-[0.97]"
          href="/"
        >
          Zurueck zur Seite
        </Link>
      </div>
    </main>
  );
}
