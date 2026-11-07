"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-4xl md:text-5xl font-light tracking-[0.4em] text-gold mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        HŌLUA
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-sm tracking-[0.3em] text-gray-400 uppercase"
      >
        Land · Vision · Legacy
      </motion.p>
    </motion.div>
  );
}
