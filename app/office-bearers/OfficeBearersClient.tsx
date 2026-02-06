'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

interface Person {
  name: string;
  role: string;
  image: string;
  email?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
}

interface YearGroup {
  year: string;
  vp: Person[];
  secretaries: Person[];
  reps: Person[];
}

const years: YearGroup[] = [
  {
    year: '2024–25',
    vp: [
      {
        name: 'Shubham Satyam',
        role: "VP Gymkhana '24",
        image: '/images/office/shubham.jpg',
        email: 'shubham_2101ce54@iitp.ac.in',
      },
    ],
    secretaries: [
      {
        name: 'Kirtan Jain',
        role: "Gensec Tech '24",
        image: '/images/office/kirtan.jpg',
        email: 'kirtan_2101cs38@iitp.ac.in',
      },
      {
        name: 'Ankit Kumar',
        role: 'Gensec HoSCA',
        image: '/images/office/ankit.jpg',
        email: 'ankit_2101cb10@iitp.ac.in',
      },
      {
        name: 'Suryansh Bansal',
        role: 'Gensec Welfare',
        image: '/images/office/suryansh.jpg',
        email: 'suryansh_2101cb58@iitp.ac.in',
      },
    ],
    reps: [
      {
        name: 'Panav Arpit Raaj',
        role: 'UG Representative',
        image: '/images/office/panav.jpg',
      },
      {
        name: 'Aashish Ranjan',
        role: 'PG Representative',
        image: '/images/office/No_Image_Available.jpg',
      },
    ],
  },

  {
    year: '2023–24',
    vp: [
      {
        name: 'Atul Kumar',
        role: "VP Gymkhana '23",
        image: '/images/office/No_Image_Available.jpg',
      },
    ],
    secretaries: [
      {
        name: 'Rishikesh Devanathan',
        role: "Gensec Tech '23",
        image: '/images/office/rishi2.jpg',
      },
      {
        name: 'Chirag Bhardwaj',
        role: 'Gensec HoSCA',
        image: '/images/office/chirag.png',
      },
      {
        name: 'Shivam Yadav',
        role: 'Gensec Welfare',
        image: '/images/office/2001me70.jpeg',
      },
    ],
    reps: [
      {
        name: 'Rohit Kumar',
        role: 'UG Representative',
        image: '/images/office/2001cs55.jpeg',
      },
      {
        name: 'Chandra Prakash Singh',
        role: 'PG Representative',
        image: '/images/office/1921ee04.jpeg',
      },
    ],
  },

  {
    year: '2022–23',
    vp: [
      {
        name: 'Kandukuri Rahul Preetham',
        role: "VP Gymkhana '22",
        image: '/images/office/RahulP.jpg',
      },
    ],
    secretaries: [],
    reps: [],
  },

  {
    year: '2021–22',
    vp: [
      {
        name: 'Vijaya Gonugade',
        role: "VP Gymkhana '21",
        image: '/images/office/Vijaya.jpg',
      },
    ],
    secretaries: [],
    reps: [],
  },

  {
    year: '2020–21',
    vp: [
      {
        name: 'Rahul Pandey',
        role: "VP Gymkhana '20",
        image: '/images/office/RahulPan.jpg',
      },
    ],
    secretaries: [],
    reps: [],
  },
];

function PersonCard({ person }: { person: Person }) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative bg-white rounded-2xl shadow-md w-[260px] overflow-hidden group"
    >
      <img
        src={person.image}
        alt={person.name}
        className="w-full h-[260px] object-cover object-top"
      />

      <div className="p-5 text-center">
        <h3 className="font-semibold text-gray-900">
          {person.name}
        </h3>
        <p className="text-sm text-gray-500">
          {person.role}
        </p>
      </div>

      {/* Hover icons */}
      <motion.div
        variants={{
          rest: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-white/90 flex items-end justify-center pb-6"
      >
        <motion.div
          initial="rest"
          animate="hover"
          variants={{
            rest: { opacity: 0 },
            hover: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="flex gap-5"
        >
          {person.email && (
            <motion.a
              variants={{
                rest: { opacity: 0, y: 10 },
                hover: { opacity: 1, y: 0 },
              }}
              href={`mailto:${person.email}`}
              className="text-gray-700 hover:text-emerald-600"
            >
              <Mail />
            </motion.a>
          )}
          {person.facebook && (
            <motion.a variants={{ rest: { y: 10 }, hover: { y: 0 } }}>
              <Facebook />
            </motion.a>
          )}
          {person.linkedin && (
            <motion.a variants={{ rest: { y: 10 }, hover: { y: 0 } }}>
              <Linkedin />
            </motion.a>
          )}
          {person.instagram && (
            <motion.a variants={{ rest: { y: 10 }, hover: { y: 0 } }}>
              <Instagram />
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function OfficeBearersClient() {
  const [active, setActive] = useState(0);
  const current = years[active];

  return (
    <main className="min-h-screen text-black bg-[#f4f7fe] pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Office Bearers
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-10 mb-14 text-sm font-medium border-b border-gray-300">
          {years.map((y, i) => (
            <button
              key={y.year}
              onClick={() => setActive(i)}
              className={`pb-3 text-lg font-bold relative cursor-pointer hover:scale-105 transition-transform ${
                i === active
                  ? 'text-emerald-600'
                  : 'text-gray-500'
              }`}
            >
              {y.year}
              {i === active && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-emerald-500 rounded-full" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.year}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* VP */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Vice President Gymkhana
              </h2>
              <div className="flex justify-center">
                {current.vp.map((p) => (
                  <PersonCard key={p.name} person={p} />
                ))}
              </div>
            </section>

            {/* Secretaries */}
            {current.secretaries.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold text-center mb-8">
                  Gymkhana Secretaries
                </h2>
                <div className="flex flex-wrap justify-center gap-10">
                  {current.secretaries.map((p) => (
                    <PersonCard key={p.name} person={p} />
                  ))}
                </div>
              </section>
            )}

            {/* Representatives */}
            {current.reps.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-center mb-8">
                  Gymkhana Representatives
                </h2>
                <div className="flex flex-wrap justify-center gap-10">
                  {current.reps.map((p) => (
                    <PersonCard key={p.name} person={p} />
                  ))}
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
