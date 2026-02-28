import { Button, primaryCtaLabel } from "@/components/ui/button";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-line)] bg-[rgba(255,255,255,0.96)] p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex w-full max-w-xl items-center gap-3">
        <Button className="flex-1" href="#booking">
          {primaryCtaLabel}
        </Button>
      </div>
    </div>
  );
}
