const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC_DIR = path.resolve(__dirname, "../public/frames");
const OUT_DIR = path.resolve(__dirname, "frames-safety-margin");
const TOTAL_FRAMES = 193;
const FRAME_WIDTH = 1920;
const FRAME_HEIGHT = 1080;
const SCALE = 0.85; // shrink the whole scene ~15% within the same 1920x1080 canvas

fs.mkdirSync(OUT_DIR, { recursive: true });

const newW = Math.round(FRAME_WIDTH * SCALE);
const newH = Math.round(FRAME_HEIGHT * SCALE);
const left = Math.round((FRAME_WIDTH - newW) / 2);
const top = Math.round((FRAME_HEIGHT - newH) / 2);

(async () => {
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const name = `frame-${String(i).padStart(4, "0")}.jpg`;
    const src = path.join(SRC_DIR, name);

    // Soft, full-canvas background: a heavily blurred version of the same
    // frame, preserving its natural studio vignette so the newly exposed
    // margin reads as a continuation of the same backdrop, not a hard seam.
    const background = await sharp(src)
      .resize(FRAME_WIDTH, FRAME_HEIGHT)
      .blur(60)
      .toBuffer();

    const resized = await sharp(src).resize(newW, newH).toBuffer();

    await sharp(background)
      .composite([{ input: resized, left, top }])
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(path.join(OUT_DIR, name));

    if (i === 1 || i % 50 === 0 || i === TOTAL_FRAMES) console.log("processed", name);
  }
  console.log("done");
})();
