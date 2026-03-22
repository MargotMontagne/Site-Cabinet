import sharp from "../node_modules/sharp/lib/index.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const input = path.join(root, "public", "Logo Montagne vert.webp");
const output = path.join(root, "public", "og-image.jpg");

const OG_W = 1200;
const OG_H = 630;

// Logo occupe ~50% de la largeur, centré
const logoW = 500;

const logo = await sharp(input)
  .resize({ width: logoW })
  .toBuffer({ resolveWithObject: true });

const left = Math.round((OG_W - logo.info.width) / 2);
const top = Math.round((OG_H - logo.info.height) / 2);

await sharp({
  create: {
    width: OG_W,
    height: OG_H,
    channels: 3,
    background: { r: 255, g: 255, b: 255 },
  },
})
  .composite([{ input: logo.data, left, top }])
  .jpeg({ quality: 90 })
  .toFile(output);

console.log(`✅ og-image.jpg créée (${OG_W}x${OG_H})`);
