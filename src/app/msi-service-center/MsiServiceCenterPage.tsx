"use client";

import BrandHeader from "@/components/BrandHeader";
import { useBrandTheme } from "@/context/BrandThemeContext";
import BrandPromo from '@/components/BrandPromo';
import MSI_Carousel from "@/components/MSI_Carousel"; // Assuming you have an MSI specific carousel
import React from "react";

// Icons
import {
  MdDisplaySettings,
  MdSpeed,
  MdOutlineGppGood,
} from "react-icons/md";
import {
  FaGamepad,
  FaBatteryFull,
  FaTools,
  FaWhatsapp,
  FaPhoneAlt,
  FaUserCog,
  FaMicrochip,
} from "react-icons/fa";

// Helper to create themed icons
const getThemedIcon = (IconComponent: React.ElementType, color: string) => (
  <IconComponent style={{ color }} className="text-5xl" />
);

const MSIServiceCenterPage: React.FC = () => {
  const theme = useBrandTheme();

  const msiServices = [
    {
      icon: getThemedIcon(FaMicrochip, theme.icon),
      title: "MSI Chip-Level Repairing",
      description:
        "Advanced motherboard repair for MSI gaming series. Fixing dead motherboards, GPU reballing, and power IC issues in Vijay Nagar Indore.",
    },
    {
      icon: getThemedIcon(FaGamepad, theme.icon),
      title: "Gaming Laptop Optimization",
      description:
        "Specialized performance tuning for MSI Titan, Raider, Stealth, and Katana series to ensure maximum FPS and stability.",
    },
    {
      icon: getThemedIcon(MdDisplaySettings, theme.icon),
      title: "MSI Screen Replacement",
      description:
        "High-refresh rate (144Hz/240Hz/360Hz) display replacements for MSI gaming laptops using genuine panels.",
    },
    {
      icon: getThemedIcon(FaTools, theme.icon),
      title: "Advanced Thermal Management",
      description:
        "Liquid metal application, high-grade thermal pasting, and fan servicing to eliminate MSI heating issues.",
    },
    {
      icon: getThemedIcon(MdSpeed, theme.icon),
      title: "SSD & Gaming RAM Upgrades",
      description:
        "Professional SSD Upgrade for Laptop Indore. Boost your MSI storage and multitasking with high-speed Gen4 NVMe drives.",
    },
    {
      icon: getThemedIcon(FaBatteryFull, theme.icon),
      title: "Genuine Battery & Keyboard",
      description:
        "Original MSI battery replacement and Per-Key RGB keyboard repairs for reliable gaming sessions.",
    },
  ];

  return (
    <div className="bg-linear-to-b from-gray-50 to-white">

      {/* HEADER */}
      <BrandHeader
        logo="/logos/msi-logo.avif"
        brandName="MSI"
        tagline="MSI Service Center In Inodre"
      />

      {/* CAROUSEL */}
      <MSI_Carousel />

      {/* PROMO SECTION */}
      <BrandPromo
        imageSrc="/brand/msi/homepage.avif"
        brandName="MSI"
      />

      {/* SERVICES SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold uppercase tracking-widest text-gray-900">
              MSI Service Center Indore Expertise
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Specialized in Gaming Laptop Repair Indore with genuine parts and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {msiServices.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
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
            <h3 className="text-3xl font-orbitron font-bold text-gray-900 uppercase">
              Need MSI Laptop Repair in Vijay Nagar?
            </h3>
            <p className="text-lg text-gray-600">
              Expert diagnostics for gaming rigs. Same-day repair available for screens & batteries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:09111000757"
              style={{ backgroundColor: theme.primary }}
              className="hover:opacity-90 text-white font-semibold py-4 px-8 rounded-full transition flex items-center justify-center gap-2 shadow-lg"
            >
              <FaPhoneAlt size={18} /> 091110 00757
            </a>

            <a
              href="https://wa.me/919111000757"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition flex items-center justify-center gap-2 shadow-lg"
            >
              <FaWhatsapp size={20} /> WhatsApp MSI Desk
            </a>
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-orbitron font-bold uppercase tracking-widest text-gray-900 mb-12">
            The Lap-X Advantage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <MdOutlineGppGood style={{ color: theme.icon }} className="text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Genuine MSI Parts</h3>
              <p className="text-gray-600">
                We use only genuine or high-grade OEM components to maintain your laptop&apos;s gaming performance.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <MdSpeed style={{ color: theme.icon }} className="text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Express Service</h3>
              <p className="text-gray-600">
                Most MSI battery replacements and screen repairs in Vijay Nagar Indore are completed same-day.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <FaUserCog style={{ color: theme.icon }} className="text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Technicians</h3>
              <p className="text-gray-600">
                Our team specializes in MSI motherboard architecture and complex chip-level repairing.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default MSIServiceCenterPage;