"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="bg-paper px-6 py-32 sm:px-10 lg:py-44">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="label-eyebrow text-center"
        >
          Clientes
        </motion.p>

        <div className="mt-20 flex flex-col divide-y divide-ink/10">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1] as const,
                delay: i * 0.05,
              }}
              className="py-14 text-center first:pt-0 last:pb-0"
            >
              <blockquote className="font-serif text-2xl leading-snug text-ink sm:text-3xl md:text-4xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                {t.author}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
