"use client";

import Image from "next/image";

const resorts = [
  {
    id: "canopy",
    name: "The Canopy",
    location: "MCCALL, IDAHO · PAYETTE NATIONAL FOREST",
    description: "Elevated A-frame treehouses connected by timber walkways through old-growth pines. Each structure is a private sanctuary 30 feet above the forest floor, with floor-to-ceiling glass and private decks that feel like floating in the clouds.",
    quote: "Wake up to birdsong. Fall asleep to the silence of ancient trees. Remember what stillness feels like.",
    image: "/resorts/canopy-hero.webp",
    amenities: ["Private Treehouse Suites", "Forest Spa & Sauna", "Payette Lake Access", "Guided Forest Walks", "Farm-to-Canopy Dining", "Stargazing Platform"],
  },
  {
    id: "stillwater",
    name: "Stillwater",
    location: "CASCADE, IDAHO · CASCADE RESERVOIR",
    description: "Floating tiny homes on crystal mountain water. The Sawtooths reflected in every window. Each cabin drifts gently at anchor, creating a sensation of absolute peace that no land-based structure can replicate.",
    quote: "Days measured by sunsets. Silence you can feel. The world reduced to water, sky, and you.",
    image: "/resorts/stillwater-hero.webp",
    amenities: ["Floating Cabins", "Private Kayaks & SUPs", "Dock-Side Dining", "Fishing Excursions", "Mountain View Deck", "Hot Tub Barge"],
  },
  {
    id: "redhorizon",
    name: "Red Horizon",
    location: "OWYHEE DESERT, IDAHO · DARK SKY TERRITORY",
    description: "Geodesic domes on ancient red rock, positioned where light pollution doesn't exist for 100 miles in any direction. Transparent ceiling panels let you watch the Milky Way from your bed — not as a metaphor, as reality.",
    quote: "The universe isn't somewhere far away. It's right there. Above you. Around you. Part of you.",
    image: "/resorts/redhorizon-hero.webp",
    amenities: ["Panoramic Star Domes", "Natural Hot Springs", "Professional Telescope", "Desert Meditation", "Night Sky Tours", "Off-Grid Luxury"],
  },
  {
    id: "snowline",
    name: "Snowline",
    location: "SUN VALLEY CORRIDOR, IDAHO · SAWTOOTH RANGE",
    description: "Modern alpine chalets perched on powder. Glass walls frame mountains that stretch to infinity. Ski-in, ski-out access means the slopes are an extension of your living room — not a destination you drive to.",
    quote: "The mountain doesn't care about your schedule. It teaches you to slow down. To notice. To breathe.",
    image: "/resorts/snowline-hero.webp",
    amenities: ["Glass A-Frame Chalets", "Ski-In/Ski-Out", "Alpine Spa", "Private Chef Available", "Backcountry Tours", "Fireside Lounge"],
  },
  {
    id: "kai",
    name: "Kai",
    location: "NORTH SHORE, OAHU · LAIE POINT",
    description: "Elevated bungalows where the Pacific meets the palms. The legendary waves of the North Shore at your feet. Each structure is positioned for maximum ocean view and designed for the indoor-outdoor living that Hawaii does better than anywhere.",
    quote: "Hawaii as it was meant to be felt. Before the crowds. Before the rush. Just you, the ocean, and time that moves like water.",
    image: "/resorts/kai-hero.webp",
    amenities: ["Oceanfront Bungalows", "Surf Concierge", "Ocean Spa Treatments", "Farm-to-Table Dining", "Cultural Experiences", "Private Beach Access"],
  },
];

export default function MicroResorts() {
  return (
    <section id="micro-resorts" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Micro Resorts</span>
          <h2
            className="text-4xl md:text-5xl font-light mt-4 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Destinations That Move You
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Each location is chosen for what it makes you <em className="text-white">feel</em>. The architecture, the
            amenities, the experience — all deliberately designed to transport you somewhere extraordinary.
          </p>
          <p className="text-gray-500 mt-4">This isn&apos;t hospitality. It&apos;s transformation.</p>
        </div>

        {/* Resorts Grid */}
        <div className="space-y-24">
          {resorts.map((resort, index) => (
            <div
              key={resort.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Main Image */}
              <div className="lg:w-3/5">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                  <Image
                    src={resort.image}
                    alt={resort.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/5">
                <span className="text-gold text-xs tracking-[0.2em]">{resort.location}</span>
                <h3
                  className="text-3xl md:text-4xl font-light mt-2 mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {resort.name}
                </h3>
                <p className="text-gray-300 mb-4">{resort.description}</p>
                <p className="text-gray-500 italic mb-6">&quot;{resort.quote}&quot;</p>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-2">
                  {resort.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-gold">◆</span>
                      {amenity}
                    </div>
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
