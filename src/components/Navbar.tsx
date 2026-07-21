"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 60);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "border-b border-ink/10 bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <a href="#inicio" className="font-serif text-2xl tracking-tight text-ink">
          ARC
        </a>
        <ul className="hidden items-center gap-10 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink/80 transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#productos"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper sm:hidden"
        >
          Comprar
        </a>
      </nav>
    </header>
  );
}
