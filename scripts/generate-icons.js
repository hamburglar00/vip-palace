const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputFile = path.join(__dirname, '../public/assets/Logo_only.png');
const outputDir = path.join(__dirname, '../public/icons');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateIcons() {
  try {
    for (const size of sizes) {
      await sharp(inputFile)
        .resize(size, size)
        .toFile(path.join(outputDir, `icon-${size}x${size}.png`));
    }

    for (const size of sizes) {
      await sharp(inputFile)
        .resize(size, size)
        .toFile(path.join(outputDir, `icon-${size}x${size}.maskable.png`));
    }

    await sharp(inputFile)
      .resize(196, 196)
      .toFile(path.join(outputDir, 'favicon-196.png'));

    await sharp(inputFile)
      .resize(180, 180)
      .toFile(path.join(outputDir, 'apple-icon-180.png'));
  } catch (error) {
    throw error;
  }
}

generateIcons();
