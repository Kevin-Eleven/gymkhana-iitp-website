'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'all' | 'anwesha' | 'celesta' | 'infinito' | 'invisionX' | 'tedx';

type ImageItem = {
  src: string;
  category: Exclude<Category, 'all'>;
};

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Anwesha', value: 'anwesha' },
  { label: 'Celesta', value: 'celesta' },
  { label: 'Infinito', value: 'infinito' },
  { label: 'InvisionX', value: 'invisionx' },
  { label: 'TEDx', value: 'tedx' },
];

export default function FestsGalleryClient({ images }: { images: ImageItem[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredImages =
    activeCategory === 'all'
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#f4f7fe] pt-24 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-black text-center mb-12">
          Fests Gallery
        </h1>

        {/* Tabs (Same as main gallery) */}
        <div className="flex flex-wrap justify-center gap-8 mb-14 text-lg font-semibold">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value as Category)}
              className={`relative pb-2 ${
                activeCategory === cat.value
                  ? 'text-emerald-600'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {cat.label}
              {activeCategory === cat.value && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-emerald-500" />
              )}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-12"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <motion.img
                  src={img.src}
                  className="w-full h-[250px] object-cover"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}