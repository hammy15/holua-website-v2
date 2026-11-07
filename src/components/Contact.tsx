"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const options = [
  { title: "Invest in Micro Resort Development", description: "Join us in building the next generation of experiential hospitality" },
  { title: "Partner on Land Acquisition", description: "We find the opportunities — you provide the capital — we split the upside" },
  { title: "Hire Us to Transform Your Property", description: "Full-service renovation that maximizes value and return" },
  { title: "List Your Vacation Home With Us", description: "Boutique management that treats your property like our own" },
  { title: "Real Estate Advisory", description: "Strategic guidance for buying, selling, or developing property in Hawaii or Idaho" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Supabase
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section id="partner-with-us" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Partner With Us</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Let's Build Something Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you're looking to invest in our vision, need help bringing your own property dreams to life, or want us to manage your vacation rental — we'd like to hear from you.
          </p>
          <p className="text-gray-500 mt-4">
            This isn't a pitch deck conversation. It's a real conversation about what's possible.
          </p>
        </motion.div>

        {/* Options */}
        <div className="space-y-4 mb-16">
          {options.map((option, i) => (
            <motion.button
              key={option.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setFormData({ ...formData, interest: option.title })}
              className={`w-full text-left p-6 rounded-lg border transition-all ${
                formData.interest === option.title
                  ? "border-gold bg-gold/10"
                  : "border-gray-800 hover:border-gray-700 bg-gray-900/30"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-gold mt-1">→</span>
                <div>
                  <h4 className="text-white font-medium">{option.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{option.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Form */}
        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Tell us about your project or how we can help..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 bg-gold text-black font-medium tracking-wider uppercase rounded-lg hover:bg-gold-light transition-colors"
            >
              Start the Conversation
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 bg-gray-900/50 rounded-lg border border-gold/30"
          >
            <span className="text-gold text-4xl">✓</span>
            <h3 className="text-2xl font-light mt-4 mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Message Received
            </h3>
            <p className="text-gray-400">We'll be in touch within 24 hours.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
