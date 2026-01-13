import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Portofolio from "@/components/Portofolio";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Portofolio />
    <Certificate />
    <Contact />
    <Footer />
    </main>
  );
}
