import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { existsSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = join(__dirname, "..", "public", "images");
const OUTPUT_DIR = INPUT_DIR;

const CONFIGS = {
  // Full-width background images — max 1920px wide, aggressive compression
  "group.jpg":                    { width: 1920, quality: 78 },
  "image8.jpg":                   { width: 1920, quality: 78 },
  "image7.jpg":                   { width: 1920, quality: 78 },
  "image6-historia.jpg":          { width: 1920, quality: 78 },
  "image5-historia-afiliacion.jpg": { width: 1920, quality: 78 },
  "foto-3-historia.JPG":          { width: 1600, quality: 80 },
  "image-4-nacimientojlacademy.jpeg": { width: 1600, quality: 80 },
  // Portrait / card images
  "prof-jorge-omar-ledesma.png":  { width: 900,  quality: 85 },
  "ChibiSamu.jpg":                { width: 800,  quality: 85 },
  // Logo — keep small
  "logo-nuevo.png":               { width: 400,  quality: 90, lossless: true },
  "logo.jpeg":                    { width: 400,  quality: 90 },
  "og-image.png":                 { width: 1200, quality: 85 },
};

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);
const SKIP_FILES = new Set(["hero-bg.jpg"]); // placeholder, not a real image

async function optimize() {
  const files = await readdir(INPUT_DIR);

  for (const file of files) {
    const ext = extname(file);
    if (!IMAGE_EXTS.has(ext) || SKIP_FILES.has(file)) continue;

    const inputPath = join(INPUT_DIR, file);
    const outputName = basename(file, ext) + ".webp";
    const outputPath = join(OUTPUT_DIR, outputName);

    // Skip if webp already exists and is newer than source
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
      let pipeline = sharp(inputPath).resize({ width: cfg.width, withoutEnlargement: true });

      if (cfg.lossless) {
        pipeline = pipeline.webp({ lossless: true, quality: cfg.quality });
      } else {
        pipeline = pipeline.webp({ quality: cfg.quality, effort: 4 });
      }

      await pipeline.toFile(outputPath);

      const outStat = await stat(outputPath);
      const outKB = Math.round(outStat.size / 1024);
      const savings = Math.round((1 - outKB / srcKB) * 100);
      console.log(`✅ ${file} → ${outputName}  ${srcKB} KB → ${outKB} KB  (-${savings}%)`);
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err.message);
    }
  }
}

optimize();
