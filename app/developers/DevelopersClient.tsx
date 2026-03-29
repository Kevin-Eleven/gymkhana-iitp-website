'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

interface Dev {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

/* Advisory Members */
const advisory: Dev[] = [
  {
    name: 'Akhand Singh',
    role: "Gensec Tech '25",
    image: '/images/dev/Akhand Singh.jpg',
  },
  {
    name: 'Shivank Goyal',
    role: 'Junior Year Technical Secretary',
    image: '/images/dev/Shivank_Goyal.jpeg',
  },
];

/*  Developers */
const developers: Dev[] = [
  {
    name: 'Abhay Rajput',
    role: 'Full Stack Developer',
    image: '/images/dev/Abhay_Rajput.jpeg',
    github: 'https://github.com/AbhayRajput47/',
    linkedin: 'https://www.linkedin.com/in/abhay-rajput-247a81298/',
    email: 'abhay_2301ec47@iitp.ac.in',
  },
  {
    name: 'Haris Ahmad',
    role: 'Full Stack Developer',
    image: '/images/dev/Haris_Ahmad.jpeg',
    github: 'https://github.com/Kevin-Eleven',
    linkedin: 'https://www.linkedin.com/in/haris-ahmad-iitp/',
    email: 'haris_2301ec11@iitp.ac.in',
  },
];

export default function DevelopersClient() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#020617] text-white pt-24 px-4">
      {/*  Animated Background */}
      <motion.div
        animate={{ x: [0, 100, -100, 0], y: [0, -80, 80, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]"
      />

      <motion.div
        animate={{ x: [0, -120, 120, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"
      />

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.h1
            animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 bg-[length:200%_200%] text-transparent bg-clip-text"
          >
            Team Behind the Project
          </motion.h1>

          <p className="text-gray-400 mt-4 text-lg">
            Crafted with passion by IIT Patna students 🚀
          </p>
        </motion.div>

        {/* Advisory Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Advisory Team
          </h2>

          <div className="flex justify-center gap-12 flex-wrap">

            {advisory.map((dev, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
                className="group relative perspective-[1200px]"
              >

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
                >

                  <div className="overflow-hidden">
                    <motion.img
                      src={dev.image}
                      className="w-full h-[320px] object-cover"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h2 className="text-xl font-semibold">{dev.name}</h2>
                    <p className="text-gray-400 text-sm">{dev.role}</p>
                  </div>

                </motion.div>

              </motion.div>
            ))}

          </div>
        </section>

        {/* Developers Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Developers
          </h2>

          <div className="flex justify-center gap-12 flex-wrap">

            {developers.map((dev, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
                className="group relative perspective-[1200px]"
              >

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
                >

                  <div className="overflow-hidden">
                    <motion.img
                      src={dev.image}
                      className="w-full h-[320px] object-cover"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h2 className="text-xl font-semibold">{dev.name}</h2>
                    <p className="text-gray-400 text-sm">{dev.role}</p>
                  </div>

                  {/* Hover Icons */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div className="flex gap-6 text-white text-xl">

                      {dev.github && (
                        <motion.a whileHover={{ scale: 1.3 }} href={dev.github} target="_blank">
                          <Github />
                        </motion.a>
                      )}

                      {dev.linkedin && (
                        <motion.a whileHover={{ scale: 1.3 }} href={dev.linkedin} target="_blank">
                          <Linkedin />
                        </motion.a>
                      )}

                      {dev.email && (
                        <motion.a whileHover={{ scale: 1.3 }} href={`mailto:${dev.email}`}>
                          <Mail />
                        </motion.a>
                      )}

                    </div>
                  </div>

                </motion.div>

              </motion.div>
            ))}

          </div>
          <br />
        </section>

      </div>
    </main>
  );
}