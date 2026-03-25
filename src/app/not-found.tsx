"use client";

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaTools, FaLaptopCode, FaArrowRight, FaShieldAlt, 
  FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt 
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

// Animation Variants matching your brand style
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function NotFound() {
  const quickLinks = [
    { name: "ASUS Support", link: "/asus-laptop-service-center-indore", icon: <FaLaptopCode size={24} /> },
    { name: "HP Support", link: "/hp-laptop-service-center-indore", icon: <MdSupportAgent size={24} /> },
    { name: "DELL Support", link: "/dell-laptop-service-center-indore", icon: <FaTools size={24} /> },
    { name: "ACER Support", link: "/acer-laptop-service-center-indore", icon: <FaShieldAlt size={24} /> },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#0076ce] selection:text-white overflow-hidden">
      
      {/* --- HERO / ERROR SECTION --- */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-32 px-6 bg-linear-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial="initial" animate="animate" variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-red-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              System Error: 404
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-7xl md:text-9xl font-black text-slate-900 leading-none mb-6 tracking-tighter">
              PAGE <span className="text-[#0076ce]">OFFLINE</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              The requested hardware or page is not responding. If you are looking for <span className="text-[#0076ce] font-bold">Laptop Repairing in Indore</span>, use the diagnostics below to reboot your journey.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/" className="flex items-center justify-center gap-3 bg-[#0076ce] text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 group">
                Reboot to Home <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="tel:9111000757" className="flex items-center justify-center gap-3 bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm">
                <FaPhoneAlt className="text-sm text-[#f97316]" /> Contact Support
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-30 z-0" />
      </section>

      {/* --- DIAGNOSTIC QUICK LINKS --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-400">Run System Diagnostics</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((item, index) => (
              <Link key={index} href={item.link} className="group">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 bg-slate-50 border border-slate-100 rounded-3xl text-center hover:border-[#0076ce] hover:bg-white hover:shadow-xl transition-all h-full flex flex-col items-center justify-center"
                >
                  <div className="text-[#0076ce] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider">
                    {item.name}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- DIRECT ASSISTANCE --- */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Need Immediate Help?</h2>
              <p className="text-slate-400">Visit our tech hub at Orbit Mall, Vijay Nagar.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://wa.me/9111000757" className="flex items-center justify-center gap-3 bg-[#22c55e] text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg">
                <FaWhatsapp size={20} /> WhatsApp
              </Link>
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-2xl">
                <FaMapMarkerAlt className="text-[#f97316]" size={24} />
                <div className="text-left">
                  <span className="block text-white font-bold text-sm leading-tight">LG-31, Orbit Mall</span>
                  <span className="block text-slate-400 text-xs">AB Road, Indore</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle tech grid background for the card */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>
      </section>

      {/* --- SEO FOOTER --- */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed uppercase tracking-[0.2em] font-medium max-w-4xl mx-auto">
            Indore's Premier Laptop Repair Service • Motherboard Repair • Screen Replacement • 
            Asus Service Center Indore • Dell Support Vijay Nagar • HP Laptop Repair Near Orbit Mall • 
            Genuine Parts & Certified Technicians
          </p>
        </div>
      </footer>
      
    </main>
  );
}