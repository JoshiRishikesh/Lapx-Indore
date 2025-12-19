"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { BsCalendarCheck, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    brand: "ASUS",
    title: "Expert ASUS Repair Services",
    description: "From ROG gaming powerhouses to elegant Zenbooks, we provide certified component-level repairs.",
    image: "/carousals/home/asus.avif", 
    color: "from-blue-50 to-indigo-100",
    accent: "text-blue-600",
    btnColor: "bg-blue-600",
  },
  {
    brand: "HP",
    title: "HP Spectre & Pavilion Specialists",
    description: "Original screen replacements and battery upgrades for all HP laptop models with 90-day warranty.",
    image: "/carousals/home/hp.avif",
    color: "from-cyan-50 to-blue-100",
    accent: "text-cyan-600",
    btnColor: "bg-cyan-600",
  },
  {
    brand: "DELL",
    title: "Premium DELL Support Center",
    description: "Fast-track servicing for Dell XPS and Latitude series. Genuine parts and expert technicians.",
    image: "/carousals/home/dell.avif",
    color: "from-slate-100 to-blue-50",
    accent: "text-blue-700",
    btnColor: "bg-slate-900",
  },
  {
    brand: "LENOVO",
    title: "Lenovo ThinkPad & Yoga Care",
    description: "Specialized motherboard repairs and hinge fixes for the entire Lenovo ThinkPad lineup.",
    image: "/carousals/home/lenovo.avif",
    color: "from-red-50 to-orange-100",
    accent: "text-red-600",
    btnColor: "bg-red-600",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full min-h-[700px] lg:h-[750px] overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-linear-to-br ${slides[current].color} flex items-center pt-20 pb-12 lg:py-0`}
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            
            {/* TEXT CONTENT - Always First on Mobile (order-1) */}
            <div className="z-10 order-1 lg:order-1 text-center lg:text-left">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-4 lg:mb-6 ${slides[current].accent}`}
              >
                {slides[current].brand} Certified Repair
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-4 lg:mb-6"
              >
                {slides[current].title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base lg:text-lg text-slate-600 mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0"
              >
                {slides[current].description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a 
                  href="/contact" 
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl ${slides[current].btnColor} text-white font-bold shadow-xl hover:scale-105 transition-all active:scale-95`}
                >
                  <BsCalendarCheck /> Book Now
                </a>
                <a 
                  href={`/${slides[current].brand.toLowerCase()}-service-center`} 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/50 backdrop-blur border border-white text-slate-900 font-bold hover:bg-white transition-all"
                >
                  Learn More <BsArrowRight />
                </a>
              </motion.div>
            </div>

            {/* IMAGE CONTENT - Always Second on Mobile (order-2) */}
            <div className="relative order-2 lg:order-2 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative w-full max-w-[320px] md:max-w-[450px] lg:max-w-[550px] aspect-square flex items-center justify-center"
              >
                {/* Visual Glow behind laptop */}
                <div className={`absolute inset-0 opacity-40 rounded-full blur-[80px] bg-white`} />
                
                <Image
                  src={slides[current].image}
                  alt={`${slides[current].brand} Laptop Repair`}
                  width={600}
                  height={600}
                  priority
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls - Hidden on very small screens or repositioned */}
      <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 flex gap-3 z-20 scale-90 lg:scale-100">
        <button 
          onClick={prevSlide}
          className="p-3 lg:p-4 rounded-full bg-white/80 backdrop-blur hover:bg-white text-slate-900 border border-slate-200 shadow-lg transition-all active:scale-90"
        >
          <BsArrowLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 lg:p-4 rounded-full bg-white/80 backdrop-blur hover:bg-white text-slate-900 border border-slate-200 shadow-lg transition-all active:scale-90"
        >
          <BsArrowRight size={20} />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === index ? "w-8 lg:w-12 bg-blue-600" : "w-2 lg:w-3 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}