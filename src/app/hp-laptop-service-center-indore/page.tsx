"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaLaptop, FaTools, FaCheckCircle, FaWhatsapp, FaPhoneAlt, 
  FaMapMarkerAlt, FaChevronRight, FaClock,
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

export default function HPServiceIndore() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#1e56a0] selection:text-white">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-32 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial" animate="animate" variants={staggerContainer}
            className="relative z-10"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-blue-100 text-[#1e56a0] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-200">
              <FaCheckCircle /> HP Specialized Tech Support
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              HP Laptop Repair in <span className="text-[#1e56a0]">Indore | LAPX</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              Professional <span className="font-semibold text-[#1e56a0]">post-warranty support</span> for HP Pavilion, Envy, Omen, and Victus. Expert screen replacement and motherboard repairs in <span className="font-bold text-slate-800">Vijay Nagar & AB Road</span>.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="tel:9111000757" className="flex items-center justify-center gap-3 bg-[#f97316] text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 group">
                Call HP Expert <FaPhoneAlt className="text-sm group-hover:animate-bounce" />
              </Link>
              <Link href="https://wa.me/9111000757" className="flex items-center justify-center gap-3 bg-[#22c55e] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-200">
                <FaWhatsapp className="text-xl" /> WhatsApp Quote
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-blue-100 inline-block shadow-sm">
              <p className="text-sm font-bold text-[#1e56a0]">
                HP General Servicing starts at <span className="text-2xl text-[#f97316]">₹199*</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side Info Card - Updated with LG-31 and New Timings */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative z-10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#1e56a0]">
                <FaMapMarkerAlt /> Visit Our Indore Hub
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="shrink-0 text-[#f97316] mt-1"><FaMapMarkerAlt /></div>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    <strong>LG-31, Lower Ground Floor, Orbit Mall (Arbitto Mall)</strong><br />
                    Near C21 & Malhar Mall, AB Road Vijay Nagar<br />
                    Indore, Madhya Pradesh 452010
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <span className="flex items-center gap-2 text-[10px] uppercase font-bold text-blue-500 mb-1">
                      <FaClock /> Working Hours
                    </span>
                    <span className="text-sm font-bold block">10:00 AM - 9:30 PM</span>
                    <span className="text-[10px] text-blue-400 font-semibold">Open All 7 Days</span>
                  </div>
                  <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex flex-col justify-center">
                    <span className="block text-[10px] uppercase font-bold text-green-500">Shop Status</span>
                    <span className="text-sm font-bold text-green-600 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Open Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40" />
          </motion.div>
        </div>
      </section>

      {/* --- 2. HP MODELS WE SERVICE --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 italic">Expert Service for All <span className="text-[#1e56a0]">HP Series</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['HP Pavilion', 'HP Envy', 'HP Omen', 'HP Victus', 'HP ProBook'].map((model) => (
              <div key={model} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:border-[#1e56a0] hover:bg-white transition-all group cursor-default shadow-sm">
                <FaLaptop className="mx-auto text-2xl mb-3 text-slate-400 group-hover:text-[#1e56a0] transition-colors" />
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">Comprehensive HP Solutions</h2>
            <div className="w-20 h-1.5 bg-[#f97316] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Screen Replacement", d: "Fix flickering, cracked, or dim IPS/LED panels for all HP models.", i: <FaLaptop />, b: "100% Dead Pixel Guarantee" },
              { t: "Battery & Power", d: "Resolve 'Plugged in, not charging' and bulging battery issues fast.", i: <FaBatteryFull />, b: "OEM-Grade Spares" },
              { t: "Motherboard Repair", d: "Micro-soldering for dead laptops and complex power-circuit issues.", i: <FaMicrochip />, b: "No Fix, No Fee Policy" },
              { t: "Overheating Fix", d: "Deep cleaning and premium thermal paste for HP Omen & Victus.", i: <FaTools />, b: "Improves Gaming FPS" },
              { t: "Keyboard & Touchpad", d: "Sticky or unresponsive key replacement with tactile feedback.", i: <FaKeyboard />, b: "Water Damage Specialists" },
              { t: "Data Recovery", d: "Secure file retrieval from crashed SSDs or corrupted HDDs.", i: <FaHdd />, b: "100% Data Privacy" }
            ].map((s, idx) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-[#1e56a0] transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 text-[#1e56a0] rounded-xl flex items-center justify-center text-xl mb-6">{s.i}</div>
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

      {/* --- 4. WHY CHOOSE LAPX (DARK) --- */}
      <section className="py-24 px-6 bg-[#1e56a0] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white">Why Indore Trusts LAPX for HP Repairs</h2>
            <div className="space-y-6">
              {[
                "HP-Specific Diagnostic Tooling",
                "2-Hour Express Fix for minor issues",
                "Transparent Billing - Quote before repair",
                "30-90 Days Comprehensive Warranty",
                "Doorstep Pickup & Drop available in Indore"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-lg font-medium">
                  <FaCheckCircle className="text-green-400 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
             <h3 className="text-2xl font-bold mb-4 text-orange-400 uppercase tracking-widest text-sm">Our Guarantee</h3>
             <p className="text-blue-100 leading-relaxed italic text-lg">
                "We specialize in <span className="text-white font-semibold">post-warranty HP laptop support</span>, ensuring your premium machines like Spectre and Envy receive the precision they deserve without the long service center wait times."
             </p>
          </div>
        </div>
      </section>

      {/* --- 5. PRICING OFFER SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1e56a0] to-[#2b74d6] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#f97316] text-white px-6 py-2 font-black uppercase text-xs rounded-bl-2xl">Limited Time Offer</div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Complete HP Internal Servicing</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">Dust removal, port cleaning, fan lubrication, and thermal health checkup for optimal performance.</p>
            <div className="text-5xl font-black mb-8">Just <span className="text-[#f97316]">₹199*</span></div>
            <Link href="https://wa.me/9111000757" className="inline-flex items-center gap-2 bg-white text-[#1e56a0] px-10 py-4 rounded-full font-black hover:scale-105 transition-transform shadow-lg">
              Claim This Offer <FaChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* --- 6. SEO FOOTER CONTENT --- */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed max-w-5xl mx-auto uppercase tracking-wide">
            <strong>LAPX Indore:</strong> Your premier destination for <strong>HP Laptop Repair Indore</strong>. We specialize in <strong>HP laptop screen replacement Indore</strong>, <strong>HP charging port repair Indore</strong>, and <strong>HP motherboard repair Indore</strong> at <strong>LG-31 Orbit Mall</strong>. Whether you need an <strong>HP laptop battery replacement in Vijay Nagar</strong> or a <strong>keyboard fix near C21 Mall</strong>, our technicians provide the fastest turnaround in the city. Supporting all models including HP Pavilion, Victus, and Omen. Providing specialized <strong>post-warranty support</strong> for AB Road, RNT Marg, and Bhawarkua areas.
          </p>
        </div>
      </section>
      
    </main>
  );
}