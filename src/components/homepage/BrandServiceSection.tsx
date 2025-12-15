"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const brandServices = [
  { name: "ASUS", href: "/asus-service-center", color: "#004999", logo: "/logos/asus-logo.webp" },
  { name: "HP", href: "/hp-service-center", color: "#0ca2dc", logo: "/logos/hp-logo.webp" },
  { name: "DELL", href: "/dell-service-center", color: "#0087cb", logo: "/logos/dell-logo.webp" },
  { name: "LENOVO", href: "/lenovo-service-center", color: "#e2221a", logo: "/logos/lenovo-logo.webp" },
];

export default function BrandServiceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-orbitron font-bold uppercase tracking-[0.18em] mb-16 text-gray-900"
        >
          Find Your Brand's Dedicated Service Center
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {brandServices.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={brand.href}
                className="group block p-8 rounded-2xl border backdrop-blur-lg bg-white/60 hover:bg-white/90 transition shadow-xl hover:shadow-2xl hover:-translate-y-2"
                style={{ borderTopWidth: "5px", borderTopColor: brand.color }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 relative">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain transition group-hover:scale-110"
                    />
                  </div>
                  <h3
                    className="text-2xl font-extrabold transition group-hover:tracking-wide"
                    style={{ color: brand.color }}
                  >
                    {brand.name} Service
                  </h3>
                </div>

                <p className="mt-3 text-gray-600">
                  Premium post-warranty repair for all {brand.name} laptops.
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
