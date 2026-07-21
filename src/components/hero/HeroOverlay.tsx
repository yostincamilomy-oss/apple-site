"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

function useBlockMotion(
  progress: MotionValue<number>,
  start: number,
  end: number,
  isFirst = false,
  isLast = false
) {
  const buffer = 0.03;
  const opacity = useTransform(
    progress,
    isFirst
      ? [start, end - buffer, end]
      : isLast
        ? [start, start + buffer, end]
        : [start, start + buffer, end - buffer, end],
    isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    isFirst
      ? [start, end]
      : isLast
        ? [start, start + buffer]
        : [start, start + buffer, end - buffer, end],
    isFirst ? [0, -16] : isLast ? [20, 0] : [20, 0, 0, -16]
  );
  const pointerEvents = useTransform(opacity, (v) => (v > 0.6 ? "auto" : "none"));
  const visibility = useTransform(opacity, (v) => (v > 0.01 ? "visible" : "hidden"));
  return { opacity, y, pointerEvents, visibility };
}

export default function HeroOverlay({ progress }: { progress: MotionValue<number> }) {
  const block1 = useBlockMotion(progress, 0, 0.2, true);
  const block2 = useBlockMotion(progress, 0.2, 0.45);
  const block3 = useBlockMotion(progress, 0.45, 0.75);
  const block4 = useBlockMotion(progress, 0.75, 1, false, true);

  return (
    <div className="absolute inset-0 flex items-end justify-center px-6 pb-24 sm:items-center sm:pb-0">
      <motion.div
        style={{
          opacity: block1.opacity,
          y: block1.y,
          pointerEvents: block1.pointerEvents,
          visibility: block1.visibility,
        }}
        className="absolute flex max-w-3xl flex-col items-center text-center"
      >
        <h1 className="font-serif text-[2.75rem] leading-[1.05] text-ink sm:text-6xl md:text-7xl">
          iPhone 17 Pro Max
        </h1>
        <p className="mt-5 text-lg text-muted sm:text-xl">
          El mejor precio de toda Colombia.
        </p>
      </motion.div>

      <motion.div
        style={{
          opacity: block2.opacity,
          y: block2.y,
          pointerEvents: block2.pointerEvents,
          visibility: block2.visibility,
        }}
        className="absolute flex max-w-2xl flex-col items-center text-center"
      >
        <h2 className="font-serif text-[2.5rem] leading-[1.05] text-ink sm:text-5xl md:text-6xl">
          Más que un teléfono.
        </h2>
        <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
          Presentamos el ecosistema Apple más reciente: dispositivos premium
          diseñados para funcionar perfectamente en conjunto.
        </p>
      </motion.div>

      <motion.div
        style={{
          opacity: block3.opacity,
          y: block3.y,
          pointerEvents: block3.pointerEvents,
          visibility: block3.visibility,
        }}
        className="absolute flex max-w-2xl flex-col items-center text-center"
      >
        <h2 className="font-serif text-[2.5rem] leading-[1.05] text-ink sm:text-5xl md:text-6xl">
          Todo el ecosistema Apple.
        </h2>
        <p className="mt-5 text-base text-muted sm:text-lg">
          MacBook. Apple Watch. AirPods. iPhone 17 Pro Max.
        </p>
        <p className="mt-1 text-base text-muted sm:text-lg">
          Todo disponible en un solo lugar, al mejor precio del país.
        </p>
      </motion.div>

      <motion.div
        style={{
          opacity: block4.opacity,
          y: block4.y,
          pointerEvents: block4.pointerEvents,
          visibility: block4.visibility,
        }}
        className="absolute flex max-w-2xl flex-col items-center text-center"
      >
        <h2 className="font-serif text-[2.75rem] leading-[1.05] text-ink sm:text-6xl md:text-7xl">
          Es tu momento.
        </h2>
        <p className="mt-5 text-lg text-muted sm:text-xl">
          Compra hoy tu próximo Apple.
        </p>
        <div className="mt-9 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#productos"
            className="w-full rounded-full bg-accent px-9 py-4 text-center text-sm font-medium text-paper transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] sm:w-auto"
          >
            Comprar ahora
          </a>
          <a
            href="https://wa.me/573117788543"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-ink/15 px-9 py-4 text-center text-sm font-medium text-ink transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] sm:w-auto"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
