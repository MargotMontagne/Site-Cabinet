const path = require("path");
const root = path.join(__dirname, "..");

let sharp;
try {
  sharp = require("sharp");
} catch {
  sharp = require(path.join(root, "node_modules", "sharp"));
}

const input = path.join(root, "public", "Logo Montagne vert.webp");
const SIZE = 512;

async function main() {
  // Logo redimensionné à 420px max, centré dans 512x512 transparent
  const logo = await sharp(input)
    .resize({ width: 420, height: 420, fit: "inside" })
    .toBuffer({ resolveWithObject: true });

  const left = Math.round((SIZE - logo.info.width) / 2);
  const top = Math.round((SIZE - logo.info.height) / 2);

  await sharp({
    create: {
      width: SIZE,
      height: SIZE,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: logo.data, left, top }])
    .png()
    .toFile(path.join(root, "app", "icon.png"));

  console.log("✅ app/icon.png créée (512x512)");
}

main().catch(console.error);
