'use client';

import Hero3D from "@/components/3d/Hero3D";
import Services3D from "@/components/3d/Services3D";
import Portfolio3D from "@/components/3d/Portfolio3D";
import AboutSection from "@/components/AboutSection";
import Contact3D from "@/components/3d/Contact3D";
import FloatingGlassElements from "@/components/FloatingGlassElements";

export default function Home() {
  return (
    <div className="min-h-screen bg-black ultra-smooth-scroll fast-scroll">
      <FloatingGlassElements />
      
      <main>
        <section id="home">
          <Hero3D />
        </section>
        <section id="services">
          <Services3D />
        </section>
        <section id="portfolio">
          <Portfolio3D />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="contact">
          <Contact3D />
        </section>
      </main>
    </div>
  );
}
