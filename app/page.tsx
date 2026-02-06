import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ClubsSection from '@/components/clubs/ClubsSection';
import EventsSection from '@/components/EventsSection';

export default function Home() {
  return (
    <main id="main" style={{ backgroundColor: '#f9f9f9' , color: '#333'}}>
      <HeroSection />
      <AboutSection />
      <ClubsSection />
      <EventsSection />
    </main>
  );
}
