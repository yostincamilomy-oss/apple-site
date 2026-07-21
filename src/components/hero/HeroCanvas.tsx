"use client";

import { MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { FRAME_HEIGHT, FRAME_WIDTH, STUDIO_BG, TOTAL_FRAMES } from "@/lib/heroFrames";
import { useFrameSequence } from "./useFrameSequence";

export default function HeroCanvas({ progress }: { progress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });
  const currentIndexRef = useRef(0);
  const { getFrame, subscribe } = useFrameSequence();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = (index: number) => {
      const { width, height } = sizeRef.current;
      if (!width || !height) return;
      ctx.fillStyle = STUDIO_BG;
      ctx.fillRect(0, 0, width, height);

      const bmp = getFrame(index);
      if (!bmp) return;

      // "cover" fit — always full-bleed, no letterboxing. The source frames
      // carry a built-in safety margin (see scripts/add-safety-margin.js) so
      // cropping never reaches the character even on extreme aspect ratios.
      const scale = Math.max(width / FRAME_WIDTH, height / FRAME_HEIGHT);
      const drawWidth = FRAME_WIDTH * scale;
      const drawHeight = FRAME_HEIGHT * scale;
      const dx = (width - drawWidth) / 2;
      const dy = (height - drawHeight) / 2;
      ctx.drawImage(bmp, dx, dy, drawWidth, drawHeight);
    };

    const resize = () => {
      const wrapper = canvas.parentElement;
      if (!wrapper) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.round(wrapper.clientWidth * dpr);
      const height = Math.round(wrapper.clientHeight * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      sizeRef.current = { width, height, dpr };
      draw(currentIndexRef.current);
    };

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    resize();

    const unsubscribeFrames = subscribe(() => draw(currentIndexRef.current));

    const unsubscribeProgress = progress.on("change", (v) => {
      const index = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(v * (TOTAL_FRAMES - 1)))
      );
      currentIndexRef.current = index;
      draw(index);
    });

    return () => {
      ro.disconnect();
      unsubscribeFrames();
      unsubscribeProgress();
    };
  }, [progress, getFrame, subscribe]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
