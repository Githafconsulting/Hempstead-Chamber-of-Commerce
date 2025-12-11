import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutUs from "@/components/AboutUs";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import Testimonials from "@/components/Testimonials";
import UpcomingEvents from "@/components/UpcomingEvents";
import NewsUpdates from "@/components/NewsUpdates";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <AboutUs />
      <FeaturedBusinesses />
      <Testimonials />
      <UpcomingEvents />
      <NewsUpdates />
      <CTABanner />
    </main>
  );
}
