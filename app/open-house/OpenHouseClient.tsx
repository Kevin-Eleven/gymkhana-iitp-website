'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function OpenHouseClient() {
  return (
    <main className="text-black min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0261a8]">
        <div className="max-w-7xl mx-auto flex items-center gap-6 px-6 py-3">
          <a href="https://www.iitp.ac.in">
            <img
              src="/images/logo.png"
              alt="IIT Patna Logo"
              className="h-14 bg-white p-1 rounded"
            />
          </a>

          <div className="flex-1 text-center text-white">
            <a
              href="https://www.iitp.ac.in"
              className="no-underline text-white"
            >
              <div className="text-xl font-semibold">
                Indian Institute of Technology Patna
              </div>
              <div className="text-sm">
                भारतीय प्रौद्योगिकी संस्थान, पटना
              </div>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-[380px] flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: 'url(/images/gymkhana-building.jfif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Indian Institute of Technology Patna
          </h1>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-center mb-10"
        >
          For JEE (Advanced) 2023 Qualified Candidates
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-[#0261a8] mb-4"
        >
          Tuesday 20 June 2023 · 10:30 AM · Online Mode
        </motion.h3>

        <p className="text-gray-700 leading-relaxed text-lg">
          Join us for our virtual Open House event to learn more about IIT Patna,
          our academic programs, campus life, and opportunities. Interact with
          faculty members, current students, and the admissions team to get your
          questions answered.
        </p>

        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-[#f4f7fe] rounded-xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4">
            What to Expect
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Overview of academic programs and departments</li>
            <li>Campus facilities and infrastructure tour</li>
            <li>Student life and extracurricular activities</li>
            <li>Placement opportunities and career support</li>
            <li>Live Q&amp;A with faculty and students</li>
          </ul>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.iitp.ac.in"
            className="inline-flex items-center gap-2 bg-[#0261a8] text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-[#014f89] transition"
          >
            Learn More about IIT Patna
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Quick Links
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Admissions',
                text:
                  'Information about admission process, eligibility, and important dates.',
                link: 'https://www.iitp.ac.in',
              },
              {
                title: 'Departments',
                text:
                  'Explore our world-class departments and academic offerings.',
                link: 'https://www.iitp.ac.in',
              },
              {
                title: 'Campus Life',
                text:
                  'Discover student activities, clubs, and vibrant campus culture.',
                link: 'https://www.iitp.ac.in/gymkhana/',
              },
            ].map((item) => (
              <motion.a
                key={item.title}
                href={item.link}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {item.text}
                </p>
                <span className="text-[#0261a8] font-medium inline-flex items-center gap-1">
                  Learn More <ArrowRight size={16} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
