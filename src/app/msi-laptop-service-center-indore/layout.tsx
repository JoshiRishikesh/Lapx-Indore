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
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-600 selection:text-white">
      
      {/* --- 1. HERO SECTION (MSI Branding) --- */}
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
              Specialized <span className="font-semibold text-red-500">post-warranty support</span> for Titan, Stealth, Raider, and Katana series. Professional GPU repair and thermal overhaul at <span className="font-bold text-white">LG-31, Orbit Mall</span>.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="tel:9111000757" className="flex items-center justify-center gap-3 bg-[#f97316] text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-900/20 group">
                Call MSI Expert <FaPhoneAlt className="text-sm group-hover:animate-bounce" />
              </Link>
              <Link href="https://wa.me/9111000757" className="flex items-center justify-center gap-3 bg-[#22c55e] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-900/20">
                <FaWhatsapp className="text-xl" /> WhatsApp Quote
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 inline-block shadow-sm">
              <p className="text-sm font-bold text-slate-200">
                MSI Thermal & Dusting starts at <span className="text-2xl text-[#f97316]">₹199*</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Location & Timing Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-slate-800 p-8 rounded-3xl shadow-2xl border border-white/10 relative z-10 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-500">
                <FaMapMarkerAlt /> Visit Our Vijay Nagar Hub
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                  <div className="shrink-0 text-[#f97316] mt-1"><FaMapMarkerAlt /></div>
                  <p className="text-sm font-medium text-slate-300 leading-relaxed">
                    <strong>LG-31, Lower Ground Floor, Orbit Mall</strong><br />
                    Near C21 & Malhar Mall, AB Road, Vijay Nagar<br />
                    Indore, Madhya Pradesh 452010
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900 rounded-2xl border border-white/5">
                    <span className="flex items-center gap-2 text-[10px] uppercase font-bold text-red-500 mb-1">
                      <FaClock /> Timings
                    </span>
                    <span className="text-sm font-bold block">10:30 AM - 8:30 PM</span>
                    <span className="text-[10px] text-slate-500 font-semibold italic">Open All 7 Days</span>
                  </div>
                  <div className="p-4 bg-green-900/20 rounded-2xl border border-green-500/20 flex flex-col justify-center">
                    <span className="block text-[10px] uppercase font-bold text-green-500 mb-1">Status</span>
                    <span className="text-sm font-bold text-green-400 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Available Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20" />
          </motion.div>
        </div>
      </section>

      {/* --- 2. MSI SERIES SECTION --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tight">Support for All <span className="text-red-600">MSI Rigs</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['MSI Katana', 'MSI Stealth', 'MSI Raider', 'MSI Titan', 'MSI Modern'].map((model) => (
              <div key={model} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:border-red-600 hover:bg-white transition-all group cursor-default shadow-sm">
                <FaGamepad className="mx-auto text-2xl mb-3 text-slate-400 group-hover:text-red-600 transition-colors" />
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">Pro MSI Solutions Indore</h2>
            <div className="w-20 h-1.5 bg-[#f97316] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "MSI Display Fix", d: "Replacement of 144Hz and 240Hz high-refresh-rate panels for Katana and Stealth series laptops.", i: <FaLaptop />, b: "Original Refresh Rate" },
              { t: "GPU & VRAM Repair", d: "Specialized chip-level motherboard repair for MSI gaming laptops facing black screen issues.", i: <FaMicrochip />, b: "Precision Reballing" },
              { t: "Thermal Master Service", d: "High-grade thermal paste application to stop MSI CPU throttling and overheating.", i: <FaFan />, b: "Peak Performance" },
              { t: "MSI Battery Support", d: "Genuine replacement batteries for high-drain MSI gaming and creator series models.", i: <FaBatteryFull />, b: "Factory Grade" },
              { t: "RGB Keyboard Repair", d: "Fixing SteelSeries keyboard lighting and non-responsive keys for MSI laptops.", i: <FaTools />, b: "Original Spares" },
              { t: "Storage Expansion", d: "NVMe SSD upgrades and RAID setup for maximum loading speeds in heavy games.", i: <FaHdd />, b: "Turbo Speed" }
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
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight italic">Why MSI Users Trust LAPX Indore</h2>
            <div className="space-y-6">
              {[
                "Indore's Expert GPU Reballing Technicians",
                "Specialized Tools for Thin-and-Light MSI Stealth",
                "Fastest Turnaround for Gaming Series Repairs",
                "Genuine Grade Cooling & Electronic Parts",
                "Located at Tech Hub - Orbit Mall, Vijay Nagar"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-lg font-medium">
                  <FaCheckCircle className="text-red-500 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl">
             <h3 className="text-sm font-bold mb-4 text-[#f97316] uppercase tracking-widest">The MSI Promise</h3>
             <p className="text-slate-100 leading-relaxed italic text-lg">
                &quot;We understand MSI laptops are high-precision machines. Our technicians provide <span className="text-white font-semibold">expert post-warranty support</span> to ensure your rig performs at its peak potential.&quot;
             </p>
          </div>
        </div>
      </section>

      {/* --- 5. CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-linear-to-r from-red-700 to-black rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-white text-red-600 px-6 py-2 font-black uppercase text-xs rounded-bl-2xl">Value Deal</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white uppercase italic tracking-tighter">MSI Performance Check</h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">Don&apos;t let heat kill your GPU. Get professional internal dusting and high-performance thermal service.</p>
          <div className="text-5xl font-black mb-8 text-white">Only <span className="text-[#f97316]">₹199*</span></div>
          <Link href="https://wa.me/9111000757" className="inline-flex items-center gap-2 bg-white text-red-700 px-10 py-4 rounded-full font-black hover:scale-105 transition-all shadow-xl">
            Get A Quote Now <FaChevronRight />
          </Link>
        </div>
      </section>

      {/* --- 6. SEO FOOTER --- */}
      <footer className="py-16 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed max-w-5xl mx-auto uppercase tracking-widest">
            <strong>LAPX MSI Hub:</strong> Premiere <strong>MSI Laptop Service Center Indore</strong> located at <strong>LG-31 Orbit Mall</strong>. Specialized in <strong>MSI Katana screen replacement Indore</strong>, <strong>MSI motherboard repair Vijay Nagar</strong>, and <strong>MSI thermal pasting near Orbit Mall</strong>. Expert solutions for MSI Stealth, Raider, Titan, and Modern series. Serving AB Road, Vijay Nagar, and Bhawarkua. Trust LAPX for high-quality <strong>post-warranty MSI support</strong>.
          </p>
        </div>
      </footer>
      
    </main>
  );
}