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
  desktop: '/carousals/dell/',
  mobile: '/carousals/dell/mobile/',
};

const imageFiles = ['1.avif', '2.avif', '3.avif', '4.avif'];

const slideTexts = [
  { 
    heading: "Dell Service Center Indore Vijay Nagar", 
    subheading: "Expert Dell laptop repair in Vijay Nagar Indore with genuine parts and certified technicians." 
  },
  { 
    heading: "Alienware & Inspiron Specialists", 
    subheading: "Gaming Laptop Repair Indore: High-end rigs handled with expert precision and care." 
  },
  { 
    heading: "Dell Motherboard Repair Indore", 
    subheading: "Expert Chip-level repairing to save you from costly motherboard replacements." 
  },
  { 
    heading: "Fast Screen & Battery Replacement", 
    subheading: "Original Dell spares with transparent pricing and same-day repair service." 
  },
];

const DellCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const basePath = isMobile ? imageBasePaths.mobile : imageBasePaths.desktop;

  const dynamicImages = imageFiles.map((file, index) => ({
    src: basePath + file,
    alt: `Dell Service Center Indore Vijay Nagar - ${file}`,
    text: slideTexts[index],
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dynamicImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [dynamicImages.length]);

  return (
    <section className="relative w-full bg-[#001b33] overflow-hidden">
      {/* Main Slide Wrapper */}
      <div className="relative w-full">
        {dynamicImages.map((slide, index) => (
          <div
            key={index}
            className={`w-full flex ${isMobile ? 'flex-col' : 'flex-row'} transition-all duration-1000 ease-in-out ${
              index === currentIndex 
                ? 'relative opacity-100 z-10' 
                : 'absolute top-0 left-0 opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Image Section - Strict 1:1 Aspect Ratio */}
            <div className={`relative aspect-square ${isMobile ? 'w-full order-1' : 'h-[70vh] lg:h-[80vh] order-2 shrink-0'}`}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                quality={95}
                priority={index === 0}
              />
              {/* Dell Professional Gradient Overlay */}
              {isMobile ? (
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#001b33] to-transparent" />
              ) : (
                <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#001b33] to-transparent" />
              )}
            </div>

            {/* Text Section - Fluid height to ensure button visibility */}
            <div className={`flex-1 flex flex-col justify-center px-6 md:px-16 bg-[#001b33] text-white ${isMobile ? 'order-2 pt-4 pb-24 items-center text-center' : 'order-1 border-r border-blue-500/10'}`}>
              <h2 className={`${isMobile ? 'text-3xl' : 'text-3xl md:text-5xl'} font-sans font-black mb-4 text-[#0076CE] uppercase tracking-tight leading-tight`}>
                {slide.text.heading}
              </h2>
              <p className={`${isMobile ? 'text-base' : 'text-lg md:text-xl'} font-light text-slate-300 max-w-lg mb-8`}>
                {slide.text.subheading}
              </p>
              <div className="w-full flex justify-center md:justify-start">
                <a
                  href="tel:09111000757"
                  className="inline-block px-10 py-4 bg-[#0076CE] text-white font-bold rounded-sm hover:bg-[#005a9e] transition-all duration-300 shadow-[0_10px_20px_rgba(0,118,206,0.3)] uppercase text-sm tracking-widest active:scale-95"
                >
                  Book Dell Repair
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modern Navigation Bars */}
      <div className={`absolute z-20 flex space-x-2 ${isMobile ? 'bottom-8 left-1/2 -translate-x-1/2' : 'bottom-10 left-16'}`}>
        {dynamicImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIndex ? 'bg-blue-500 w-12' : 'bg-slate-700 w-6 hover:bg-blue-300'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default DellCarousel;