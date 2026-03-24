import fs from 'fs';
import path from 'path';
import GalleryClient from './GalleryClient';

function loadImages(folder: string, category: string) {
  const folderPath = path.join(process.cwd(), 'public/images/portfolio', folder);

  if (!fs.existsSync(folderPath)) return [];

  const files = fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));

  return files.map((file) => ({
    src: `/images/portfolio/${folder}/${file}`,
    category,
  }));
}

export default function Page() {

  const images = [
    ...loadImages('sports', 'sports'),
    ...loadImages('Hostels', 'hostel'),
    ...loadImages('Welfare', 'welfare'),
    ...loadImages('Acad', 'academic'),
    ...loadImages('STC', 'stc'),
    ...loadImages('Hosca', 'hosca'),
  ];

  return <GalleryClient images={images} />;
}