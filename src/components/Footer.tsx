"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <Image
            src="/logo.png"
            alt="HŌLUA GROUP"
            fill
            className="object-contain"
          />
        </div>
        
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-8">
          Land · Vision · Legacy
        </p>
        
        <a
          href="mailto:hello@holuagroup.com"
          className="text-gray-400 hover:text-gold transition-colors"
        >
          hello@holuagroup.com
        </a>
        
        <p className="text-gray-600 text-sm mt-12">
          © {new Date().getFullYear()} Hōlua Group LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
