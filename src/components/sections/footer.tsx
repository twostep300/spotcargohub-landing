export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-white py-10">
      <div className="mx-auto flex w-[var(--container-width)] flex-col gap-6 text-sm text-[var(--color-ink-soft)] md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex flex-wrap gap-4">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">AGB</a>
          </div>
          <p className="mt-4">SpotCargoHub - digitales Tagespreismanagement fuer Transporteinkauf.</p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <a className="font-medium text-[var(--color-brand)]" href="mailto:hallo@spotcargohub.com">
            hallo@spotcargohub.com
          </a>
          <a href="#">Fuer Speditionen</a>
        </div>
      </div>
    </footer>
  );
}
