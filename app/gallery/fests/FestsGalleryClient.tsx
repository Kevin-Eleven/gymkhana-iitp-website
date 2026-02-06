'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FestCard {
  title: string;
  description: string;
  image: string;
}

const festCards: FestCard[] = [
  {
    title: 'Anwesha',
    image: '/gallery/Fests/img/Anwesha/1.jpg',
    description:
      "Anwesha, IIT Patna's annual techno-cultural and management extravaganza, embodies grandeur, creativity, and perfection.",
  },
  {
    title: 'Anwesha',
    image: '/gallery/Fests/img/Anwesha/2.jpg',
    description:
      'One of East India’s biggest youth festivals with events for tech, gaming, music, and dance enthusiasts.',
  },
  {
    title: 'Celesta',
    image: '/gallery/Fests/img/Celesta/1.JPG',
    description:
      "Celesta is IIT Patna's annual technical fest, inspiring young minds to pursue technology as a passion.",
  },
  {
    title: 'Celesta',
    image: '/gallery/Fests/img/Celesta/2.JPG',
    description:
      'A platform fostering innovation and curiosity in science and technology.',
  },
  {
    title: 'Infinito',
    image: '/gallery/Fests/img/Infinito/1.jpg',
    description:
      "Infinito is IIT Patna's annual sports fest celebrating competitive spirit and athletic excellence.",
  },
  {
    title: 'Infinito',
    image: '/gallery/Fests/img/Infinito/2.jpg',
    description:
      'A celebration of energy, enthusiasm, and sporting zeal.',
  },
  {
    title: 'Nebula',
    image: '/gallery/Fests/img/Nebula/1.png',
    description:
      'Nebula is the freshers’ party welcoming new students into the IIT Patna community.',
  },
  {
    title: 'Nebula',
    image: '/gallery/Fests/img/Nebula/2.png',
    description:
      'A celebration of new beginnings, creativity, and lasting memories.',
  },
  {
    title: 'TEDx',
    image: '/gallery/Fests/img/TedX/1.png',
    description:
      'TEDx IIT Patna focuses on unity, vision, and collective achievement.',
  },
  {
    title: 'TEDx',
    image: '/gallery/Fests/img/TedX/2.png',
    description:
      'Empowering individuals to achieve extraordinary outcomes together.',
  },
  {
    title: 'Reverberance',
    image: '/gallery/Fests/img/Reverb/1.png',
    description:
      'Reverberance is IIT Patna’s Diwali cultural celebration full of lights and performances.',
  },
  {
    title: 'Reverberance',
    image: '/gallery/Fests/img/Reverb/2.png',
    description:
      'A time to embrace culture, unity, and unforgettable memories.',
  },
];

export default function FestsGalleryClient() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#f4f7fe] pt-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-16">
          Fests Gallery
        </h1>

        {/* Stack */}
        <div className="relative h-[600px] flex items-center justify-center">
          {festCards.map((card, index) => {
            const offset = index - activeIndex;

            return (
              <motion.div
                key={index}
                className="absolute w-[320px] sm:w-[360px] bg-white rounded-xl shadow-lg cursor-pointer"
                style={{ zIndex: festCards.length - Math.abs(offset) }}
                animate={{
                  x: offset * 40,
                  y: Math.abs(offset) * 10,
                  scale: index === activeIndex ? 1 : 0.92,
                  rotate: offset * 2,
                  opacity: Math.abs(offset) > 4 ? 0 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -10 }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[240px] object-cover rounded-t-xl"
                />

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    {card.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
