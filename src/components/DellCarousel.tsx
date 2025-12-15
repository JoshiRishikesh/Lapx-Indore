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
  { heading: "Expert Dell Laptop Repair", subheading: "Fast Diagnosis. Genuine Parts. Certified Technicians." },
  { heading: "Specialized Alienware & Inspiron Care", subheading: "Gaming & productivity laptops handled with precision and expertise." },
  { heading: "Motherboard & Component Level Repair", subheading: "Component-level repairs to save you costly replacements." },
  { heading: "Battery, Keyboard & Display Replacement", subheading: "Original Dell parts for long-lasting performance and reliability." },
];

const DellCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const basePath = isMobile ? imageBasePaths.mobile : imageBasePaths.desktop;

  const dynamicImages = imageFiles.map((file, index) => ({
    src: basePath + file,
    alt: `Dell Service Image - ${file}`,
    text: slideTexts[index],
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dynamicImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [dynamicImages.length]);

  return (
    <div className={`relative overflow-hidden flex items-center ${isMobile ? 'h-[60vh]' : 'h-[calc(100vh-4rem)]'}`}>
      {dynamicImages.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full flex flex-col ${isMobile ? 'flex-col' : 'flex-row'} transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Text Section */}
          <div className={`${isMobile ? 'w-full px-4 py-6 bg-gray-900/90 text-white flex flex-col items-center text-center' : 'w-1/3 px-8 md:px-16 bg-gray-900 text-white flex flex-col justify-center'}`}>
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-5xl'} font-extrabold mb-3 text-blue-500`}>
              {slide.text.heading}
            </h2>
            <p className={`${isMobile ? 'text-sm' : 'text-lg md:text-2xl'} font-light text-gray-300`}>
              {slide.text.subheading}
            </p>
            <div className="mt-4 sm:mt-6">
              <a
                href="/contact"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-gray-900 font-bold rounded-lg hover:bg-blue-400 transition duration-300 shadow-lg"
              >
                Book Dell Repair Now
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className={`${isMobile ? 'w-full h-2/3 relative mt-2 sm:mt-0' : 'w-2/3 h-full relative'}`}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              quality={85}
              priority={index === 0}
            />
            {!isMobile && <div className="absolute inset-0 bg-linear-to-b from-gray-900/30 to-transparent"></div>}
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {dynamicImages.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-400 hover:bg-blue-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DellCarousel;
