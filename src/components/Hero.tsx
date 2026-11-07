"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt="Luxury micro resort at night"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="HŌLUA GROUP"
              fill
              className="object-contain"
            />
          </div>
          <ul className="hidden md:flex items-center gap-8 text-sm tracking-wider">
            <li><a className="text-white/80 hover:text-gold transition-colors duration-300" href="#what-we-do">WHAT WE DO</a></li>
            <li><a className="text-white/80 hover:text-gold transition-colors duration-300" href="#micro-resorts">MICRO RESORTS</a></li>
            <li><a className="text-white/80 hover:text-gold transition-colors duration-300" href="#renovations">RENOVATIONS</a></li>
            <li><a className="text-white/80 hover:text-gold transition-colors duration-300" href="#hospitality">HOSPITALITY</a></li>
            <li><a className="text-white/80 hover:text-gold transition-colors duration-300" href="#real-estate">REAL ESTATE</a></li>
            <li><a className="text-white/80 hover:text-gold transition-colors duration-300" href="#partner-with-us">PARTNER WITH US</a></li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 animate-fade-in"
          style={{ fontFamily: "var(--font-display)" }}
        >
          We don&apos;t build properties.<br />
          <span className="text-gold">We build experiences.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 animate-fade-in-delay">
          Development. Renovation. Hospitality. Micro Resorts. From raw land to unforgettable destinations — we create places people remember forever.
        </p>

        <a
          className="group flex flex-col items-center gap-2 text-gold hover:text-gold-light transition-colors animate-fade-in-delay-2"
          href="#what-we-do"
        >
          <span className="text-sm tracking-[0.3em] uppercase">Explore</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
