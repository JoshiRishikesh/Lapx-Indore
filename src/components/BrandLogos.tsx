// src/components/BrandLogos.tsx
import React from "react";
import Image from "next/image";

// --- BrandLogoCard Component ---
interface BrandLogoCardProps {
  logo: { name: string; src: string; alt: string };
}

const BrandLogoCard: React.FC<BrandLogoCardProps> = ({ logo }) => (
  <div
    className="
      bg-white/70
      backdrop-blur-md
      border border-gray-200
      rounded-2xl
      shadow-sm
      hover:shadow-xl
      hover:bg-white
      transition-all duration-300
      flex items-center justify-center
      p-6
      w-40 h-28 sm:w-48 sm:h-32
      hover:-translate-y-1
    "
  >
    <div className="relative w-full h-full">
      <Image
        src={logo.src}
        alt={logo.alt}
        fill
        className="object-contain"
      />
    </div>
  </div>
);

// ------------------------------------

const logos = [
  { name: "ASUS", src: "/logos/asus-logo.webp", alt: "ASUS Service" },
  { name: "HP", src: "/logos/hp-logo.webp", alt: "HP Service" },
  { name: "DELL", src: "/logos/dell-logo.webp", alt: "DELL Service" },
  { name: "LENOVO", src: "/logos/lenovo-logo.webp", alt: "LENOVO Service" },
];

const BrandLogos: React.FC = () => {
  return (
    <div className="py-14 md:py-20 bg-linear-to-b from-white to-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Premium ASUS-style Heading */}
        <div className="text-center mb-12">
          <h2
            className="
              text-3xl md:text-4xl
              font-orbitron font-bold
              tracking-[0.18em]
              uppercase
              text-gray-800
              drop-shadow-sm
            "
          >
            Authorised Service Center for Leading Laptop Brands
          </h2>
          
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 place-items-center">
          {logos.map((logo) => (
            <BrandLogoCard key={logo.name} logo={logo} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default BrandLogos;
