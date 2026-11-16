const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const BACKUP_DIR = path.join(__dirname, '..', '_backup_raw_images');

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

async function run() {
  console.log('Scanning public/ for large images (>500KB)...');
  const allFiles = getAllFiles(PUBLIC_DIR);
  const imageExtensions = ['.png', '.jpg', '.jpeg'];
  
  const largeImages = allFiles.filter(file => {
    const ext = path.extname(file).toLowerCase();
    if (!imageExtensions.includes(ext)) return false;
    const stat = fs.statSync(file);
    return stat.size > 500 * 1024; // > 500KB
  });

  console.log(`Found ${largeImages.length} images larger than 500KB.`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of largeImages) {
    const relPath = path.relative(PUBLIC_DIR, file);
    const backupPath = path.join(BACKUP_DIR, relPath);
    const backupDir = path.dirname(backupPath);

    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    // 1. Copy original to backup if not already backed up
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(file, backupPath);
    }

    const statBefore = fs.statSync(file);
    totalBefore += statBefore.size;

    try {
      const ext = path.extname(file).toLowerCase();
      const meta = await sharp(file).metadata();
      const targetWidth = Math.min(meta.width || 1920, 1920);

      // Generate .webp sibling
      const webpPath = file.substring(0, file.lastIndexOf('.')) + '.webp';
      await sharp(file)
        .resize({ width: targetWidth, withoutEnlargement: true })
        .webp({ quality: 82, effort: 5 })
        .toFile(webpPath + '.tmp');
      fs.renameSync(webpPath + '.tmp', webpPath);

      // Compress in-place so no existing code references break
      if (ext === '.png') {
        const compressedPngBuffer = await sharp(file)
          .resize({ width: targetWidth, withoutEnlargement: true })
          .png({ quality: 80, compressionLevel: 9, effort: 7 })
          .toBuffer();

        // Write only if smaller
        if (compressedPngBuffer.length < statBefore.size) {
          fs.writeFileSync(file, compressedPngBuffer);
        }
      } else if (ext === '.jpg' || ext === '.jpeg') {
        const compressedJpgBuffer = await sharp(file)
          .resize({ width: targetWidth, withoutEnlargement: true })
          .jpeg({ quality: 80, mozjpeg: true })
          .toBuffer();

        if (compressedJpgBuffer.length < statBefore.size) {
          fs.writeFileSync(file, compressedJpgBuffer);
        }
      }

      const statAfter = fs.statSync(file);
      totalAfter += statAfter.size;
      const savedMb = ((statBefore.size - statAfter.size) / 1024 / 1024).toFixed(2);
      console.log(`✅ [${relPath}]: ${(statBefore.size / 1024 / 1024).toFixed(2)}MB -> ${(statAfter.size / 1024 / 1024).toFixed(2)}MB (saved ${savedMb}MB)`);
    } catch (err) {
      console.error(`❌ Error optimizing ${relPath}:`, err.message);
      totalAfter += statBefore.size;
    }
  }

  const totalSavedMb = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(2);
  console.log(`\n🎉 Total Before: ${(totalBefore / 1024 / 1024).toFixed(2)}MB`);
  console.log(`🎉 Total After: ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
  console.log(`🎉 Total Disk/Network Space Saved: ${totalSavedMb}MB!`);
}

run().catch(console.error);
