"use client";

import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import MicroResorts from "@/components/MicroResorts";
import Renovations from "@/components/Renovations";
import Hospitality from "@/components/Hospitality";
import RealEstate from "@/components/RealEstate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Pillars />
      <MicroResorts />
      <Renovations />
      <Hospitality />
      <RealEstate />
      <Contact />
      <Footer />
    </main>
  );
}
