import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Content from "@/components/Content";
import Stats from "@/components/Stats";
import HRPartner from "@/components/HRPartner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Stats />
      <HRPartner />
      <Timeline />
      <Content />
      <Contact />
      <Footer />
    </main>
  );
}
