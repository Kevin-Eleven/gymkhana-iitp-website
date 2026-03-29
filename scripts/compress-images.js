const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, '../public');
const MAX_SIZE_BYTES = 500 * 1024; // 500KB
const MAX_DIMENSION = 1920;

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    return;
  }

  const stat = fs.statSync(filePath);
  if (stat.size <= MAX_SIZE_BYTES) {
    return;
  }

  const originalSizeMB = (stat.size / 1024 / 1024).toFixed(2);
  console.log(`Processing: ${filePath} (Original: ${originalSizeMB} MB)`);

  const tempPath = filePath + '.tmp';

  try {
    let pipeline = sharp(filePath);
    const metadata = await pipeline.metadata();

    // Resize if too large
    if (metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION) {
        if (metadata.width > metadata.height) {
            pipeline = pipeline.resize({ width: MAX_DIMENSION, withoutEnlargement: true });
        } else {
            pipeline = pipeline.resize({ height: MAX_DIMENSION, withoutEnlargement: true });
        }
    }

    // Compress based on format
    if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
    } else if (ext === '.png') {
        pipeline = pipeline.png({ quality: 80, compressionLevel: 8 });
    } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: 80 });
    }

    await pipeline.toFile(tempPath);
    
    // Replace original file with compressed file
    fs.renameSync(tempPath, filePath);
    
    const newStat = fs.statSync(filePath);
    const newSizeMB = (newStat.size / 1024 / 1024).toFixed(2);
    console.log(` -> Compressed: ${path.basename(filePath)} to ${newSizeMB} MB`);
    
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
    if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
    }
  }
}

async function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await scanDirectory(fullPath);
    } else {
      await processFile(fullPath);
    }
  }
}

console.log('Starting image compression... This might take a while depending on the number of large files.');

scanDirectory(targetDir).then(() => {
  console.log('Finished processing all large images.');
}).catch(console.error);
