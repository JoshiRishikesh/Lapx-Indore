// src/components/HeroCarousel.tsx
import React from "react";
import Image from "next/image";
import { FiPhone, FiMessageSquare } from "react-icons/fi";

const HeroCarousel: React.FC = () => {
  const heroImageSrc = "/carousals/asus/1.webp";
  const heroImageAlt = "Professional laptop service banner";

  return (
    <div className="flex flex-col items-center">
      {/* Background Image */}
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden group rounded-xl">
        <Image
          src={heroImageSrc}
          alt={heroImageAlt}
          fill
          quality={85}
          priority
          className="object-cover object-center transition-transform duration-700 ease-in-out transform group-hover:scale-105"
        />
        {/* Optional Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-dark-200/20 via-dark-200/10 to-dark-200/20"></div>
      </div>

      {/* Buttons Below Image */}
      <div className="mt-6 flex flex-col sm:flex-row gap-6">
        {/* Call Now Button */}
        <a
          href="tel:09111000757"
          className="bg-sky-600 hover:bg-sky-700 flex items-center justify-center gap-3 text-white font-bold py-4 px-10 rounded-xl text-lg transition duration-300 shadow-lg shadow-sky-300/50 transform hover:-translate-y-1 hover:scale-105 uppercase tracking-wider"
        >
          <FiPhone size={22} /> Call Now
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/919111000757"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 flex items-center justify-center gap-3 text-white font-bold py-4 px-10 rounded-xl text-lg transition duration-300 shadow-lg shadow-green-300/50 transform hover:-translate-y-1 hover:scale-105 uppercase tracking-wider"
        >
          <FiMessageSquare size={22} /> Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default HeroCarousel;
