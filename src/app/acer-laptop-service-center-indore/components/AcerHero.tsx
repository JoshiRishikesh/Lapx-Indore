"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function AcerHero() {
  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-6xl font-extrabold mb-6">
            Acer Laptop Service Center in <span className="text-[#1e56a0]">Indore</span>
          </motion.h1>

          <p className="text-lg text-slate-600 mb-6">
            Professional <strong>Acer laptop repair in Indore</strong> with expert technicians.
            We provide <strong>post-warranty support</strong> for Aspire, Nitro, Swift & Predator series.
          </p>

          <div className="flex gap-4 mb-6">
            <Link href="tel:9111000757" className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold">
              Call Now <FaPhoneAlt />
            </Link>

            <Link href="https://wa.me/9111000757" className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold">
              <FaWhatsapp /> WhatsApp
            </Link>
          </div>

          <p className="font-bold text-lg">
            Laptop Servicing just <span className="text-orange-500">₹199*</span>
          </p>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <FaMapMarkerAlt /> Visit Us
          </h3>

          <p className="text-sm mb-4">
            Lower Ground Floor, LG-39, Orbit Mall, Vijay Nagar, Indore, MP 452010
          </p>

          <p className="text-sm flex items-center gap-2">
            <FaClock /> 10:00 AM - 9:30 PM (Open 7 Days)
          </p>
        </div>

      </div>
    </section>
  );
}