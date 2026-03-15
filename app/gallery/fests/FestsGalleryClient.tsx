'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FestCard {
  title: string
  description: string
  image: string
}

const festCards: FestCard[] = [
  {
    title: 'Anwesha',
    image: '/gallery/Fests/img/Anwesha/1.jpg',
    description:
      "Anwesha, IIT Patna's annual techno-cultural and management extravaganza.",
  },
  {
    title: 'Anwesha',
    image: '/gallery/Fests/img/Anwesha/2.jpg',
    description:
      'One of East India’s biggest youth festivals with tech, gaming, music and dance.',
  },
  {
    title: 'Celesta',
    image: '/gallery/Fests/img/Celesta/1.JPG',
    description:
      "Celesta is IIT Patna's annual technical fest inspiring innovation.",
  },
  {
    title: 'Celesta',
    image: '/gallery/Fests/img/Celesta/2.JPG',
    description:
      'A platform fostering curiosity in science and technology.',
  },
  {
    title: 'Infinito',
    image: '/gallery/Fests/img/Infinito/1.jpg',
    description:
      "Infinito is IIT Patna's annual sports fest celebrating athletic excellence.",
  },
  {
    title: 'Nebula',
    image: '/gallery/Fests/img/Nebula/1.png',
    description:
      'Nebula is the freshers’ party welcoming new students.',
  },
  {
    title: 'TEDx',
    image: '/gallery/Fests/img/TedX/1.png',
    description:
      'TEDx IIT Patna focuses on unity, vision, and ideas worth spreading.',
  },
  {
    title: 'Reverberance',
    image: '/gallery/Fests/img/Reverb/1.png',
    description:
      'Reverberance is IIT Patna’s Diwali cultural celebration.',
  },
]

export default function FestsGalleryClient() {

  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % festCards.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + festCards.length) % festCards.length)
  }

  return (
    <main className="min-h-screen bg-[#f4f7fe] pt-24 px-4">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-16">
          Fests Gallery
        </h1>

        {/* CARD STACK */}
        <div className="relative flex justify-center items-center h-[520px]">

          <AnimatePresence>

            {festCards.map((card, i) => {

              const offset = i - index

              return (

                <motion.div
                  key={i}
                  className="absolute w-[340px] bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                  animate={{
                    x: offset * 70,
                    scale: i === index ? 1 : 0.85,
                    rotate: offset * 5,
                    opacity: Math.abs(offset) > 3 ? 0 : 1,
                    filter: i === index ? "blur(0px)" : "blur(1px)"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25
                  }}
                  style={{
                    zIndex: festCards.length - Math.abs(offset)
                  }}
                  onClick={() => setIndex(i)}
                >

                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[220px] object-cover"
                  />

                  <div className="p-5">

                    <h2 className="text-lg font-semibold mb-2">
                      {card.title}
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
                    </p>

                  </div>

                </motion.div>
              )
            })}

          </AnimatePresence>

        </div>

        {/* CONTROLS */}
        <div className="flex justify-center gap-6 mt-12">

          <button
            onClick={prev}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Prev
          </button>

          <button
            onClick={next}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Next
          </button>

        </div>

      </div>

    </main>
  )
}