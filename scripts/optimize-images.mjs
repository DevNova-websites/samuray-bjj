import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { existsSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = join(__dirname, "..", "public", "images");
const OUTPUT_DIR = INPUT_DIR;

// All gallery/content images are already WebP in the repo.
// This script only handles og-image.png → og-image.webp for OG metadata.
const CONFIGS = {
  "og-image.png": { width: 1200, quality: 85 },
};

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);

async function optimize() {
  const files = await readdir(INPUT_DIR);
  let processed = 0;

  for (const file of files) {
    const ext = extname(file);
    if (!IMAGE_EXTS.has(ext)) continue;

    const inputPath = join(INPUT_DIR, file);
    const outputName = basename(file, ext) + ".webp";
    const outputPath = join(OUTPUT_DIR, outputName);

    if (existsSync(outputPath)) {
      const srcStat = await stat(inputPath);
      const outStat = await stat(outputPath);
      if (outStat.mtimeMs > srcStat.mtimeMs) {
        console.log(`⏭  Skipping ${file} (already optimized)`);
        continue;
      }
    }

    const cfg = CONFIGS[file] || { width: 1920, quality: 80 };
    const srcStat = await stat(inputPath);
    const srcKB = Math.round(srcStat.size / 1024);

    try {
      await sharp(inputPath)
        .resize({ width: cfg.width, withoutEnlargement: true })
        .webp({ quality: cfg.quality, effort: 4 })
        .toFile(outputPath);

      const outStat = await stat(outputPath);
      const outKB = Math.round(outStat.size / 1024);
      const savings = Math.round((1 - outKB / srcKB) * 100);
      console.log(`✅ ${file} → ${outputName}  ${srcKB} KB → ${outKB} KB  (-${savings}%)`);
      processed++;
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err.message);
    }
  }

  if (processed === 0) console.log("✅ All images already optimized.");
}

optimize();
