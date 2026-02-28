import { SpotCargoHubLogo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,_#221b15_0%,_#171310_100%)] py-12 text-[rgba(255,244,231,0.8)]">
      <div className="pointer-events-none absolute right-[-4rem] top-1/2 hidden -translate-y-1/2 opacity-[0.08] [filter:brightness(0)_invert(1)] lg:block">
        <SpotCargoHubLogo className="block [&_svg]:h-40 [&_svg]:w-auto" />
      </div>
      <div className="mx-auto flex w-[var(--container-width)] flex-col gap-6 text-sm md:flex-row md:items-end md:justify-between">
        <div className="relative z-10">
          <div className="flex flex-wrap gap-4">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">AGB</a>
          </div>
          <p className="mt-4 max-w-xl">
            SpotCargoHub - digitales Tagespreismanagement fuer Transporteinkauf.
          </p>
        </div>
        <div className="relative z-10 flex flex-col gap-2 md:items-end">
          <a className="font-medium text-[var(--color-accent)]" href="mailto:hallo@spotcargohub.com">
            hallo@spotcargohub.com
          </a>
          <a href="#">Fuer Speditionen</a>
        </div>
      </div>
    </footer>
  );
}
