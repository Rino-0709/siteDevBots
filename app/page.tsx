import Background from "@/components/Background";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Pricing from "@/components/Pricing";
import Consultation from "@/components/Consultation";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import WhyMe from "@/components/WhyMe";
import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Cases />
        <Pricing />
        <Consultation />
        <Process />
        <TechStack />
        <WhyMe />
        <Calculator />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
