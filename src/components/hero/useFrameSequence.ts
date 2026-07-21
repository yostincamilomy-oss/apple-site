"use client";

import { useEffect, useRef, useState } from "react";
import { frameUrl, TOTAL_FRAMES } from "@/lib/heroFrames";

const CONCURRENCY = 6;

async function decodeFrame(index: number, signal: AbortSignal): Promise<ImageBitmap> {
  const res = await fetch(frameUrl(index), { signal });
  const blob = await res.blob();
  return createImageBitmap(blob);
}

export function useFrameSequence() {
  const bitmapsRef = useRef<(ImageBitmap | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const listenersRef = useRef<Set<() => void>>(new Set());
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    let cancelled = false;

    const notify = () => {
      listenersRef.current.forEach((cb) => cb());
    };

    const loadOne = async (index: number) => {
      if (bitmapsRef.current[index] || cancelled) return;
      try {
        const bmp = await decodeFrame(index, signal);
        if (cancelled) return;
        bitmapsRef.current[index] = bmp;
        notify();
      } catch {
        // aborted or failed decode — skip, nearest-neighbour fallback covers it
      }
    };

    const run = async () => {
      // Priority: first frame, then last frame, then the rest in order.
      await loadOne(0);
      if (cancelled) return;
      setFirstFrameReady(true);
      await loadOne(TOTAL_FRAMES - 1);

      const queue: number[] = [];
      for (let i = 1; i < TOTAL_FRAMES - 1; i++) queue.push(i);

      let cursor = 0;
      const workers = new Array(CONCURRENCY).fill(0).map(async () => {
        while (cursor < queue.length && !cancelled) {
          const idx = queue[cursor++];
          await loadOne(idx);
        }
      });
      await Promise.all(workers);
    };

    run();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  const getFrame = (index: number): ImageBitmap | null => {
    const clamped = Math.min(Math.max(index, 0), TOTAL_FRAMES - 1);
    if (bitmapsRef.current[clamped]) return bitmapsRef.current[clamped];
    // nearest-neighbour fallback so the canvas never shows a blank frame
    for (let d = 1; d < TOTAL_FRAMES; d++) {
      const lo = clamped - d;
      const hi = clamped + d;
      if (lo >= 0 && bitmapsRef.current[lo]) return bitmapsRef.current[lo];
      if (hi < TOTAL_FRAMES && bitmapsRef.current[hi]) return bitmapsRef.current[hi];
    }
    return null;
  };

  const subscribe = (cb: () => void) => {
    listenersRef.current.add(cb);
    return () => listenersRef.current.delete(cb);
  };

  return { getFrame, subscribe, firstFrameReady };
}
