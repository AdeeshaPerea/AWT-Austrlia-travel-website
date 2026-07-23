const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, '../public/image');
const files = fs.readdirSync(imgDir);

async function convertAll() {
  let totalSaved = 0;
  console.log('Starting image conversion to WebP...');

  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = path.join(imgDir, file);
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const outputPath = path.join(imgDir, `${baseName}.webp`);

      const origSize = fs.statSync(inputPath).size;
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);

        const newSize = fs.statSync(outputPath).size;
        const saved = origSize - newSize;
        totalSaved += saved;

        console.log(`Converted ${file}: ${(origSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (Saved ${((saved / origSize) * 100).toFixed(1)}%)`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }

  console.log(`\n🎉 Total space saved: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB!`);
}

convertAll();
