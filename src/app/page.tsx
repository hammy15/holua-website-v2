"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import MicroResorts from "@/components/MicroResorts";
import Renovations from "@/components/Renovations";
import Hospitality from "@/components/Hospitality";
import RealEstate from "@/components/RealEstate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Splash from "@/components/Splash";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Hero />
        <Pillars />
        <MicroResorts />
        <Renovations />
        <Hospitality />
        <RealEstate />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  );
}
