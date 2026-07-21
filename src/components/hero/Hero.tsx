"use client";

import { useReducedMotion, useScroll } from "framer-motion";
import { useRef } from "react";
import HeroCanvas from "./HeroCanvas";
import HeroOverlay from "./HeroOverlay";
import HeroStatic from "./HeroStatic";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (prefersReducedMotion) {
    return <HeroStatic />;
  }

  return (
    <div ref={containerRef} className="relative" style={{ height: "350vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-studio">
        <HeroCanvas progress={scrollYProgress} />
        <HeroOverlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
