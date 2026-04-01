'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Cpu } from 'lucide-react';

interface Dev {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const advisory: Dev[] = [
  {
    name: 'Akhand Singh',
    role: "General Secretary, Technical '25",
    image: '/images/dev/Akhand Singh.jpg',
  },
  {
    name: 'Shivank Goyal',
    role: "Junior Year Secretary, Technical '25",
    image: '/images/dev/Shivank_Goyal.jpeg',
  },
];

const developers: Dev[] = [
  {
    name: 'Abhay Rajput',
    role: 'Developer',
    image: '/images/dev/Abhay_Rajput.jpeg',
    github: 'https://github.com/AbhayRajput47/',
    linkedin: 'https://www.linkedin.com/in/abhay-rajput-247a81298/',
    email: 'abhay_2301ec47@iitp.ac.in',
  },
  {
    name: 'Haris Ahmad',
    role: 'Developer',
    image: '/images/dev/Haris_Ahmad.jpeg',
    github: 'https://github.com/Kevin-Eleven',


  },
];


const CODE_SNIPPETS = [
  'git commit -m "feat: launch"',
  'npm run build',
  'const team = ["Abhay", "Haris"];',
  '200 OK',
  'useEffect(() => { ... }, [])',
  'export default function App()',
  'tailwind.config.js',
  'git push origin main',
  'SELECT * FROM gymkhana;',
  'docker-compose up',
];

function FloatingCode() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {CODE_SNIPPETS.map((snippet, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-xs text-gray-300 whitespace-nowrap select-none"
          style={{
            top: `${8 + (i * 9) % 85}%`,
            left: `${(i * 13 + 5) % 90}%`,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.18, 0.38, 0.18],
          }}
          transition={{
            duration: 4 + (i % 4),
            delay: i * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {snippet}
        </motion.span>
      ))}
    </div>
  );
}

/* ── Typing cursor blink ── */
function BlinkingCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="inline-block w-[3px] h-8 bg-emerald-600 ml-1 align-middle"
    />
  );
}

/* ── Card component ── */
function DevCard({ dev, index, showLinks }: { dev: Dev; index: number; showLinks: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative w-64"
    >
    
      <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-[#6b7fc6] to-[#2a3f85] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

      <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <div className="overflow-hidden">
          <motion.img
            src={dev.image}
            alt={dev.name}
            className="w-full h-72 object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Info */}
        <div className="p-5 text-center">
          <h3 className="text-base font-bold text-gray-900">{dev.name}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{dev.role}</p>

          {/* Green divider line */}
          <motion.div
            className="h-0.5 bg-emerald-500 mx-auto mt-3"
            initial={{ width: 0 }}
            animate={inView ? { width: '40%' } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
          />
        </div>

        {/* Hover overlay with links */}
        {showLinks && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
            <div className="flex gap-5">
              {dev.github && (
                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                >
                  <Github size={18} />
                </motion.a>
              )}
              {dev.linkedin && (
                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </motion.a>
              )}
              {dev.email && (
                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  href={`mailto:${dev.email}`}
                  className="p-3 rounded-full border-2 border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                </motion.a>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Section heading (mirrors app style) ── */
function SectionHeading({ label, icon }: { label: string; icon: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-emerald-600">{icon}</span>
        <h2 className="text-3xl font-bold text-gray-900">{label}</h2>
      </div>
      <div className="h-0.5 w-24 bg-gray-300" />
    </motion.div>
  );
}

export default function DevelopersClient() {
  const [typed, setTyped] = useState('');
  const fullText = 'Team Behind the Project';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#f9f9f9] text-gray-800 pt-24">

      {/* ── Hero banner (matches HeroSection video overlay style) ── */}
      <section className="relative bg-gray-900 overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Floating code snippets */}
        <FloatingCode />

        {/* Green accent orb */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute right-[-80px] top-[-80px] w-[360px] h-[360px] rounded-full bg-emerald-500 blur-[100px]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge — matches Navbar emerald accent */}
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-emerald-500/40 text-emerald-400 text-xs font-semibold tracking-widest uppercase bg-emerald-500/10">
              IIT Patna Gymkhana
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight min-h-[1.2em]">
              {typed}
              {typed.length < fullText.length && <BlinkingCursor />}
            </h1>


            {/* CTA — same rounded-full border style as HeroSection / AboutSection */}
            <motion.a
              href="#developers"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              className="mt-8 inline-block rounded-full border-2 border-white px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
            >
              Meet the Team
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Content sections — white/gray like rest of app ── */}
      <div id="developers" className="max-w-7xl mx-auto px-6 py-20 space-y-20">

        {/* Advisory */}
        <section>
          <SectionHeading label="Advisory Team" icon={<Cpu size={22} />} />
          <div className="flex flex-wrap justify-center gap-10">
            {advisory.map((dev, i) => (
              <DevCard key={i} dev={dev} index={i} showLinks={false} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Developers */}
        <section>
          <SectionHeading label="Developers" icon={<Code2 size={22} />} />
          <div className="flex flex-wrap justify-center gap-10">
            {developers.map((dev, i) => (
              <DevCard key={i} dev={dev} index={i} showLinks={true} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}