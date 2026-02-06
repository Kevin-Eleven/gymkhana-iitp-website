'use client';

import { ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          {/* Heading */}
          <h2 className="mb-3 text-left text-3xl font-bold text-gray-900 sm:text-4xl">
            About Us
          </h2>

          {/* Divider */}
          <div className="mb-8 h-0.5 w-24 bg-gray-300"></div>

          {/* Content */}
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
            The Students&apos; Gymkhana at IIT Patna is a dynamic council that leads
            the charge in promoting leadership, talent, and co-curricular
            activities among students. With elected representatives from each
            hostel, the Gymkhana coordinates various events and activities to
            bring out the best in every student.
            <br />
            <br />
            Sports and cultural events are a cornerstone of campus life, and the
            Gymkhana is at the forefront of organizing inter-hostel and
            inter-department competitions that foster healthy competition,
            relaxation, and camaraderie. The blending of different cultures adds
            a unique character to the cultural events organized throughout the
            year.
            <br />
            <br />
            To make learning enjoyable, the Gymkhana organizes workshops,
            seminars, and technical activities. Clubs and groups come together
            to host major fests such as <strong>ANWESHA</strong>,{' '}
            <strong>INFINITO</strong>, <strong>CELESTA</strong>, and{' '}
            <strong>REVERBERANCE</strong>, which stand as a testament to student
            creativity and talent.
            <br />
            <br />
            In short, the Students&apos; Gymkhana of IIT Patna plays a vital role
            in shaping holistic development and nurturing a vibrant, inclusive
            community of future leaders.
          </p>

          {/* CTA */}
          <a
            href="https://linktr.ee/gymkhana.iitp"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full border-2 border-gray-900 px-7 py-3 text-sm font-medium text-gray-900 transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white sm:text-base"
          >
            Explore More
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
