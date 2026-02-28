import { Button, primaryCtaLabel } from "@/components/ui/button";

type CtaBandProps = {
  title: string;
  description?: string;
  label?: string;
};

export function CtaBand({
  title,
  description,
  label = primaryCtaLabel,
}: CtaBandProps) {
  return (
    <section className="pb-[var(--section-space)]">
      <div className="mx-auto w-[var(--container-width)] rounded-[var(--radius-lg)] bg-[var(--color-ink)] px-6 py-8 text-white md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
            {description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgba(255,255,255,0.78)]">{description}</p> : null}
          </div>
          <Button href="#booking">{label}</Button>
        </div>
      </div>
    </section>
  );
}
