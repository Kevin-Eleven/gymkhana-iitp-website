'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import ClubModal from './ClubModal';
import { Section, Club } from './clubs.data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ClubsCarousel({ section }: { section: Section }) {
  const [active, setActive] = useState<Club | null>(null);

  return (
    <section id={section.id} className="bg-[#f4f7fe] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          {section.title}
        </h2>

        {section.description && (
          <p className="mx-auto mb-12 max-w-4xl text-center text-gray-700">
            {section.description}
          </p>
        )}

        <Swiper
          className="pb-16"
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {section.items.map((club) => (
            <SwiperSlide key={club.name}>
              <motion.button
                onClick={() => setActive(club)}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="relative flex h-full min-h-[220px] w-full flex-col items-center justify-center rounded-2xl bg-white p-6 shadow transition hover:shadow-xl overflow-hidden"
              >
                <motion.img
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 0.9 }
                  }}
                  transition={{ duration: 0.3 }}
                  src={club.logo}
                  alt={club.name}
                  className="mb-6 h-28 w-28 object-contain"
                />
                <motion.span 
                  variants={{
                    rest: { opacity: 1 },
                    hover: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="rounded-full border px-6 py-2 text-sm font-medium"
                >
                  {club.name}
                </motion.span>
                
                {/* Social Links Overlay */}
                <motion.div
                  variants={{
                    rest: { opacity: 0, y: 10 },
                    hover: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center gap-4 bg-white/80"
                >
                  {club.facebook && <Facebook className="text-gray-800" />}
                  {club.instagram && <Instagram className="text-gray-800" />}
                  {club.linkedin && <Linkedin className="text-gray-800" />}
                </motion.div>
              </motion.button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {active && <ClubModal club={active} onClose={() => setActive(null)} />}
    </section>
  );
}
