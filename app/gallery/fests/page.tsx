import fs from 'fs';
import path from 'path';
import FestsGalleryClient from './FestsGalleryClient';

function loadFest(folder: string) {
  const folderPath = path.join(process.cwd(), 'public/images/fest', folder);

  if (!fs.existsSync(folderPath)) return [];

  const files = fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));

  return files.map((file) => ({
    src: `/images/fest/${folder}/${file}`,
    category: folder.toLowerCase(),
  }));
}

export default function Page() {
  const images = [
    ...loadFest('Anwesha'),
    ...loadFest('Celesta'),
    ...loadFest('Infinito'),
    ...loadFest('InvisionX'),
    ...loadFest('TEDx'),
  ] as any;

  return <FestsGalleryClient images={images} />;
}