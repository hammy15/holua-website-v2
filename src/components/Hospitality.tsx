"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    icon: "◈",
    title: "Concierge-Level Service",
    description: "Personal recommendations, reservation assistance, local experiences curated for each guest's interests.",
  },
  {
    icon: "◎",
    title: "Premium Presentation",
    description: "Professional staging, fresh flowers, welcome baskets with local specialties. First impressions that exceed expectations.",
  },
  {
    icon: "◇",
    title: "24/7 Guest Support",
    description: "Real humans answering real questions, any hour. Problems solved before they become complaints.",
  },
  {
    icon: "◆",
    title: "Optimized Returns",
    description: "Dynamic pricing, strategic marketing, and operational excellence that consistently outperforms market averages.",
  },
];

export default function Hospitality() {
  return (
    <section id="hospitality" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Hospitality</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Where Service Means Something
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              We don't just manage vacation rentals. We create hospitality experiences that guests remember for years.
            </p>
            <p className="text-gray-400 mb-12">
              Every interaction is intentional. Every detail is deliberate. From the moment a guest books to the moment they leave — and the follow-up that brings them back — we operate at a standard most vacation rentals never approach.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-gold text-2xl">{service.icon}</span>
                  <h4 className="text-white font-medium mt-2 mb-2">{service.title}</h4>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-lg overflow-hidden"
          >
            <Image
              src="/hospitality.webp"
              alt="Luxury Hospitality"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
