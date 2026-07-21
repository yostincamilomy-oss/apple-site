"use client";

import { ReactLenis } from "lenis/react";
import { useSyncExternalStore } from "react";

const premiumEase = (t: number) => 1 - Math.pow(1 - t, 3);

const query = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(query).matches;
}

function getServerSnapshot() {
  return false;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: premiumEase,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
