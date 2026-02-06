'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category =
  | 'all'
  | 'sports'
  | 'hostel'
  | 'welfare'
  | 'academic'
  | 'stc'
  | 'hosca';

const categories: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Sports', value: 'sports' },
  { label: 'Hostel', value: 'hostel' },
  { label: 'Welfare', value: 'welfare' },
  { label: 'Academic', value: 'academic' },
  { label: 'STC', value: 'stc' },
  { label: 'Hosca', value: 'hosca' },
];

const images = [
  { src: '/images/portfolio/sports/7.jpg', category: 'sports' },
  { src: '/images/portfolio/sports/Inter IIT19.jpg', category: 'sports' },
  { src: '/images/portfolio/sports/badminton.jpg', category: 'sports' },
  { src: '/images/portfolio/Acad/smiriti.jpg', category: 'academic' },
  { src: '/images/portfolio/Acad/acad_2.jpg', category: 'academic' },
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredImages =
    activeCategory === 'all'
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#f4f7fe] pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          Our Gallery
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-8 mb-14 text-sm font-semibold">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
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
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
