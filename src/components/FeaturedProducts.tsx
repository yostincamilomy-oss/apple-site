"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/lib/content";

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
};

export default function FeaturedProducts() {
  return (
    <section id="productos" className="bg-studio px-6 py-32 sm:px-10 lg:py-44">
      <div className="mx-auto max-w-7xl">
        <motion.p {...reveal} className="label-eyebrow text-center">
          Catálogo
        </motion.p>
        <motion.h2
          {...reveal}
          className="mt-5 text-center font-serif text-4xl text-ink sm:text-5xl md:text-6xl"
        >
          Cada producto, en detalle.
        </motion.h2>

        <div className="mt-28 flex flex-col gap-32 lg:mt-36 lg:gap-44">
          {products.map((product, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={product.id}
                className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-20 ${
                  reversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }}
                  className="w-full max-w-md lg:max-w-none lg:flex-1"
                >
                  <Image
                    src={product.image}
                    alt={product.eyebrow}
                    width={product.width}
                    height={product.height}
                    className="h-auto w-full object-contain"
                  />
                </motion.div>

                <motion.div
                  {...reveal}
                  className="flex w-full flex-col items-center text-center lg:flex-1 lg:items-start lg:text-left"
                >
                  <span className="label-eyebrow">{product.eyebrow}</span>
                  <h3 className="mt-4 font-serif text-3xl text-ink sm:text-4xl md:text-5xl">
                    {product.title}
                  </h3>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                    {product.description}
                  </p>
                  <a
                    href="https://wa.me/573117788543"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-medium text-accent transition-opacity duration-300 hover:opacity-70"
                  >
                    Consultar precio
                    <span aria-hidden="true">→</span>
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
