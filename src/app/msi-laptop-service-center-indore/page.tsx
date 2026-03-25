"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaLaptop, FaTools, FaCheckCircle, FaWhatsapp, FaPhoneAlt, 
  FaMapMarkerAlt, FaChevronRight, FaClock, FaGamepad,
  FaMicrochip, FaBatteryFull, FaFan, FaHdd, FaFireAlt
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

export default function MSIServiceIndore() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#ff0000] selection:text-white">
      
      {/* --- 1. HERO SECTION (Gaming Aesthetic) --- */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-32 px-6 bg-linear-to-br from-slate-900 via-slate-800 to-black overflow-hidden text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial" animate="animate" variants={staggerContainer}
            className="relative z-10"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-red-600/20 text-red-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-red-500/30 shadow-sm">
              <FaGamepad /> High-Performance MSI Tech Hub
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              MSI Laptop Service Center <span className="text-red-600">Indore | LAPX</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              Specialized <span className="font-semibold text-red-500">post-warranty repairs</span> for Titan, Stealth, Raider, and Katana series. Advanced GPU reballing and thermal management at <span className="font-bold text-white">LG-31, Orbit Mall</span>.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="tel:9111000757" className="flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/40 group">
                Consult MSI Expert <FaPhoneAlt className="text-sm group-hover:animate-pulse" />
              </Link>
              <Link href="https://wa.me/9111000757" className="flex items-center justify-center gap-3 bg-[#22c55e] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-900/40">
                <FaWhatsapp className="text-xl" /> Get Instant Quote
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 inline-block">
              <p className="text-sm font-bold text-slate-300">
                MSI Thermal Overhaul starts at <span className="text-2xl text-[#f97316]">₹199*</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="bg-slate-800 p-8 rounded-3xl shadow-2xl border border-white/10 relative z-10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-500">
                <FaMapMarkerAlt /> MSI Repair Hub Vijay Nagar
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                  <div className="shrink-0 text-[#f97316] mt-1"><FaMapMarkerAlt /></div>
                  <p className="text-sm font-medium text-slate-300 leading-relaxed">
                    <strong>LG-31, Orbit Mall (Vijay Nagar Hub)</strong><br />
                    A.B. Road, Near C21 Mall & Malhar Mega Mall<br />
                    Indore, Madhya Pradesh 452010
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900 rounded-2xl border border-white/5">
                    <span className="flex items-center gap-2 text-[10px] uppercase font-bold text-red-500 mb-1">
                      <FaClock /> Availability
                    </span>
                    <span className="text-sm font-bold block text-white">10:30 AM - 9:00 PM</span>
                    <span className="text-[10px] text-slate-500 font-semibold">Open All 7 Days</span>
                  </div>
                  <div className="p-4 bg-green-900/20 rounded-2xl border border-green-500/20 flex flex-col justify-center">
                    <span className="block text-[10px] uppercase font-bold text-green-500 mb-1">Service Status</span>
                    <span className="text-sm font-bold text-green-400 flex items-center gap-2">
                      Ready for Drop-off
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-600 rounded-full blur-[120px] opacity-20" />
          </motion.div>
        </div>
      </section>

      {/* --- 2. MSI GAMING SERIES GRID --- */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 uppercase italic tracking-tighter text-slate-900">Expertise in <span className="text-red-600">MSI Engineering</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { n: 'Titan / Raider', i: <FaFireAlt /> },
              { n: 'Stealth / GS', i: <FaLaptop /> },
              { n: 'Katana / Sword', i: <FaGamepad /> },
              { n: 'Cyborg / Pulse', i: <FaMicrochip /> },
              { n: 'Creator Series', i: <FaTools /> }
            ].map((model) => (
              <div key={model.n} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:border-red-500 hover:bg-white transition-all group cursor-default shadow-sm">
                <div className="mx-auto text-2xl mb-3 text-slate-400 group-hover:text-red-600 transition-colors">{model.i}</div>
                <h3 className="font-bold text-xs text-slate-800 uppercase tracking-tighter">{model.n}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. MSI SPECIALIZED SERVICES --- */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">Pro MSI Solutions Indore</h2>
            <div className="w-20 h-1.5 bg-[#f97316] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "GPU & VRAM Repair", d: "Fixing graphics card artifacts, black screen, and overheating issues in MSI gaming series.", i: <FaMicrochip />, b: "Precision Reballing" },
              { t: "Thermal Master Service", d: "Application of high-end thermal pads and liquid metal to prevent CPU throttling.", i: <FaFan />, b: "Elite Cooling" },
              { t: "MSI Display Fix", d: "Replacement of 144Hz/240Hz high-refresh-rate panels for Katana and Stealth.", i: <FaLaptop />, b: "Original Refresh Rate" },
              { t: "Power IC Solutions", d: "Solving 'Not turning on' issues caused by shorted motherboard components.", i: <FaFireAlt />, b: "Chip-Level Mastery" },
              { t: "RGB Keyboard Repair", d: "SteelSeries keyboard replacement and individual key-switch repairs for MSI rigs.", i: <FaTools />, b: "Original Grade" },
              { t: "NVMe Raid 0 Setup", d: "Extreme storage upgrades and high-frequency RAM expansion for video editors.", i: <FaHdd />, b: "Turbo Speed" }
            ].map((s, idx) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-red-600 transition-all"
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
      <section className="py-24 px-6 bg-[#1e56a0] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Why MSI Users Choose LAPX Indore</h2>
            <div className="space-y-6">
              {[
                "Indore's Only Lab with GPU Reballing Expertise",
                "Specialized Tools for Thin-and-Light Stealth Series",
                "Fast-Track Repair for Professional Streamers",
                "Genuine Grade Thermal & Electronic Components",
                "Located at the Heart of Tech Hub - Orbit Mall"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-lg font-medium">
                  <FaCheckCircle className="text-orange-400 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl">
             <h3 className="text-sm font-bold mb-4 text-[#f97316] uppercase tracking-widest">The MSI Promise</h3>
             <p className="text-blue-50 leading-relaxed italic text-lg">
                &quot;We understand that MSI laptops are high-precision machines. Our technicians are trained to handle <span className="text-white font-semibold">complex motherboard architectures</span> that standard shops won't touch.&quot;
             </p>
          </div>
        </div>
      </section>

      {/* --- 5. MSI PRICE CTA --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-linear-to-r from-red-600 to-black rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-white text-red-600 px-6 py-2 font-black uppercase text-xs rounded-bl-2xl">Value Deal</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white uppercase">MSI Gaming Maintenance</h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">Stop the overheating before it kills your GPU. Get professional internal dusting and fan service today.</p>
          <div className="text-5xl font-black mb-8 text-white">Only <span className="text-[#f97316]">₹199*</span></div>
          <Link href="tel:9111000757" className="inline-flex items-center gap-2 bg-white text-red-600 px-10 py-4 rounded-full font-black hover:scale-105 transition-all shadow-xl">
            Check Availability <FaChevronRight />
          </Link>
        </div>
      </section>

      {/* --- 6. SEO FOOTER --- */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed max-w-5xl mx-auto uppercase tracking-widest font-medium">
            <strong>LAPX MSI Center:</strong> Premiere <strong>MSI Laptop Service Center Indore</strong> at <strong>LG-31 Orbit Mall</strong>. Specialized in <strong>MSI Katana screen replacement Indore</strong>, <strong>MSI Stealth motherboard repair Vijay Nagar</strong>, and <strong>MSI Raider fan cleaning near Malhar Mall</strong>. We provide chip-level solutions for MSI Gaming, Prestige, and Creator series. Serving AB Road, Palasia, and Bhawarkua. Expert <strong>post-warranty MSI support</strong>.
          </p>
        </div>
      </section>
      
    </main>
  );
}