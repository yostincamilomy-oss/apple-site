const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const outDir = path.resolve(__dirname, "../public/products");
fs.mkdirSync(outDir, { recursive: true });

async function keyOutColor(inputPath, outputPath, bg, innerThresh = 3, outerThresh = 14) {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < width * height; i++) {
    const o = i * channels;
    const dr = Math.abs(data[o] - bg[0]);
    const dg = Math.abs(data[o + 1] - bg[1]);
    const db = Math.abs(data[o + 2] - bg[2]);
    const dist = Math.max(dr, dg, db);

    let alpha;
    if (dist <= innerThresh) alpha = 0;
    else if (dist >= outerThresh) alpha = 255;
    else alpha = Math.round(((dist - innerThresh) / (outerThresh - innerThresh)) * 255);

    data[o + 3] = Math.min(data[o + 3], alpha);
  }

  await sharp(data, { raw: { width, height, channels } })
    .png({ quality: 95 })
    .toFile(outputPath);
}

(async () => {
  await keyOutColor(
    path.resolve(__dirname, "source/macbook-src.jpg"),
    path.join(outDir, "macbook.png"),
    [255, 255, 255]
  );
  console.log("wrote macbook.png");

  await keyOutColor(
    path.resolve(__dirname, "source/watch-src.jpg"),
    path.join(outDir, "watch.png"),
    [245, 245, 247]
  );
  console.log("wrote watch.png");

  await keyOutColor(
    path.resolve(__dirname, "source/airpods-src.jpg"),
    path.join(outDir, "airpods.png"),
    [0, 0, 0],
    10,
    40
  );
  console.log("wrote airpods.png");

  // iPhone source already has a clean alpha channel — just copy through.
  await sharp(path.resolve(__dirname, "source/iphone-src.png"))
    .png({ quality: 95 })
    .toFile(path.join(outDir, "iphone.png"));
  console.log("wrote iphone.png");
})();
