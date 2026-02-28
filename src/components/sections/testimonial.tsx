/* eslint-disable @next/next/no-img-element */

import { Card } from "@/components/ui/card";

export function TestimonialSection() {
  return (
    <section className="pb-[var(--section-space)]">
      <div className="mx-auto w-[var(--container-width)]">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-5xl">Kundenstimme</h2>
        <Card className="mt-8 overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex items-center justify-center bg-[linear-gradient(135deg,_#ef8b2c_0%,_#fec33a_100%)] p-8">
              <div className="text-center">
                <img
                  alt="Testimonial Portrait"
                  className="mx-auto h-24 w-24 rounded-full border-4 border-white object-cover shadow-[var(--shadow-sm)]"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                />
                <div className="mx-auto mt-5 inline-flex rounded-full bg-white px-4 py-2 shadow-[var(--shadow-sm)]">
                  <img
                    alt="Firmenlogo Platzhalter"
                    className="h-5 w-auto opacity-85"
                    src="https://cdn.simpleicons.org/siemens/171310"
                  />
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-xl leading-9 text-[var(--color-ink)]">
                &ldquo;Spotanfragen sind bei uns deutlich strukturierter - und wir sparen jede Woche Zeit.&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold text-[var(--color-brand)]">Claudia L. (Platzhalter)</p>
              <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
                Leitung Logistik, Industrieunternehmen (Platzhalter)
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
