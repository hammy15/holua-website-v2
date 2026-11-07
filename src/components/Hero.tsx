"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt="Luxury micro resort at night"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="HŌLUA GROUP"
              fill
              priority
              className="object-contain"
            />
          </div>
          
          <ul className="hidden md:flex items-center gap-8 text-sm tracking-wider">
            {["What We Do", "Micro Resorts", "Renovations", "Hospitality", "Real Estate", "Partner With Us"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-white/80 hover:text-gold transition-colors duration-300"
                >
                  {item.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          We don&apos;t build properties.
          <br />
          <span className="text-gold">We build experiences.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12"
        >
          Development. Renovation. Hospitality. Micro Resorts. From raw land to unforgettable destinations — we create places people remember forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            href="#what-we-do"
            className="group flex flex-col items-center gap-2 text-gold hover:text-gold-light transition-colors"
          >
            <span className="text-sm tracking-[0.3em] uppercase">Explore</span>
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
