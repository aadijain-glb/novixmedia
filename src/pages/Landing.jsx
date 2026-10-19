import CursorGlow from "../components/CursorGlow";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Brands from "../components/Brands";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <main className="relative bg-ink-900 text-white min-h-screen overflow-hidden">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Brands />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}