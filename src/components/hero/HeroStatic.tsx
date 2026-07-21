"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { frameUrl, TOTAL_FRAMES } from "@/lib/heroFrames";

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.6 },
};

export default function HeroStatic() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-studio px-6 py-32 text-center">
      <Image
        src={frameUrl(TOTAL_FRAMES - 1)}
        alt="Ecosistema Apple flotando alrededor de un cliente sonriente"
        fill
        priority
        className="object-cover"
      />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-14">
        <motion.div {...fadeIn}>
          <h1 className="font-serif text-5xl leading-[1.05] text-ink sm:text-6xl">
            iPhone 17 Pro Max
          </h1>
          <p className="mt-4 text-lg text-muted">
            El mejor precio de toda Colombia.
          </p>
        </motion.div>

        <motion.div {...fadeIn}>
          <h2 className="font-serif text-4xl leading-[1.05] text-ink sm:text-5xl">
            Más que un teléfono.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Presentamos el ecosistema Apple más reciente: dispositivos premium
            diseñados para funcionar perfectamente en conjunto.
          </p>
        </motion.div>

        <motion.div {...fadeIn}>
          <h2 className="font-serif text-4xl leading-[1.05] text-ink sm:text-5xl">
            Todo el ecosistema Apple.
          </h2>
          <p className="mt-4 text-lg text-muted">
            MacBook. Apple Watch. AirPods. iPhone 17 Pro Max. Todo disponible
            en un solo lugar, al mejor precio del país.
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="flex flex-col items-center gap-5">
          <h2 className="font-serif text-4xl leading-[1.05] text-ink sm:text-5xl">
            Es tu momento.
          </h2>
          <p className="text-lg text-muted">Compra hoy tu próximo Apple.</p>
          <div className="mt-2 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <a
              href="#productos"
              className="w-full rounded-full bg-accent px-9 py-4 text-center text-sm font-medium text-paper sm:w-auto"
            >
              Comprar ahora
            </a>
            <a
              href="https://wa.me/573117788543"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-ink/15 px-9 py-4 text-center text-sm font-medium text-ink sm:w-auto"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
