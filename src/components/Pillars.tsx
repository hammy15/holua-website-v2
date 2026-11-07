"use client";

import Image from "next/image";

const pillars = [
  {
    id: "develop",
    eyebrow: "DEVELOPMENT",
    title: "Develop",
    lead: "We find land others overlook. We see potential where others see obstacles.",
    description: "From entitlement through construction, we navigate the complex journey of transforming raw land into buildable opportunity. Whether it's a lakeside parcel in Idaho or coastal acreage in Hawaii, we understand the process — and we execute it flawlessly.",
    description2: "Our developments prioritize experience over density. Every project begins with a question: what kind of life do we want to create here?",
    image: "/pillars/develop-new.webp",
    tags: ["Land Acquisition", "Entitlement", "Site Planning", "Infrastructure", "Construction Management"],
  },
  {
    id: "renovate",
    eyebrow: "RENOVATION",
    title: "Renovate",
    lead: "Tired properties reborn. Dated becomes desirable. Overlooked becomes unforgettable.",
    description: "We specialize in transforming underperforming properties into high-value assets. From dated beach houses to worn vacation rentals, we see past the surface to the potential within.",
    description2: "Our renovations aren't cosmetic updates — they're complete reimaginations. New floor plans, modern systems, and design that maximizes both livability and return.",
    image: "/pillars/renovate-new.webp",
    tags: ["Full Gut Rehabs", "STR Optimization", "ADU Conversions", "Luxury Upgrades", "Design-Build"],
  },
  {
    id: "rent",
    eyebrow: "HOSPITALITY",
    title: "Rent",
    lead: "Boutique vacation rental management. Where hospitality means something.",
    description: "We don't just manage properties — we curate experiences. Every guest interaction, every detail, every moment is deliberate. From the welcome arrangement to the sunset recommendations, we operate at a level most vacation rentals never reach.",
    description2: "Our rentals on Oahu consistently outperform market averages. Not because we cut corners — because we don't.",
    image: "/pillars/rent-new.webp",
    tags: ["Concierge Service", "Dynamic Pricing", "Premium Staging", "24/7 Guest Support", "Local Partnerships"],
  },
  {
    id: "micro-resorts",
    eyebrow: "THE VISION",
    title: "Micro Resorts",
    lead: "Experience-driven destinations in the world's most unexpected places.",
    description: "Forget cookie-cutter hotels. We're building intimate, curated escapes — each designed to create a specific mood, feeling, and memory. Treehouses in old-growth forests. Geodesic domes under dark desert skies. Floating cabins on mountain lakes.",
    description2: "Seven locations within 150 miles of Boise. One on the North Shore of Oahu. Every one unforgettable.",
    image: "/pillars/micro-resorts.webp",
    tags: ["Treehouses", "Geodesic Domes", "A-Frames", "Floating Cabins", "Beach Bungalows"],
  },
];

export default function Pillars() {
  return (
    <section id="what-we-do" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">What We Do</span>
          <h2
            className="text-4xl md:text-5xl font-light mt-4 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Four Pillars of HŌLUA
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Every venture we pursue serves a single vision: creating extraordinary places where life feels different.
            Whether we&apos;re transforming tired properties, managing luxury rentals, or building micro resorts in
            unexpected locations — the standard is always the same. Remarkable or nothing.
          </p>
        </div>

        {/* Pillars */}
        <div className="space-y-32">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <span className="text-gold text-xs tracking-[0.3em] uppercase">{pillar.eyebrow}</span>
                <h3
                  className="text-3xl md:text-4xl font-light mt-2 mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-xl text-white mb-4">{pillar.lead}</p>
                <p className="text-gray-400 mb-4">{pillar.description}</p>
                <p className="text-gray-400 mb-8">{pillar.description2}</p>
                <div className="flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs tracking-wider text-gold border border-gold/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
