import { Button, primaryCtaLabel } from "@/components/ui/button";
import { SpotCargoHubLogo } from "@/components/ui/logo";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(231,216,196,0.8)] bg-[rgba(246,239,228,0.92)] backdrop-blur-md">
      <div className="mx-auto flex w-[var(--container-width)] items-center justify-between gap-4 py-4">
        <a className="inline-flex items-center" href="#top">
          <SpotCargoHubLogo className="inline-flex items-center" />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--color-ink-soft)] lg:flex">
          <a href="#vorteile">Vorteile</a>
          <a href="#so-funktionierts">So funktioniert&apos;s</a>
          <a href="#ergebnisse">Ergebnisse</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a className="text-sm font-medium text-[var(--color-ink-soft)]" href="#">
            Login
          </a>
          <Button href="#booking">{primaryCtaLabel}</Button>
        </div>
        <Button className="lg:hidden" href="#booking">
          {primaryCtaLabel}
        </Button>
      </div>
    </header>
  );
}
