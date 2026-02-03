"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactCTASection() {
  return (
    <section className="py-20 bg-linear-to-b from-gray-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 text-center"
      >
        {/* UPDATED H2 */}
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold tracking-[0.18em] uppercase">
          Visit Our Premium Laptop Repair Service Center in Vijay Nagar, Indore
        </h2>

        {/* Address */}
        <p className="mt-4 text-lg text-gray-300">
          Lower Ground Floor, LG-31, Orbit Mall, Vijay Nagar, Indore — Open Daily 10:00 AM – 9:30 PM
        </p>

        {/* Optional service reinforcement */}
        <p className="mt-2 text-gray-400 text-base">
          We specialize in ASUS, HP, Dell, and Lenovo laptop repairs with genuine parts and certified technicians.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
          <motion.a
            href="tel:09111000757"
            whileHover={{ scale: 1.06 }}
            className="bg-sky-600 hover:bg-sky-700 text-white px-10 py-4 rounded-xl flex items-center gap-3 text-lg shadow-xl transition"
          >
            <FaPhoneAlt size={20} /> Call Now: 091110 00757
          </motion.a>

          <motion.a
            href="https://wa.me/919111000757"
            target="_blank"
            whileHover={{ scale: 1.06 }}
            className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl flex items-center gap-3 text-lg shadow-xl transition"
          >
            <FaWhatsapp size={22} /> Chat on WhatsApp
          </motion.a>
        </div>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.08 }}
          className="mt-10 inline-block bg-yellow-400 text-black font-bold py-4 px-12 rounded-full shadow-2xl text-lg hover:bg-yellow-500 transition"
        >
          Get Directions &amp; Full Hours
        </motion.a>
      </motion.div>
    </section>
  );
}
