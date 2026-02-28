import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "border border-[rgba(23,19,16,0.08)] bg-[linear-gradient(135deg,_#FEC33A_0%,_#FFDF95_100%)] text-[var(--color-ink)] shadow-[var(--shadow-glow)] hover:brightness-[0.97]",
  secondary:
    "bg-white text-[var(--color-brand)] ring-1 ring-inset ring-[rgba(23,19,16,0.14)] shadow-[var(--shadow-sm)] hover:bg-[var(--color-surface)]",
  ghost:
    "bg-transparent text-[var(--color-brand)] ring-1 ring-inset ring-[var(--color-line)] hover:bg-[rgba(255,255,255,0.68)]",
};

export const primaryCtaLabel = "30 Tage kostenlos testen";

type SharedProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button(props: ButtonProps | LinkProps) {
  const base =
    "inline-flex min-h-[var(--button-height)] items-center justify-center rounded-[var(--radius-pill)] px-6 text-sm font-semibold transition-all duration-200 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-strong)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0";

  if ("href" in props) {
    const {
      href,
      children,
      variant = "primary",
      className,
      ...anchorProps
    } = props as LinkProps;
    const styles = cn(base, variants[variant], className);
    return (
      <a className={styles} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    children,
    variant = "primary",
    className,
    ...buttonProps
  } = props as ButtonProps;
  const styles = cn(base, variants[variant], className);

  return (
    <button className={styles} {...buttonProps}>
      {children}
    </button>
  );
}
