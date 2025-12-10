import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutAndBenefits from "@/components/AboutAndBenefits";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import TestimonialsAndEvents from "@/components/TestimonialsAndEvents";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <AboutAndBenefits />
      <FeaturedBusinesses />
      <TestimonialsAndEvents />
      <CTABanner />
    </main>
  );
}
