import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-pill)] bg-[rgba(245,204,87,0.26)] px-3 py-1 text-xs font-semibold text-[var(--color-brand)]",
        className,
      )}
      {...props}
    />
  );
}
