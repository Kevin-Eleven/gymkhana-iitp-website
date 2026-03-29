'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, ChevronLeft, ChevronRight, Youtube } from 'lucide-react';
import ClubModal from './ClubModal';
import { Section, Club } from './clubs.data';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ClubsCarousel({ section }: { section: Section }) {
  const [active, setActive] = useState<Club | null>(null);

  return (
    <section id={section.id} className="bg-[#f4f7fe] px-6 py-24">
      <div className="mx-auto max-w-[90rem]">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            {section.title}
          </h2>

          {section.description && (
            <p className="mx-auto mb-12 max-w-4xl text-center text-gray-700">
              {section.description}
            </p>
          )}
        </div>

        <div className="relative group mx-auto px-16">
          <Swiper
            className="pb-16"
            modules={[Navigation]}
            spaceBetween={24}
            loop={true}
            navigation={{
              prevEl: `.prev-${section.id}`,
              nextEl: `.next-${section.id}`,
            }}
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
                    className="absolute inset-0 flex items-center justify-center gap-4 bg-white/90"
                  >
                    {club.facebook && club.facebook !== '#' && (
                      <a href={club.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition-colors" onClick={(e) => e.stopPropagation()}>
                        <Facebook />
                      </a>
                    )}
                    {club.instagram && club.instagram !== '#' && (
                      <a href={club.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-600 transition-colors" onClick={(e) => e.stopPropagation()}>
                        <Instagram />
                      </a>
                    )}
                    {club.linkedin && club.linkedin !== '#' && (
                      <a href={club.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700 transition-colors" onClick={(e) => e.stopPropagation()}>
                        <Linkedin />
                      </a>
                    )}
                    {club.youtube && club.youtube !== '#' && (
                      <a href={club.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-red-600 transition-colors" onClick={(e) => e.stopPropagation()}>
                        <Youtube />
                      </a>
                    )}
                  </motion.div>
                </motion.button>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className={`prev-${section.id} absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-emerald-600 shadow-lg transition-transform hover:scale-110 hover:bg-emerald-600 hover:text-white disabled:opacity-50`}>
            <ChevronLeft size={32} />
          </button>
          <button className={`next-${section.id} absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-emerald-600 shadow-lg transition-transform hover:scale-110 hover:bg-emerald-600 hover:text-white disabled:opacity-50`}>
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      {active && <ClubModal club={active} onClose={() => setActive(null)} />}
    </section>
  );
}
