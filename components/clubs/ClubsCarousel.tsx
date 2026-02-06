'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
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
              <button
                onClick={() => setActive(club)}
                className="group flex h-full w-full flex-col items-center rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={club.logo}
                  alt={club.name}
                  className="mb-6 h-28 w-28 object-contain"
                />
                <span className="rounded-full border px-6 py-2 text-sm font-medium group-hover:bg-green-600 group-hover:text-white">
                  {club.name}
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {active && <ClubModal club={active} onClose={() => setActive(null)} />}
    </section>
  );
}
