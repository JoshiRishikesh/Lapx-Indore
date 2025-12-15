'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Brand Color Map (expand anytime)
const brandColors: Record<string, { primary: string; secondary: string; icon: string }> = {
  ASUS: {
    primary: "#1976D2",
    secondary: "#0D47A1",
    icon: "#1E88E5"
  },
  Lenovo: {
    primary: "#E60000",
    secondary: "#990000",
    icon: "#FF4C4C"
  },
  HP: {
    primary: "#0066CC",
    secondary: "#003D80",
    icon: "#3399FF"
  },
  Dell: {
    primary: "#007DB8",
    secondary: "#005A8E",
    icon: "#33A8E0"
  }
};

// --- Custom Hook for Screen Size ---
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

const brands = [
  {
    name: "ASUS",
    imageBase: "/carousals/asus/",
    mobileBase: "/carousals/asus/mobile/",
    heading: "Expert ASUS Laptop Repair",
    subheading: "Fast Diagnosis. Certified Technicians. Genuine Parts."
  },
  {
    name: "Lenovo",
    imageBase: "/carousals/lenovo/",
    mobileBase: "/carousals/lenovo/mobile/",
    heading: "Reliable Lenovo Laptop Care",
    subheading: "ThinkPad, Legion &amp; IdeaPad Specialist Repairs."
  },
  {
    name: "HP",
    imageBase: "/carousals/hp/",
    mobileBase: "/carousals/hp/mobile/",
    heading: "Trusted HP Laptop Experts",
    subheading: "Original Parts. Quick Fix. Expert Technicians."
  },
  {
    name: "Dell",
    imageBase: "/carousals/dell/",
    mobileBase: "/carousals/dell/mobile/",
    heading: "Specialized Dell Laptop Services",
    subheading: "Precision, XPS, Inspiron – We Fix Everything."
  },
];

const imageFiles = ['1.avif', '1.avif', '1.avif', '1.avif'];

const MultiBrandCarousel: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const slide = brands[currentIndex];
  const theme = brandColors[slide.name]; // <<< IMPORTANT (brand → theme color)
  const basePath = isMobile ? slide.mobileBase : slide.imageBase;

  const dynamicSlides = imageFiles.map((file) => ({
    src: basePath + file,
    alt: `${slide.name} - ${file}`
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % imageFiles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const brandInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
      setImageIndex(0);
    }, 20000);
    return () => clearInterval(brandInterval);
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${isMobile ? 'h-[75vh]' : 'h-[calc(100vh-4rem)]'}`}
      style={{
        backgroundColor: theme.primary + "10",
      }}
    >

      <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full">

        {/* TEXT SECTION */}
        <div className={`${isMobile ? 'w-full p-5 text-center bg-gray-900/85' : 'w-1/3 p-10 bg-gray-900'} text-white flex flex-col justify-center`}>
          
          <h2 className={`${isMobile ? "text-2xl" : "text-4xl lg:text-5xl"} font-bold`}
            style={{ color: theme.primary }}>
            {slide.heading}
          </h2>

          <p className={`${isMobile ? "text-sm mt-2" : "text-xl mt-4"} text-gray-300`}>
            {slide.subheading}
          </p>

          <a
            href="/contact"
            className="mt-5 inline-block px-5 py-3 font-bold rounded-lg duration-300 shadow-lg"
            style={{
              backgroundColor: theme.primary,
              border: `2px solid ${theme.primary}`,
              color: "#fff"
            }}
          >
            Book {slide.name} Repair
          </a>
        </div>

        {/* IMAGE SECTION */}
        <div className={`${isMobile ? 'w-full h-[55%] relative' : 'w-2/3 h-full relative'}`}>
          
          <Image
            src={dynamicSlides[imageIndex].src}
            alt={dynamicSlides[imageIndex].alt}
            fill
            className="object-cover object-center"
          />

          {!isMobile && (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to left, ${theme.primary}40, transparent)`
              }}
            />
          )}
        </div>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {brands.map((brand, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              setImageIndex(0);
            }}
            className="w-3 h-3 rounded-full duration-300"
            style={{
              backgroundColor:
                currentIndex === i ? theme.primary : theme.secondary + "55"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiBrandCarousel;
