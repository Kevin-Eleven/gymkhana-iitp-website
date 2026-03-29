'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

type Category =
  | 'all'
  | 'sports'
  | 'hostel'
  | 'welfare'
  | 'academic'
  | 'stc'
  | 'hosca'
  | 'fests'; 

export type ImageItem = {
  src: string;
  category: Exclude<Category, 'all' | 'fests'>;
};

const categories: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Sports', value: 'sports' },
  { label: 'Hostel', value: 'hostel' },
  { label: 'Welfare', value: 'welfare' },
  { label: 'Academic', value: 'academic' },
  { label: 'STC', value: 'stc' },
  { label: 'Hosca', value: 'hosca' },
  { label: 'Fests', value: 'fests' },
];

export default function GalleryClient({ images }: { images: ImageItem[] }) {

  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === 'all'
      ? images
      : images.filter((img) => img.category === activeCategory);

  const handleClick = (cat: Category) => {
    if (cat === 'fests') {
      router.push('/gallery/fests'); 
      return;
    }
    setActiveCategory(cat);
  };

  return (
    <main className="min-h-screen bg-[#f4f7fe] pt-24  px-4 pb-12">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-black mb-12">
          Our Gallery
        </h1>

        {/* Filters */}
        <div className="flex font flex-wrap justify-center gap-8 mb-14 text-lg font-bold ">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleClick(cat.value)} 
              className={`relative pb-2 transition-colors ${
                activeCategory === cat.value
                  ? 'text-emerald-600'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {cat.label}
              {activeCategory === cat.value && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-emerald-500 rounded" />
              )}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <motion.img
                  src={img.src}
                  alt=""
                  className="w-full h-[250px] object-cover cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(img.src)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-5xl w-full flex items-center justify-center">
                <button
                  className="absolute -top-12 right-0 md:-right-12 text-white hover:text-gray-300 z-[101]"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <motion.img
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  src={selectedImage}
                  alt="Enlarged gallery view"
                  className="max-h-[85vh] w-auto rounded-lg shadow-2xl object-contain relative z-[101]"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}