'use client';

import { ArrowUpRight } from 'lucide-react';

export default function EventsSection() {
  return (
    <>
      {/* Events Intro */}
      <section id="events" className="bg-white px-6 pt-24 pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            {/* Heading */}
            <h2 className="mb-3 text-left text-3xl font-bold text-gray-900 sm:text-4xl">
              Events at IIT Patna
            </h2>

            {/* Divider */}
            <div className="mb-8 h-0.5 w-28 bg-gray-300"></div>

            {/* Description */}
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              Immerse yourself in the vibrant event culture of IIT Patna.
              From large-scale cultural and technical fests to creative
              showcases and student-led initiatives, these events bring
              together talent, collaboration, and unforgettable experiences.
              Discover exhibitions, connect with like-minded individuals, and
              explore creativity through competitions, workshops, and talks.
            </p>

            {/* CTA */}
            <a
              href="https://linktr.ee/gymkhana.iitp"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full border-2 border-gray-900 px-7 py-3 text-sm font-medium text-gray-900 transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white sm:text-base"
            >
              Explore Our Fests
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Fest Gallery */}
      <section
        id="festgallery"
        className="bg-gray-50 px-4 pb-24 pt-12"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="/gallery/Fests/index.html"
            title="Gallery - Gymkhana IIT Patna"
            className="h-[580px] w-full border-none"
          />
        </div>
      </section>
    </>
  );
}
