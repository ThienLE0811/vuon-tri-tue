const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// SVG logo của Vườn Trí Tuệ: Mầm cây xanh 3D tươi sáng với lá vươn lên và ngôi sao lấp lánh
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4ade80" />
      <stop offset="100%" stop-color="#16a34a" />
    </linearGradient>
    <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#dcfce7" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="1" flood-color="#0f5132" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- 3D Beveled Base Container -->
  <rect x="2" y="2" width="60" height="60" rx="18" fill="#15803d" />
  <rect x="2" y="2" width="60" height="55" rx="18" fill="url(#bgGrad)" />

  <!-- Top Gloss Highlight -->
  <path d="M16 6 H48 C54 6 58 10 58 14 C58 17 54 18 48 18 H16 C10 18 6 17 6 14 C6 10 10 6 16 6 Z" fill="#ffffff" opacity="0.25" />

  <!-- Seedling / Sprout Graphic -->
  <g filter="url(#shadow)">
    <!-- Soil mound -->
    <ellipse cx="32" cy="47" rx="14" ry="4" fill="#713f12" opacity="0.35" />

    <!-- Stem -->
    <path d="M32 47 C32 38 31 33 33 26" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" fill="none" />

    <!-- Left Leaf -->
    <path d="M32 35 C20 34 16 26 21 21 C27 21 32 27 32 35 Z" fill="url(#leafGrad)" stroke="#15803d" stroke-width="1.5" stroke-linejoin="round" />

    <!-- Right Leaf -->
    <path d="M33 28 C45 27 49 18 43 14 C37 14 32 20 33 28 Z" fill="url(#leafGrad)" stroke="#15803d" stroke-width="1.5" stroke-linejoin="round" />

    <!-- Sparkle Star -->
    <path d="M47 8 L48.5 12 L52.5 13.5 L48.5 15 L47 19 L45.5 15 L41.5 13.5 L45.5 12 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="0.75" />
  </g>
</svg>`;

// Tạo file ICO chuẩn (chứa PNG 32x32 và 48x48)
function createIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * numImages;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(numImages, 4);

  const dirEntries = [];
  const imageBuffers = [];

  for (const { width, height, buffer } of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // Size
    entry.writeUInt32LE(offset, 12); // Offset

    dirEntries.push(entry);
    imageBuffers.push(buffer);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
}

async function main() {
  const publicDir = path.join(__dirname, "..", "public");
  const appDir = path.join(__dirname, "..", "src", "app");

  // 1. Lưu icon.svg
  fs.writeFileSync(path.join(appDir, "icon.svg"), svgContent, "utf8");
  fs.writeFileSync(path.join(publicDir, "icon.svg"), svgContent, "utf8");
  console.log("Saved icon.svg to src/app and public");

  // 2. Render PNG các cỡ
  const svgBuffer = Buffer.from(svgContent);
  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();

  // 3. Tạo file ICO
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);

  fs.writeFileSync(path.join(appDir, "favicon.ico"), icoBuffer);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
  console.log("Generated and saved favicon.ico to src/app and public");

  // 4. Lưu apple-icon.png
  fs.writeFileSync(path.join(appDir, "apple-icon.png"), png192);
  fs.writeFileSync(path.join(publicDir, "apple-icon.png"), png192);
  console.log("Generated apple-icon.png");

  console.log("Favicon generation completed successfully!");
}

main().catch(console.error);
