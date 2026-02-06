import { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery | IIT Patna Gymkhana',
  description: 'Photo gallery showcasing events and activities of IIT Patna Gymkhana',
};

export default function GalleryPage() {
  return <GalleryClient />;
}
