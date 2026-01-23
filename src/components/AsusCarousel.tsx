'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);
  return matches;
};

const imageBasePaths = {
  desktop: '/carousals/asus/',
  mobile: '/carousals/asus/mobile/',
};

const imageFiles = ['1.avif', '2.avif', '3.avif', '4.avif'];

const slideTexts = [
  {
    heading: "Asus Service Center in Indore Vijay Nagar",
    subheading: "Expert repair for ROG, TUF Gaming, and Zenbook series with genuine parts and expert technicians."
  },
  {
    heading: "ROG & TUF Gaming Care",
    subheading: "Precision Gaming Laptop Repair in Indore: thermal optimization and GPU diagnostics."
  },
  {
    heading: "Motherboard & Chip-Level Repairing",
    subheading: "Advanced Asus motherboard repair to save you from costly component replacements."
  },
  {
    heading: "Battery, Keyboard & Screen Replacement",
    subheading: "Original ASUS parts with transparent pricing and same-day repair in Vijay Nagar."
  },
];

const AsusCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const basePath = isMobile ? imageBasePaths.mobile : imageBasePaths.desktop;

  const dynamicSlides = imageFiles.map((file, index) => ({
    src: basePath + file,
    alt: `Asus Service Center Indore Vijay Nagar - ${file}`,
    text: slideTexts[index],
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dynamicSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [dynamicSlides.length]);

  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden">
      {/* Main Slide Wrapper */}
      <div className="relative w-full">
        {dynamicSlides.map((slide, index) => (
          <div
            key={index}
            /* The active slide is 'relative' so the container grows.
               Inactive slides are 'absolute' to overlay them for the fade effect.
            */
            className={`w-full flex ${isMobile ? 'flex-col' : 'flex-row'} transition-all duration-1000 ease-in-out ${
              index === currentIndex 
                ? 'relative opacity-100 z-10' 
                : 'absolute top-0 left-0 opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Image Section - Locked 1:1 Aspect Ratio */}
            <div className={`relative aspect-square ${isMobile ? 'w-full order-1' : 'h-[70vh] lg:h-[80vh] order-2 shrink-0'}`}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                quality={95}
                priority={index === 0}
              />
              {/* Asus Branding Gradient */}
              {isMobile ? (
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#0a0a0a] to-transparent" />
              ) : (
                <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#0a0a0a] to-transparent" />
              )}
            </div>

            {/* Text Section - Fluid height to ensure "Book" button is never hidden */}
            <div className={`flex-1 flex flex-col justify-center px-6 md:px-16 bg-[#0a0a0a] text-white ${isMobile ? 'order-2 pt-4 pb-24 items-center text-center' : 'order-1 border-r border-blue-600/10'}`}>
              <h2 className={`${isMobile ? 'text-3xl' : 'text-3xl md:text-5xl'} font-sans font-black mb-4 text-[#0067b8] uppercase tracking-tighter leading-tight`}>
                {slide.text.heading}
              </h2>
              <p className={`${isMobile ? 'text-base' : 'text-lg md:text-xl'} font-light text-gray-400 max-w-lg mb-8`}>
                {slide.text.subheading}
              </p>
              <div className="w-full flex justify-center md:justify-start">
                <a
                  href="tel:09111000757"
                  className="inline-block px-10 py-4 bg-[#0067b8] text-white font-bold rounded-sm hover:bg-[#005da6] transition-all duration-300 shadow-[0_0_20px_rgba(0,103,184,0.4)] uppercase text-sm tracking-widest active:scale-95"
                >
                  Book ASUS Repair
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Bars */}
      <div className={`absolute z-20 flex space-x-2 ${isMobile ? 'bottom-8 left-1/2 -translate-x-1/2' : 'bottom-10 left-16'}`}>
        {dynamicSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIndex ? 'bg-[#0067b8] w-12' : 'bg-gray-700 w-6 hover:bg-blue-400'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AsusCarousel;