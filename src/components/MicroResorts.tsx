"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const resorts = [
  {
    id: "canopy",
    name: "The Canopy",
    location: "MCCALL, IDAHO · PAYETTE NATIONAL FOREST",
    description: "Elevated A-frame treehouses connected by timber walkways through old-growth pines. Each structure is a private sanctuary 30 feet above the forest floor, with floor-to-ceiling glass and private decks that feel like floating in the clouds.",
    quote: "Wake up to birdsong. Fall asleep to the silence of ancient trees. Remember what stillness feels like.",
    amenities: ["Private Treehouse Suites", "Forest Spa & Sauna", "Payette Lake Access", "Guided Forest Walks", "Farm-to-Canopy Dining", "Stargazing Platform"],
    images: ["/resorts/canopy-1.webp", "/resorts/canopy-2.webp", "/resorts/canopy-3.webp"],
  },
  {
    id: "stillwater",
    name: "Stillwater",
    location: "CASCADE, IDAHO · CASCADE RESERVOIR",
    description: "Floating tiny homes on crystal mountain water. The Sawtooths reflected in every window. Each cabin drifts gently at anchor, creating a sensation of absolute peace that no land-based structure can replicate.",
    quote: "Days measured by sunsets. Silence you can feel. The world reduced to water, sky, and you.",
    amenities: ["Floating Cabins", "Private Kayaks & SUPs", "Dock-Side Dining", "Fishing Excursions", "Mountain View Deck", "Hot Tub Barge"],
    images: ["/resorts/stillwater-1.webp", "/resorts/stillwater-2.webp", "/resorts/stillwater-3.webp"],
  },
  {
    id: "red-horizon",
    name: "Red Horizon",
    location: "OWYHEE DESERT, IDAHO · DARK SKY TERRITORY",
    description: "Geodesic domes on ancient red rock, positioned where light pollution doesn't exist for 100 miles in any direction. Transparent ceiling panels let you watch the Milky Way from your bed — not as a metaphor, as reality.",
    quote: "The universe isn't somewhere far away. It's right there. Above you. Around you. Part of you.",
    amenities: ["Panoramic Star Domes", "Natural Hot Springs", "Professional Telescope", "Desert Meditation", "Night Sky Tours", "Off-Grid Luxury"],
    images: ["/resorts/redhorizon-1.webp", "/resorts/redhorizon-2.webp", "/resorts/redhorizon-3.webp"],
  },
  {
    id: "snowline",
    name: "Snowline",
    location: "SUN VALLEY CORRIDOR, IDAHO · SAWTOOTH RANGE",
    description: "Modern alpine chalets perched on powder. Glass walls frame mountains that stretch to infinity. Ski-in, ski-out access means the slopes are an extension of your living room — not a destination you drive to.",
    quote: "The mountain doesn't care about your schedule. It teaches you to slow down. To notice. To breathe.",
    amenities: ["Glass A-Frame Chalets", "Ski-In/Ski-Out", "Alpine Spa", "Private Chef Available", "Backcountry Tours", "Fireside Lounge"],
    images: ["/resorts/snowline-1.webp", "/resorts/snowline-2.webp", "/resorts/snowline-3.webp"],
  },
  {
    id: "kai",
    name: "Kai",
    location: "NORTH SHORE, OAHU · LAIE POINT",
    description: "Elevated bungalows where the Pacific meets the palms. The legendary waves of the North Shore at your feet. Each structure is positioned for maximum ocean view and designed for the indoor-outdoor living that Hawaii does better than anywhere.",
    quote: "Hawaii as it was meant to be felt. Before the crowds. Before the rush. Just you, the ocean, and time that moves like water.",
    amenities: ["Oceanfront Bungalows", "Surf Concierge", "Ocean Spa Treatments", "Farm-to-Table Dining", "Cultural Experiences", "Private Beach Access"],
    images: ["/resorts/kai-1.webp", "/resorts/kai-2.webp", "/resorts/kai-3.webp"],
  },
];

export default function MicroResorts() {
  return (
    <section id="micro-resorts" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Micro Resorts</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Destinations That Move You
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Each location is chosen for what it makes you <em className="text-white">feel</em>. The architecture, the amenities, the experience — all deliberately designed to transport you somewhere extraordinary.
          </p>
          <p className="text-gold mt-4">This isn't hospitality. It's transformation.</p>
        </motion.div>

        <div className="space-y-32">
          {resorts.map((resort, index) => (
            <motion.div
              key={resort.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Image Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {resort.images.map((img, i) => (
                  <div key={i} className={`relative ${i === 0 ? "col-span-2 row-span-2" : ""} aspect-[4/3] rounded-lg overflow-hidden`}>
                    <Image
                      src={img}
                      alt={`${resort.name} - View ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes={i === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 50vw, 33vw"}
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="max-w-3xl">
                <span className="text-gray-500 text-xs tracking-[0.2em]">{resort.location}</span>
                <h3 className="text-3xl md:text-4xl font-light mt-2 mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  {resort.name}
                </h3>
                <p className="text-gray-300 mb-4">{resort.description}</p>
                <p className="text-gold italic mb-8">"{resort.quote}"</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  {resort.amenities.map((amenity) => (
                    <span key={amenity} className="flex items-center gap-2">
                      <span className="text-gold">◆</span>
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
