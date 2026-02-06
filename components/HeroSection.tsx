'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        autoPlay
        playsInline
        preload="auto"
      >
        <source src="/images/Drone_Shot.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Students&apos; Gymkhana, IIT Patna
        </h1>

        <p className="mb-8 max-w-4xl text-sm leading-relaxed sm:text-base md:text-lg">
          The Students&apos; Gymkhana of IIT Patna (established in 2008) is the
          governing council of students consisting of the elected student
          representatives working for the overall well-being and holistic
          development of students in the institute.
        </p>

        <Link
          href="#about"
          className="rounded-full border-2 border-white px-8 py-3 text-sm font-medium transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white sm:text-base"
        >
          Know More
        </Link>
      </div>
    </section>
  );
}
