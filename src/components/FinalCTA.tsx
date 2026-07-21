"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
};

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="bg-studio px-6 py-32 text-center sm:px-10 lg:py-48"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <motion.h2
          {...reveal}
          className="font-serif text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl"
        >
          Tu próximo iPhone te está esperando.
        </motion.h2>

        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.1 }}
          className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
        >
          <a
            href="https://wa.me/573117788543"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-accent px-10 py-4 text-center text-sm font-medium text-paper transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] sm:w-auto"
          >
            Escríbenos por WhatsApp
          </a>
        </motion.div>

        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.18 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted"
        >
          <span>Envíos a toda Colombia</span>
          <span className="h-1 w-1 rounded-full bg-muted/40" />
          <span>Garantía oficial Apple</span>
          <span className="h-1 w-1 rounded-full bg-muted/40" />
          <span>Pago 100% seguro</span>
        </motion.div>
      </div>
    </section>
  );
}
