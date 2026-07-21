"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ecosystem } from "@/lib/content";

const depths = [40, -30, 50, -40];

export default function AppleEcosystem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-studio px-6 py-32 sm:px-10 lg:py-44"
    >
      <div className="mx-auto max-w-7xl">
        <p className="label-eyebrow text-center">El ecosistema</p>
        <h2 className="mt-5 text-center font-serif text-4xl text-ink sm:text-5xl">
          Todo funciona en conjunto.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-base text-muted sm:text-lg">
          Tus dispositivos Apple se conectan entre sí de forma instantánea,
          para que cambies de uno a otro sin perder el ritmo.
        </p>

        <div className="mt-24 grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
          {ecosystem.map((item, i) => (
            <ParallaxCard
              key={item.id}
              item={item}
              depth={depths[i]}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ParallaxCard({
  item,
  depth,
  progress,
}: {
  item: (typeof ecosystem)[number];
  depth: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(progress, [0, 1], [depth, -depth]);

  return (
    <motion.div style={{ y }} className="flex flex-col items-center text-center">
      <div className="flex aspect-square w-full items-center justify-center overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={item.width}
          height={item.height}
          className="h-auto w-3/4 object-contain"
        />
      </div>
      <h3 className="mt-6 font-serif text-xl text-ink sm:text-2xl">
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-muted">{item.description}</p>
    </motion.div>
  );
}
