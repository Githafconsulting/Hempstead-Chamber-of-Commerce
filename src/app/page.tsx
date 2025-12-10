import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyJoin from "@/components/WhyJoin";
import AboutUs from "@/components/AboutUs";
import OurCommunity from "@/components/OurCommunity";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import Testimonials from "@/components/Testimonials";
import UpcomingEvents from "@/components/UpcomingEvents";
import SupportLocalBusinesses from "@/components/SupportLocalBusinesses";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <WhyJoin />
      <AboutUs />
      <OurCommunity />
      <Testimonials />
      <FeaturedBusinesses />
      <UpcomingEvents />
      <SupportLocalBusinesses />
      <CTABanner />
    </main>
  );
}
