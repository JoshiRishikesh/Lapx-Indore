"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaLaptop, FaTools, FaCheckCircle, FaWhatsapp, FaPhoneAlt, 
  FaMapMarkerAlt, FaChevronRight, FaClock, FaShieldVirus,
  FaMicrochip, FaBatteryFull, FaKeyboard, FaHdd, FaSnowflake
} from 'react-icons/fa';

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function LenovoServiceIndore() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#1e56a0] selection:text-white">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-32 px-6 bg-linear-to-br from-slate-50 via-white to-red-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial" animate="animate" variants={staggerContainer}
            className="relative z-10"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-red-200 shadow-sm">
              <FaCheckCircle /> Lenovo Specialist Hub Indore
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Lenovo Laptop Service Center <span className="text-[#1e56a0]">Indore | LAPX</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              Reliable <span className="font-semibold text-[#1e56a0]">post-warranty support</span> for IdeaPad, Legion, and ThinkPad. We solve complex hinge, screen, and motherboard issues at <span className="font-bold text-slate-800">LG-31, Orbit Mall</span>.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="tel:9111000757" className="flex items-center justify-center gap-3 bg-[#f97316] text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 group">
                Call Lenovo Expert <FaPhoneAlt className="text-sm group-hover:animate-bounce" />
              </Link>
              <Link href="https://wa.me/9111000757" className="flex items-center justify-center gap-3 bg-[#22c55e] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-200">
                <FaWhatsapp className="text-xl" /> WhatsApp Quote
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-red-100 inline-block shadow-sm">
              <p className="text-sm font-bold text-slate-800">
                Lenovo Diagnostics & Dusting starts at <span className="text-2xl text-[#f97316]">₹199*</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Location & Timing Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative z-10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#1e56a0]">
                <FaMapMarkerAlt /> Find Us in Vijay Nagar
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="shrink-0 text-[#f97316] mt-1"><FaMapMarkerAlt /></div>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    <strong>LG-31, Orbit Mall (Sche. 54)</strong><br />
                    Opposite C21 Mall, AB Road Vijay Nagar<br />
                    Indore, Madhya Pradesh 452010
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <span className="flex items-center gap-2 text-[10px] uppercase font-bold text-[#1e56a0] mb-1">
                      <FaClock /> Shop Hours
                    </span>
                    <span className="text-sm font-bold block">10:30 AM - 9:00 PM</span>
                    <span className="text-[10px] text-blue-400 font-semibold italic">Open Every Day</span>
                  </div>
                  <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex flex-col justify-center">
                    <span className="block text-[10px] uppercase font-bold text-green-500 mb-1">Live Status</span>
                    <span className="text-sm font-bold text-green-600 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Technicians Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-30" />
          </motion.div>
        </div>
      </section>

      {/* --- 2. LENOVO SERIES SECTION --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tight">Complete Repair for all <span className="text-red-600">Lenovo Variants</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['IdeaPad Slim', 'ThinkPad E/X/T', 'Legion Gaming', 'Yoga 2-in-1', 'Lenovo V-Series'].map((model) => (
              <div key={model} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:border-[#1e56a0] hover:bg-white transition-all group cursor-default shadow-sm">
                <FaLaptop className="mx-auto text-2xl mb-3 text-slate-400 group-hover:text-red-600 transition-colors" />
                <h3 className="font-bold text-sm text-slate-800">{model}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Indore's Expert Lenovo Services</h2>
            <div className="w-20 h-1.5 bg-[#f97316] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Display & Screen", d: "Original grade LED/LCD replacement for flickering or broken Lenovo screens.", i: <FaLaptop />, b: "Sharp Visuals" },
              { t: "Hinge & Body Repair", d: "Fixing broken hinges and plastic body panels for IdeaPad and Yoga series.", i: <FaTools />, b: "Structural Integrity" },
              { t: "Legion Cooling Pro", d: "Deep fan cleaning and liquid metal/thermal paste for Lenovo gaming series.", i: <FaSnowflake />, b: "Zero Throttling" },
              { t: "Motherboard Specialist", d: "No-display and dead-board chip-level repairs for high-performance ThinkPads.", i: <FaMicrochip />, b: "Certified Fix" },
              { t: "Lenovo Battery Hub", d: "Long-lasting battery replacements for users facing 'Plugged in, not charging'.", i: <FaBatteryFull />, b: "Extended Life" },
              { t: "SSD & Performance", d: "Turn your slow Lenovo into a powerhouse with NVMe SSD and RAM upgrades.", i: <FaHdd />, b: "Max Speed" }
            ].map((s, idx) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-[#1e56a0] transition-all"
              >
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-xl mb-6">{s.i}</div>
                <h3 className="text-xl font-bold mb-3">{s.t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.d}</p>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#22c55e] bg-green-50 px-3 py-1 rounded-full inline-block">
                  {s.b}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. TRUST SECTION (DARK) --- */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Why Lenovo Owners Trust LAPX Indore</h2>
            <div className="space-y-6">
              {[
                "10+ Years of Lenovo Motherboard Expertise",
                "Advanced BGA Rework Station for Legion GPUs",
                "Genuine Grade Components for ThinkPad Safety",
                "Express Repair Service for Professional Users",
                "Centrally Located at Orbit Mall, Vijay Nagar"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-lg font-medium">
                  <FaCheckCircle className="text-orange-400 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl">
             <h3 className="text-sm font-bold mb-4 text-[#f97316] uppercase tracking-widest">Technician's Note</h3>
             <p className="text-slate-300 leading-relaxed italic text-lg">
                &quot;Lenovo laptops are known for their <span className="text-white font-semibold text-xl">durability</span>, but they need expert care for hinges and heat management. At LAPX, we provide the precision your machine deserves.&quot;
             </p>
          </div>
        </div>
      </section>

      {/* --- 5. CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-linear-to-r from-[#1e56a0] to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#f97316] text-white px-6 py-2 font-black uppercase text-xs rounded-bl-2xl">Limited Time Offer</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">Lenovo Ultimate Tune-Up</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Get your IdeaPad or Legion running like new with deep cleaning, OS speed boost, and thermal optimization.</p>
          <div className="text-5xl font-black mb-8 text-white">Just <span className="text-[#f97316]">₹199*</span></div>
          <Link href="https://wa.me/9111000757" className="inline-flex items-center gap-2 bg-white text-[#1e56a0] px-10 py-4 rounded-full font-black hover:scale-105 transition-all shadow-xl">
            Book Repair Now <FaChevronRight />
          </Link>
        </div>
      </section>

      {/* --- 6. SEO FOOTER --- */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed max-w-5xl mx-auto uppercase tracking-wide">
            <strong>LAPX Lenovo Service:</strong> Indore&apos;s most reliable <strong>Lenovo Laptop Service Center Indore</strong> located at <strong>LG-31 Orbit Mall</strong>. Specialized in <strong>Lenovo IdeaPad hinge repair Indore</strong>, <strong>Lenovo screen replacement Vijay Nagar</strong>, and <strong>ThinkPad keyboard replacement near AB Road</strong>. We support the entire Lenovo ecosystem including Legion, Yoga, and V-Series. Serving Indore major hubs like Vijay Nagar, LIG Square, and Palasia. High-quality <strong>post-warranty Lenovo laptop support</strong>.
          </p>
        </div>
      </section>
      
    </main>
  );
}