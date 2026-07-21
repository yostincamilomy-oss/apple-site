import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyBuyWithUs from "@/components/WhyBuyWithUs";
import AppleEcosystem from "@/components/AppleEcosystem";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="inicio">
        <Hero />
        <FeaturedProducts />
        <WhyBuyWithUs />
        <AppleEcosystem />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
