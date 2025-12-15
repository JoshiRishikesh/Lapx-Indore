// src/components/BrandPromo.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import { useBrandTheme } from '@/context/BrandThemeContext';

type BrandPromoProps = {
  imageSrc: string;
  brandName: string;
  ctaLink?: string;
};

const BrandPromo: React.FC<BrandPromoProps> = ({ imageSrc, brandName, ctaLink = '/contact' }) => {
  const theme = useBrandTheme();

  return (
    <section className="mt-24 mb-24 w-full">
      <div
        className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-200 flex flex-col md:flex-row h-[60vh] md:h-[420px]"
      >
        {/* IMAGE */}
        <div className="relative flex items-center justify-center w-full md:w-2/3 h-2/3 md:h-full bg-white">
          <Image
            src={imageSrc}
            alt={`${brandName} Repair Banner`}
            fill
            className="object-contain p-4"
            priority
          />
        </div>

        {/* TEXT */}
        <div
          className="flex flex-col justify-center px-6 md:px-12 w-full md:w-1/3 h-1/3 md:h-full text-center md:text-left"
          style={{ backgroundColor: theme.primary }}
        >
          <h2
            className="font-orbitron font-bold leading-tight mb-4 text-2xl md:text-3xl lg:text-4xl"
            style={{ color: theme.secondary }}
          >
            {brandName} Repair Experts
          </h2>

          <a
            href={ctaLink}
            className="mt-4 inline-block px-6 py-3 text-white font-bold rounded-lg hover:opacity-80 transition duration-300 shadow-lg"
            style={{ backgroundColor: theme.secondary }}
          >
            Book Your Repair Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandPromo;
