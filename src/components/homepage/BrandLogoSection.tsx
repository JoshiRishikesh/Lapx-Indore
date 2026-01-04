"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- BrandLogoCard Component ---
interface BrandLogoCardProps {
  logo: { name: string; src: string; alt: string; glow: string };
}

const BrandLogoCard: React.FC<BrandLogoCardProps> = ({ logo }) => (
  <motion.div
    whileHover={{ scale: 1.07, y: -6 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    className="relative bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_0_25px_${logo.glow}] transition-all flex items-center justify-center p-6 w-36 h-24 sm:w-44 sm:h-28 group overflow-hidden"
  >
    {/* Floating Glow Behind Logo */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300"
      style={{ background: logo.glow }}
    ></div>

    <div className="relative w-full h-full">
      <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
    </div>
  </motion.div>
);

// ------------------------------------

const logos = [
  {
    name: "ASUS",
    src: "/logos/asus-logo.webp",
    alt: "ASUS Laptop Repair Service in Vijay Nagar Indore",
    glow: "rgba(0,122,255,0.6)",
  },
  {
    name: "HP",
    src: "/logos/hp-logo.webp",
    alt: "HP Laptop Repair Service in Vijay Nagar Indore",
    glow: "rgba(0,112,243,0.6)",
  },
  {
    name: "DELL",
    src: "/logos/dell-logo.webp",
    alt: "Dell Laptop Repair Service in Vijay Nagar Indore",
    glow: "rgba(0,153,255,0.6)",
  },
  {
    name: "LENOVO",
    src: "/logos/lenovo-logo.webp",
    alt: "Lenovo Laptop Repair Service in Vijay Nagar Indore",
    glow: "rgba(255,0,61,0.55)",
  },
];

const BrandLogoSection: React.FC = () => {
  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold tracking-widest uppercase text-gray-900 drop-shadow-sm">
            Trusted Laptop Repair Service for Leading Brands in Vijay Nagar, Indore
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-3">
            Premium care. Certified technicians. Genuine parts.
          </p>
          <p className="text-gray-400 text-xs md:text-sm mt-2">
            Serving Vijay Nagar and nearby areas of Indore with brand-certified laptop repair.
          </p>
        </motion.div>

        {/* BRAND GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-14 place-items-center"
        >
          {logos.map((logo) => (
            <BrandLogoCard key={logo.name} logo={logo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandLogoSection;
