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
    <section className="mt-16 mb-16 w-full px-0 md:px-4">
      <div
        className="max-w-7xl mx-auto md:rounded-2xl overflow-hidden shadow-2xl border-none md:border md:border-gray-100 flex flex-col md:flex-row min-h-[400px]"
      >
        {/* IMAGE SECTION - 1:1 Full Bleed (No Margins) */}
        <div 
          className="relative aspect-square w-full md:w-[400px] lg:w-[450px] shrink-0"
        >
          <Image
            src={imageSrc}
            alt={`${brandName} Laptop Repair in Vijay Nagar Indore`}
            fill
            className="object-cover" // Fills the entire square with no gaps
            priority
            sizes="(max-width: 768px) 100vw, 450px"
          />
        </div>

        {/* TEXT SECTION - Naturally fills the rest */}
        <div
          className="flex-1 flex flex-col justify-center px-8 py-12 md:px-16 text-center md:text-left"
          style={{ backgroundColor: theme.primary }}
        >
          <h2
            className="font-orbitron font-extrabold leading-tight mb-4 text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter"
            style={{ color: theme.secondary }}
          >
            {brandName} <br /> 
            <span className="text-white">Expert Repairing</span>
          </h2>
          
          <p className="text-white/90 mb-8 text-lg font-medium max-w-md mx-auto md:mx-0">
            Authorized-grade service for {brandName} laptops. We specialize in chip-level motherboard repair and liquid damage restoration at our Vijay Nagar, Indore center.
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href={ctaLink}
              className="inline-block px-10 py-4 text-white font-black rounded-sm hover:brightness-110 transition duration-300 shadow-xl uppercase tracking-widest text-sm"
              style={{ backgroundColor: theme.secondary }}
            >
              Book {brandName} Repair
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPromo;