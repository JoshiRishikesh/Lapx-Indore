"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaLaptop, FaTools, FaCheckCircle, FaWhatsapp, FaPhoneAlt, 
  FaMapMarkerAlt, FaChevronRight, FaClock, FaShieldAlt,
  FaMicrochip, FaBatteryFull, FaKeyboard, FaHdd
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

export default function DellServiceIndore() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#0076ce] selection:text-white">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-32 px-6 bg-linear-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial" animate="animate" variants={staggerContainer}
            className="relative z-10"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-blue-100 text-[#0076ce] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-200 shadow-sm">
              <FaCheckCircle /> Specialized Dell Post-Warranty Support
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Dell Laptop Service Center <span className="text-[#0076ce]">Indore | LAPX</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              Get expert <span className="font-semibold text-[#0076ce]">Dell laptop repair in Indore</span> for Inspiron, Vostro, XPS, and G-Series. Fast-track screen, battery, and motherboard solutions at <span className="font-bold text-slate-800">LG-31, Orbit Mall, Vijay Nagar</span>.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="tel:9111000757" className="flex items-center justify-center gap-3 bg-[#f97316] text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 group">
                Call Dell Expert <FaPhoneAlt className="text-sm group-hover:animate-bounce" />
              </Link>
              <Link href="https://wa.me/9111000757" className="flex items-center justify-center gap-3 bg-[#22c55e] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-200">
                <FaWhatsapp className="text-xl" /> WhatsApp Quote
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 inline-block shadow-sm">
              <p className="text-sm font-bold text-[#0076ce]">
                Dell Servicing & Diagnostics start at <span className="text-2xl text-[#f97316]">₹199*</span>
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
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#0076ce]">
                <FaMapMarkerAlt /> Visit Our Vijay Nagar Hub
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="shrink-0 text-[#f97316] mt-1"><FaMapMarkerAlt /></div>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    <strong>LG-31, Lower Ground Floor, Orbit Mall</strong><br />
                    Near C21 & Malhar Mall, AB Road, Vijay Nagar<br />
                    Indore, Madhya Pradesh 452010
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <span className="flex items-center gap-2 text-[10px] uppercase font-bold text-[#0076ce] mb-1">
                      <FaClock /> Timings
                    </span>
                    <span className="text-sm font-bold block">10:30 AM - 8:30 PM</span>
                    <span className="text-[10px] text-blue-400 font-semibold italic">Open All 7 Days</span>
                  </div>
                  <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex flex-col justify-center">
                    <span className="block text-[10px] uppercase font-bold text-green-500 mb-1">Status</span>
                    <span className="text-sm font-bold text-green-600 flex items-center gap-2">
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
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30" />
          </motion.div>
        </div>
      </section>

      {/* --- 2. DELL SERIES SECTION --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tight">Expert Service for All <span className="text-[#0076ce]">Dell Series</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Dell Inspiron', 'Dell Vostro', 'Dell XPS', 'Dell G-Series', 'Dell Latitude'].map((model) => (
              <div key={model} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:border-[#0076ce] hover:bg-white transition-all group cursor-default shadow-sm">
                <FaLaptop className="mx-auto text-2xl mb-3 text-slate-400 group-hover:text-[#0076ce] transition-colors" />
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Premium Dell Solutions Indore</h2>
            <div className="w-20 h-1.5 bg-[#f97316] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Dell Screen Replacement", d: "High-quality display panels for Dell laptops with broken or flickering screens. Same-day fitment.", i: <FaLaptop />, b: "Original Quality" },
              { t: "Battery & Charging", d: "Fixing 'Plugged in, not charging' issues and providing genuine Dell battery replacements.", i: <FaBatteryFull />, b: "Long-Life Spares" },
              { t: "Motherboard Repair", d: "Specialized chip-level motherboard repair for dead or water-damaged Dell laptops.", i: <FaMicrochip />, b: "90% Success Rate" },
              { t: "G-Series Cooling", d: "Advanced thermal paste and fan cleaning for Dell G3, G5, and G15 gaming laptops.", i: <FaTools />, b: "Peak Performance" },
              { t: "Keyboard & Touchpad", d: "Replacement of non-working keys or sticky touchpads for Vostro and Inspiron models.", i: <FaKeyboard />, b: "Precision Parts" },
              { t: "SSD Speed Boost", d: "Upgrade your slow Dell laptop with NVMe SSD and RAM for 10x faster performance.", i: <FaHdd />, b: "Instant Upgrade" }
            ].map((s, idx) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-[#0076ce] transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 text-[#0076ce] rounded-xl flex items-center justify-center text-xl mb-6">{s.i}</div>
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
      <section className="py-24 px-6 bg-[#0076ce] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Why LAPX is Indore's Trusted Dell Specialist</h2>
            <div className="space-y-6">
              {[
                "Genuine Grade Replacement Parts for Dell",
                "Fastest Turnaround for Screen & Keyboard",
                "No Repair, No Fee - Transparent Policy",
                "Indore's Expert Chip-Level Technicians",
                "Located at Central Hub - Vijay Nagar Orbit Mall"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-lg font-medium">
                  <FaCheckCircle className="text-blue-300 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl">
             <h3 className="text-sm font-bold mb-4 text-[#f97316] uppercase tracking-widest">LAPX Promise</h3>
             <p className="text-blue-50 leading-relaxed italic text-lg">
                "We specialize in <span className="text-white font-semibold">expert post-warranty Dell support in Indore</span>. From high-end XPS to business-class Vostro, we restore your device to peak factory standards."
             </p>
          </div>
        </div>
      </section>

      {/* --- 5. CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-linear-to-r from-[#0076ce] to-[#005a9e] rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-white text-[#0076ce] px-6 py-2 font-black uppercase text-xs rounded-bl-2xl">Value Offer</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">Full Dell Health Checkup</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Complete diagnostics, thermal cleaning, and OS optimization to prevent future motherboard failures.</p>
          <div className="text-5xl font-black mb-8 text-white">Only <span className="text-[#f97316]">₹199*</span></div>
          <Link href="https://wa.me/9111000757" className="inline-flex items-center gap-2 bg-white text-[#0076ce] px-10 py-4 rounded-full font-black hover:scale-105 transition-all shadow-xl">
            Get A Free Quote <FaChevronRight />
          </Link>
        </div>
      </section>

      {/* --- 6. SEO FOOTER --- */}
      <footer className="py-16 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed max-w-5xl mx-auto uppercase tracking-widest">
            <strong>LAPX Indore:</strong> The leading <strong>Dell Laptop Service Center Indore</strong> located at <strong>LG-31 Orbit Mall</strong>. Specialized in <strong>Dell screen replacement Indore</strong>, <strong>Dell motherboard repair Vijay Nagar</strong>, and <strong>Dell battery replacement near Orbit Mall</strong>. We provide professional repairs for Dell Inspiron, XPS, Vostro, and G-Series laptops. Serving all major areas including AB Road, Vijay Nagar, Palasia, and Bhawarkua. Trust us for high-quality <strong>post-warranty Dell laptop support</strong> in Indore.
          </p>
        </div>
      </footer>
      
    </main>
  );
}