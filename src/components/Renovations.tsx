"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const properties = [
  { address: "55-431 Iosepa St", price: "$974,000", details: "3 bed · 2 bath · 1,891 sqft" },
  { address: "55-060 Naupaka St", price: "$1,600,000", details: "4 bed · 2 bath · Oceanfront" },
  { address: "55-689 Wahinepee St", price: "$2,200,000", details: "7 bed · 4 bath · 3,582 sqft" },
  { address: "55-249 Kamehameha Hwy", price: "$2,475,000", details: "3 bed · 3 bath · Ocean View" },
  { address: "55-311 Kamehameha Hwy", price: "$3,350,000", details: "4 bed · 6 bath · 4,518 sqft" },
];

export default function Renovations() {
  return (
    <section id="renovations" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Transformations</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6" style={{ fontFamily: "var(--font-display)" }}>
            From Dated to Desirable
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We see potential where others see problems. Dated properties with good bones become stunning modern homes. Underperforming rentals become top earners. Every renovation we touch is a complete reimagination — not a surface-level refresh.
          </p>
        </motion.div>

        {/* Before/After Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden group"
          >
            <Image
              src="/reno/exterior.webp"
              alt="Exterior Transformation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-xl font-light mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Complete Exterior Transformation
              </h4>
              <p className="text-gray-400">1970s beach house → Modern tropical luxury</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden group"
          >
            <Image
              src="/reno/interior.webp"
              alt="Interior Transformation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-xl font-light mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Interior Reimagination
              </h4>
              <p className="text-gray-400">Dark & dated → Bright & contemporary</p>
            </div>
          </motion.div>
        </div>

        {/* Laie Properties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-light text-center mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Current Opportunities in Laie, Hawaii
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {properties.map((prop, i) => (
              <motion.div
                key={prop.address}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gold/50 transition-colors"
              >
                <div className="relative aspect-square bg-gray-800 rounded mb-3 overflow-hidden">
                  <Image
                    src={`/properties/prop-${i + 1}.webp`}
                    alt={prop.address}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <p className="text-white font-medium text-sm">{prop.address}</p>
                <p className="text-gold text-lg">{prop.price}</p>
                <p className="text-gray-500 text-xs">{prop.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
