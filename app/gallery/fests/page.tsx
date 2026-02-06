import { Metadata } from 'next';
import FestsGalleryClient from './FestsGalleryClient';

export const metadata: Metadata = {
  title: 'Fests Gallery | IIT Patna Gymkhana',
  description:
    'Gallery of major IIT Patna fests – Anwesha, Celesta, Infinito, Nebula, TEDx, Reverberance',
};

export default function FestsGalleryPage() {
  return <FestsGalleryClient />;
}
