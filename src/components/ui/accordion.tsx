"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type Item = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: Item[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        const isOpen = openIndex === index;

        return (
          <div
            className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-white"
            key={item.question}
          >
            <button
              aria-controls={panelId}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[var(--color-ink)]"
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className={cn("text-xl text-[var(--color-brand)] transition", isOpen && "rotate-45")}
              >
                +
              </span>
            </button>
            <div
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-200",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
              id={panelId}
              role="region"
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-[var(--color-ink-soft)]">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
