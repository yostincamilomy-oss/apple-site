"use client";

import { motion } from "framer-motion";
import { reasons } from "@/lib/content";

export default function WhyBuyWithUs() {
  return (
    <section id="nosotros" className="bg-paper px-6 py-32 sm:px-10 lg:py-44">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="label-eyebrow text-center"
        >
          Por qué comprar con nosotros
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.05 }}
          className="mt-5 text-center font-serif text-4xl text-ink sm:text-5xl"
        >
          Confianza, de principio a fin.
        </motion.h2>

        <div className="mt-24 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1] as const,
                delay: (i % 3) * 0.08,
              }}
            >
              <span className="font-serif text-2xl text-accent">
                {reason.number}
              </span>
              <h3 className="mt-4 text-lg font-medium text-ink">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
