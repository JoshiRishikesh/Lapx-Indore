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
    <section className="mt-16 mb-16 w-full px-4">
      <div
        className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row min-h-[400px]"
      >
        {/* IMAGE SECTION - Forced 1:1 Aspect Ratio */}
        <div 
          className="relative aspect-square w-full md:w-[400px] lg:w-[450px] bg-white shrink-0 flex items-center justify-center"
        >
          <Image
            src={imageSrc}
            alt={`${brandName} Service Center Indore Vijay Nagar`}
            fill
            className="object-contain p-8 md:p-12"
            priority
            sizes="(max-width: 768px) 100vw, 450px"
          />
        </div>

        {/* TEXT SECTION - Takes up remaining fluid space */}
        <div
          className="flex-1 flex flex-col justify-center px-8 py-10 md:px-16 text-center md:text-left"
          style={{ backgroundColor: theme.primary }}
        >
          <h2
            className="font-orbitron font-extrabold leading-tight mb-6 text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter"
            style={{ color: theme.secondary }}
          >
            {brandName} <br /> 
            <span className="text-white">Repair Experts</span>
          </h2>
          
          <p className="text-white/80 mb-8 text-lg font-light max-w-md mx-auto md:mx-0">
            Professional chip-level repairing and genuine parts replacement for all {brandName} models in Vijay Nagar, Indore.
          </p>

          <div>
            <a
              href={ctaLink}
              className="inline-block px-10 py-4 text-white font-black rounded-sm hover:brightness-110 transition duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] uppercase tracking-widest text-sm"
              style={{ backgroundColor: theme.secondary }}
            >
              Book Your Repair Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPromo;