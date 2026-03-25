"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaLaptop, FaTools, FaCheckCircle, FaWhatsapp, FaPhoneAlt, 
  FaMapMarkerAlt, FaChevronRight, FaClock, FaGamepad,
  FaMicrochip, FaBatteryFull, FaKeyboard, FaSnowflake, FaHdd, FaStar
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

export default function AcerServiceIndore() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#1e56a0] selection:text-white">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-32 px-6 bg-linear-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial" animate="animate" variants={staggerContainer}
            className="relative z-10"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-blue-100 text-[#1e56a0] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-200 shadow-sm">
              <FaCheckCircle /> ACER Specialized Tech Hub
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Acer Laptop Service Center in <span className="text-[#1e56a0]">Indore | LAPX</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              Professional <strong>Acer laptop repair in Indore</strong> with expert technicians. We provide <strong>post-warranty support</strong> for Aspire, Nitro, Swift & Predator series at <span className="font-bold text-slate-800">LG-31, Orbit Mall</span>.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="tel:9111000757" className="flex items-center justify-center gap-3 bg-[#f97316] text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 group">
                Call Acer Expert <FaPhoneAlt className="text-sm group-hover:animate-bounce" />
              </Link>
              <Link href="https://wa.me/9111000757?text=I%20need%20repair%20service%20for%20my%20Acer%20laptop" className="flex items-center justify-center gap-3 bg-[#22c55e] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-200">
                <FaWhatsapp className="text-xl" /> WhatsApp Quote
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 inline-block shadow-sm">
              <p className="text-sm font-bold text-[#1e56a0]">
                Acer Laptop Servicing starts at <span className="text-2xl text-[#f97316]">₹199*</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side Info Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative z-10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#1e56a0]">
                <FaMapMarkerAlt /> Visit Our Acer Hub
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="shrink-0 text-[#f97316] mt-1"><FaMapMarkerAlt /></div>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    <strong>Lower Ground floor, LG-31, Orbit Mall</strong><br />
                    Near C21 & Malhar Mall, AB Road Vijay Nagar<br />
                    Indore, Madhya Pradesh 452010
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <span className="flex items-center gap-2 text-[10px] uppercase font-bold text-[#1e56a0] mb-1">
                      <FaClock /> Timings
                    </span>
                    <span className="text-sm font-bold block">10:00 AM - 9:30 PM</span>
                    <span className="text-[10px] text-blue-400 font-semibold italic">Open All 7 Days</span>
                  </div>
                  <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex flex-col justify-center">
                    <span className="block text-[10px] uppercase font-bold text-green-500 mb-1">Status</span>
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
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30" />
          </motion.div>
        </div>
      </section>

      {/* --- 2. ACER MODELS GRID --- */}
      <section className="py-20 px-6 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 uppercase italic tracking-tighter">Specialized Care for <span className="text-[#1e56a0]">Acer Lineup</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Acer Aspire', icon: <FaLaptop /> },
              { name: 'Acer Nitro', icon: <FaGamepad /> },
              { name: 'Acer Swift', icon: <FaLaptop /> },
              { name: 'Acer Predator', icon: <FaGamepad /> },
              { name: 'Acer Spin', icon: <FaLaptop /> }
            ].map((model) => (
              <div key={model.name} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:border-[#1e56a0] hover:bg-white transition-all group cursor-default shadow-sm">
                <div className="mx-auto text-2xl mb-3 text-slate-400 group-hover:text-[#1e56a0] transition-colors">{model.icon}</div>
                <h3 className="font-bold text-sm text-slate-800">{model.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Acer Precision Solutions</h2>
            <div className="w-20 h-1.5 bg-[#f97316] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Acer Screen Replacement", d: "Cracked Aspire or Swift screen? Get factory-standard IPS/LED panel swaps in Indore.", i: <FaLaptop />, b: "Vivid Clarity" },
              { t: "Nitro/Predator Thermal Fix", d: "Eliminate gaming lag with deep fan cleaning and premium thermal paste application.", i: <FaSnowflake />, b: "Boost FPS" },
              { t: "Chip-Level Board Repair", d: "Micro-soldering for dead motherboards and power circuit issues. Acer specialists.", i: <FaMicrochip />, b: "Advanced Fix" },
              { t: "Acer Battery & Charging", d: "Fix charging port loose connections or bulging batteries for all Acer series.", i: <FaBatteryFull />, b: "Genuine Parts" },
              { t: "Acer Keyboard Repair", d: "Replace sticky keys or non-functional Nitro RGB keyboards with precision.", i: <FaKeyboard />, b: "Tactile Restored" },
              { t: "SSD & RAM Upgrades", d: "Make your Acer laptop 10x faster with high-speed NVMe and RAM expansions.", i: <FaHdd />, b: "Instant Speed" }
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

      {/* --- 4. COMMON PROBLEMS SECTION --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tighter">Common <span className="text-[#1e56a0]">Acer Issues</span> We Fix</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Acer laptop not turning on (Dead Motherboard)",
              "Acer Nitro/Predator overheating during gaming",
              "Acer laptop screen flickering or lines on display",
              "Acer battery draining fast or not charging",
              "Keyboard keys not working or typing multiple letters",
              "Laptop hinges broken or body damage fix",
              "Slow performance and frequent hanging issues"
            ].map((problem, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <FaTools className="text-[#1e56a0] shrink-0" />
                <p className="text-slate-700 font-medium">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. TESTIMONIALS --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tighter">What Acer Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Sharma", area: "Vijay Nagar", text: "Best Acer repair in Indore. My Nitro gaming laptop was overheating and they fixed it within 3 hours." },
              { name: "Priya Verma", area: "Palasia", text: "Affordable and fast service. Got my Acer screen replaced the same day at Orbit Mall center." },
              { name: "Amit Patel", area: "AB Road", text: "Professional technicians. LAPX is definitely the best Acer service center near Vijay Nagar." }
            ].map((t, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="flex text-orange-400 mb-4 gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{t.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. FAQ SECTION --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tighter">Acer Service FAQ</h2>
          <div className="space-y-8">
            {[
              { q: "What is the cost of Acer laptop repair in Indore?", a: "Basic servicing starts at ₹199. For screen or motherboard repair, we provide a free estimate after diagnosis." },
              { q: "Do you provide same-day Acer laptop repair?", a: "Yes, 80% of repairs like screen, battery, and cleaning are done on the same day." },
              { q: "Is warranty provided on Acer spare parts?", a: "We provide 30 to 90 days warranty on most repairs and genuine compatible parts." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-6">
                <h3 className="font-bold text-lg mb-2 text-slate-900 flex items-center gap-2">
                  <span className="text-[#f97316]">Q.</span> {faq.q}
                </h3>
                <p className="text-slate-600 pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. WHY CHOOSE SECTION (DARK) --- */}
      <section className="py-24 px-6 bg-[#1e56a0] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Why Indore Trusts LAPX for Acer Repairs</h2>
            <div className="space-y-6">
              {[
                "Acer Certified Diagnostic Tools",
                "Same-Day Component Level Fixing",
                "Transparent Pricing (No Hidden Costs)",
                "Support for Old & New Acer Models",
                "Located in the heart of Vijay Nagar"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-lg font-medium">
                  <FaCheckCircle className="text-blue-300 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl text-center">
             <h3 className="font-bold mb-4 text-orange-400 uppercase tracking-widest text-sm">Our Guarantee</h3>
             <p className="text-blue-50 leading-relaxed italic text-lg">
               &quot;We bridge the gap for <span className="text-white font-semibold">post-warranty Acer users</span>. From daily Aspire laptops to high-end Predator rigs, we deliver factory-grade precision.&quot;
             </p>
             <Link href="tel:9111000757" className="mt-8 inline-flex items-center gap-2 bg-[#f97316] text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all">
               Call Expert Now
             </Link>
          </div>
        </div>
      </section>

      {/* --- 8. SEO FOOTER --- */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed max-w-5xl mx-auto uppercase tracking-widest">
            <strong>LAPX Indore:</strong> The premier <strong>Acer Laptop Service Center Indore</strong> at <strong>LG-31 Orbit Mall</strong>. Specializing in <strong>Acer screen replacement Indore</strong>, <strong>Acer Nitro motherboard repair Indore</strong>, and <strong>Aspire laptop battery replacement near Vijay Nagar</strong>. Fast-track repairs for Swift, Predator, and Acer Spin. Serving AB Road, Palasia, and Bhawarkua. Your trusted destination for <strong>Acer laptop repair near me</strong> in Indore.
          </p>
        </div>
      </section>
      
    </main>
  );
}