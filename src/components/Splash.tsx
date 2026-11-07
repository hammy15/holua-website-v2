"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-40 h-40 mb-8"
      >
        <Image
          src="/logo.png"
          alt="HŌLUA"
          fill
          priority
          className="object-contain"
        />
      </motion.div>
      
      <h1
        className="text-4xl md:text-5xl font-light tracking-[0.4em] text-gold mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        HŌLUA
      </h1>
      
      <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
        Land · Vision · Legacy
      </p>
    </motion.div>
  );
}
