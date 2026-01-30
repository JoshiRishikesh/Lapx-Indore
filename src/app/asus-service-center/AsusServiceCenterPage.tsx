"use client";

import AsusCarousel from "@/components/AsusCarousel";
import BrandHeader from "@/components/BrandHeader";
import { useBrandTheme } from "@/context/BrandThemeContext";
import BrandPromo from '@/components/BrandPromo';
import React from "react";

// Icons
import {
  MdPrecisionManufacturing,
  MdDisplaySettings,
  MdMemory,
  MdSpeed,
} from "react-icons/md";
import {
  FaGamepad,
  FaBatteryFull,
  FaTools,
  FaWhatsapp,
  FaPhoneAlt,
  FaCheckCircle,
  FaUserCog,
} from "react-icons/fa";

// Helper to create themed icons
const getThemedIcon = (IconComponent: React.ElementType, color: string) => (
  <IconComponent style={{ color }} className="text-5xl" />
);

const AsusServiceCenterPage: React.FC = () => {
  const theme = useBrandTheme();

  const asusServices = [
    {
      icon: getThemedIcon(MdPrecisionManufacturing, theme.icon),
      title: "Expert Motherboard Repair",
      description:
        "Component-level repair for all ASUS motherboards, including liquid damage, IC replacement & short-circuit fixes.",
    },
    {
      icon: getThemedIcon(FaGamepad, theme.icon),
      title: "ASUS Gaming Laptop Care (ROG / TUF)",
      description:
        "Specialized cooling, performance optimization & deep cleaning for ROG and TUF gaming laptops.",
    },
    {
      icon: getThemedIcon(MdDisplaySettings, theme.icon),
      title: "Screen & Display Replacement",
      description:
        "Premium display replacement for ZenBook, ROG, and TUF — including touchscreen & high-refresh panels.",
    },
    {
      icon: getThemedIcon(FaBatteryFull, theme.icon),
      title: "Battery & Keyboard Replacement",
      description:
        "Original ASUS batteries, keyboards & trackpads ensuring reliable long-term performance.",
    },
    {
      icon: getThemedIcon(FaTools, theme.icon),
      title: "Heating Fix & Fan Repair",
      description:
        "Fix overheating, loud fans, and performance drops with complete cooling system restoration.",
    },
    {
      icon: getThemedIcon(MdMemory, theme.icon),
      title: "SSD & RAM Upgrades",
      description:
        "Boost your ASUS laptop performance with professional SSD & RAM upgrades.",
    },
  ];

  return (
    <div className="bg-linear-to-b from-gray-50 to-white">

      {/* HEADER */}
      <BrandHeader
        logo="/logos/asus-logo.webp"
        brandName="ASUS"
        tagline="Certified ASUS Service Center In Indore"
      />

      {/* CAROUSEL */}
      <AsusCarousel />

      {/* PROMO SECTION */}
      <BrandPromo
        imageSrc="/brand/asus/homepage.avif"
        brandName="Asus"
      />

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold uppercase tracking-widest text-gray-900">
              Our Specialized ASUS Repair Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {asusServices.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-white py-16 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">

          <div className="mb-6 lg:mb-0">
            <h3 className="text-3xl font-orbitron font-bold text-gray-900">
              Ready for Expert ASUS Care?
            </h3>
            <p className="text-lg text-gray-600">
              Fast diagnosis. Genuine quality repair. Trusted experts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:09111000757"
              style={{ backgroundColor: theme.primary }}
              className="hover:opacity-80 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center gap-2"
            >
              <FaPhoneAlt size={20} /> Call Now: 091110 00757
            </a>

            <a
              href="https://wa.me/919111000757"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center gap-2"
            >
              <FaWhatsapp size={20} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-orbitron font-bold uppercase tracking-widest text-gray-900 mb-12">
            Why Choose Our ASUS Service Center?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <FaCheckCircle style={{ color: theme.icon }} className="text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Parts Promise</h3>
              <p className="text-gray-600">
                High-grade, original ASUS parts ensuring long-lasting performance.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <MdSpeed style={{ color: theme.icon }} className="text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Repair</h3>
              <p className="text-gray-600">
                Fast replacement for screens, keyboards, batteries &amp; essential parts.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <FaUserCog style={{ color: theme.icon }} className="text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Technicians</h3>
              <p className="text-gray-600">
                Specialized experts trained in ASUS motherboard architecture.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AsusServiceCenterPage;
