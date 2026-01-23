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
  desktop: '/carousals/msi/',
  mobile: '/carousals/msi/mobile/',
};

const imageFiles = ['1.avif', '2.avif', '3.avif', '4.avif'];

const slideTexts = [
  { heading: "Indore's Expert MSI Repair", subheading: "High-performance fixes for MSI Titan, Stealth, and Katana rigs." },
  { heading: "Advanced MSI Chip-Level Repairing", subheading: "Expert motherboard diagnostics and GPU reballing in Vijay Nagar." },
  { heading: "Gaming Laptop Thermal Optimization", subheading: "Stop overheating with premium thermal pasting and fan restoration." },
  { heading: "Genuine MSI Parts & Fast Service", subheading: "Official-grade screens, batteries, and RGB keyboards replaced same-day." },
];

const MSICarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const basePath = isMobile ? imageBasePaths.mobile : imageBasePaths.desktop;

  const dynamicImages = imageFiles.map((file, index) => ({
    src: basePath + file,
    alt: `MSI Service Center Indore - ${file}`,
    text: slideTexts[index],
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dynamicImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [dynamicImages.length]);

  return (
    <section className="relative w-full bg-[#111111] overflow-hidden">
      {/* Container holding all slides */}
      <div className="relative w-full">
        {dynamicImages.map((slide, index) => (
          <div
            key={index}
            /* CRITICAL CHANGE: 
               The active slide is 'relative' so the container grows to fit its height.
               Inactive slides are 'absolute' so they don't take up extra space.
            */
            className={`w-full flex ${isMobile ? 'flex-col' : 'flex-row'} transition-all duration-1000 ease-in-out ${
              index === currentIndex 
                ? 'relative opacity-100 z-10' 
                : 'absolute top-0 left-0 opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Image Section - Locked to 1:1 Aspect Ratio */}
            <div className={`relative aspect-square ${isMobile ? 'w-full order-1' : 'h-[70vh] lg:h-[80vh] order-2 shrink-0'}`}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                quality={95}
                priority={index === 0}
              />
              {/* Dark Gradient Overlays for MSI Branding */}
              {isMobile ? (
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#111111] to-transparent" />
              ) : (
                <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#111111] to-transparent" />
              )}
            </div>

            {/* Text Section - Naturally expands to fit text and button */}
            <div className={`flex-1 flex flex-col justify-center px-6 md:px-16 bg-[#111111] text-white ${isMobile ? 'order-2 pt-4 pb-24 items-center text-center' : 'order-1 border-r border-red-600/10'}`}>
              <h2 className={`${isMobile ? 'text-3xl' : 'text-3xl md:text-5xl'} font-orbitron font-extrabold mb-4 text-red-600 uppercase tracking-tighter leading-tight`}>
                {slide.text.heading}
              </h2>
              <p className={`${isMobile ? 'text-base' : 'text-lg md:text-xl'} font-light text-gray-400 max-w-lg mb-8`}>
                {slide.text.subheading}
              </p>
              <div className="w-full flex justify-center md:justify-start">
                <a
                  href="tel:09111000757"
                  className="inline-block px-10 py-4 bg-red-600 text-white font-bold rounded-sm hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)] uppercase text-sm tracking-widest active:scale-95"
                >
                  Book MSI Repair
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Indicators - Positioned to stay visible */}
      <div className={`absolute z-20 flex space-x-2 ${isMobile ? 'bottom-8 left-1/2 -translate-x-1/2' : 'bottom-10 left-16'}`}>
        {dynamicImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIndex ? 'bg-red-600 w-12' : 'bg-gray-700 w-6 hover:bg-red-500'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MSICarousel;