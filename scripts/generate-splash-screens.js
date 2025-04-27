const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const baseIconPath = path.join(__dirname, '../public/icons/apple-icon-180.png');
const outputDir = path.join(__dirname, '../public/icons');

// iOS device splash screen sizes
const splashScreens = [
  { width: 1125, height: 2436, name: 'apple-splash-1125-2436' }, // iPhone X, XS, 11 Pro
  { width: 1242, height: 2208, name: 'apple-splash-1242-2208' }, // iPhone 6+, 6S+, 7+, 8+
  { width: 1242, height: 2688, name: 'apple-splash-1242-2688' }, // iPhone XS Max, 11 Pro Max
  { width: 750, height: 1334, name: 'apple-splash-750-1334' }, // iPhone 6, 6S, 7, 8
  { width: 828, height: 1792, name: 'apple-splash-828-1792' }, // iPhone XR, 11
  { width: 1170, height: 2532, name: 'apple-splash-1170-2532' }, // iPhone 12, 13
  { width: 1284, height: 2778, name: 'apple-splash-1284-2778' }, // iPhone 12 Pro Max, 13 Pro Max
  { width: 1179, height: 2556, name: 'apple-splash-1179-2556' }, // iPhone 14 Pro
  { width: 1290, height: 2796, name: 'apple-splash-1290-2796' }, // iPhone 14 Pro Max
];

async function generateSplashScreens() {
  try {
    // Read the base icon
    const baseIcon = await sharp(baseIconPath);

    // Generate each splash screen
    for (const screen of splashScreens) {
      const outputPath = path.join(outputDir, `${screen.name}.png`);

      // Create a black background
      const background = sharp({
        create: {
          width: screen.width,
          height: screen.height,
          channels: 4,
          background: { r: 0, g: 0, b: 0, alpha: 1 }
        }
      });

      // Calculate the size for the centered icon (80% of the smaller dimension)
      const iconSize = Math.floor(Math.min(screen.width, screen.height) * 0.8);

      // Resize the icon
      const resizedIcon = await baseIcon
        .resize(iconSize, iconSize, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toBuffer();

      // Composite the icon onto the background
      await background
        .composite([{
          input: resizedIcon,
          gravity: 'center'
        }])
        .png()
        .toFile(outputPath);

      console.log(`Generated ${screen.name}.png`);
    }

    console.log('All splash screens generated successfully!');
  } catch (error) {
    console.error('Error generating splash screens:', error);
  }
}

generateSplashScreens();
