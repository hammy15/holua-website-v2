"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Buy",
    description: "Strategic acquisition support. We help you find properties others miss, negotiate deals that make sense, and avoid pitfalls that sink investments.",
  },
  {
    title: "Build",
    description: "From entitlement to construction, we guide you through the development process. Whether it's an ADU or a multi-unit project, we've done it.",
  },
  {
    title: "Rent",
    description: "Turn your property into a performing asset. Our management services handle everything — you collect returns without the headaches.",
  },
];

export default function RealEstate() {
  return (
    <section id="real-estate" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <Image
              src="/partnership.webp"
              alt="Partnership"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Real Estate Services</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Your Partner at Every Step
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              Whether you're buying your first investment property, building your portfolio, or managing existing assets — we're with you. Not as agents looking for a commission, but as partners invested in your success.
            </p>

            <div className="space-y-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="border-l-2 border-gold/30 pl-6"
                >
                  <h3 className="text-2xl font-light text-gold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
