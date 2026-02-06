'use client';

import ClubsCarousel from './ClubsCarousel';
import { societies, stcClubs, hoscaClubs } from './clubs.data';

export default function ClubsSection() {
  return (
    <section id="clubs" className="py-16 bg-gray-50">
      <ClubsCarousel section={societies} />
      <ClubsCarousel section={stcClubs} />
      <ClubsCarousel section={hoscaClubs} />
    </section>
  );
}
