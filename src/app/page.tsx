import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandsWeUse from "@/components/BrandsWeUse";
import Services from "@/components/Services";
import Transformations from "@/components/Transformations";
import PriceList from "@/components/PriceList";
import VipMembership from "@/components/VipMembership";
import StudentOffers from "@/components/StudentOffers";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import QuickActions from "@/components/QuickActions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BrandsWeUse />
        <Services />
        <Transformations />
        <PriceList />
        <VipMembership />
        <StudentOffers />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <About />
        <Location />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <QuickActions />
    </>
  );
}
