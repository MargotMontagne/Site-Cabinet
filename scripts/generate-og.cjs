const path = require("path");
const root = path.join(__dirname, "..");

// Cherche sharp là où Next.js le place
let sharp;
try {
  sharp = require("sharp");
} catch {
  try {
    sharp = require(path.join(root, "node_modules", "sharp"));
  } catch {
    console.error("Sharp introuvable. Lancez : npm install sharp");
    process.exit(1);
  }
}

const input = path.join(root, "public", "Logo Montagne vert.webp");
const output = path.join(root, "public", "og-image.jpg");

const OG_W = 1200;
const OG_H = 630;

async function main() {
  // Redimensionne le logo à 500px de large
  const logoBuffer = await sharp(input)
    .resize({ width: 500 })
    .toBuffer({ resolveWithObject: true });

  const left = Math.round((OG_W - logoBuffer.info.width) / 2);
  const top = Math.round((OG_H - logoBuffer.info.height) / 2);

  await sharp({
    create: {
      width: OG_W,
      height: OG_H,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .composite([{ input: logoBuffer.data, left, top }])
    .jpeg({ quality: 90 })
    .toFile(output);

  console.log(`✅ og-image.jpg créée (${OG_W}x${OG_H})`);
}

main().catch(console.error);
