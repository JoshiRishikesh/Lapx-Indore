"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaLaptop, FaTools, FaCheckCircle, FaWhatsapp, FaPhoneAlt, 
  FaMapMarkerAlt, FaChevronRight, FaClock, FaGamepad,
  FaMicrochip, FaBatteryFull, FaKeyboard, FaSnowflake, FaHdd, FaStar, FaShieldAlt
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
              <FaCheckCircle /> Lenovo Specialized Tech Hub
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Lenovo Laptop Service Center <span className="text-[#1e56a0]">Indore | LAPX</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              Professional <span className="font-semibold text-[#1e56a0]">post-warranty support</span> for IdeaPad, ThinkPad, Yoga, and Legion series. Expert motherboard and screen fixes at <span className="font-bold text-slate-800">LG-31, Orbit Mall</span>.
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
                Lenovo Performance Tune-up starts at <span className="text-2xl text-[#f97316]">₹199*</span>
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
                <FaMapMarkerAlt /> Visit Our Lenovo Hub
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="shrink-0 text-[#f97316] mt-1"><FaMapMarkerAlt /></div>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    <strong>LG-31, Lower Ground Floor, Orbit Mall</strong><br />
                    Near C21 & Malhar Mall, AB Road Vijay Nagar<br />
                    Indore, Madhya Pradesh 452010
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="flex items-center gap-2 text-[10px] uppercase font-bold text-red-500 mb-1">
                      <FaClock /> Timings
                    </span>
                    <span className="text-sm font-bold block">10:00 AM - 9:30 PM</span>
                    <span className="text-[10px] text-slate-400 font-semibold italic">Open All 7 Days</span>
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
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-20" />
          </motion.div>
        </div>
      </section>

      {/* --- 2. LENOVO SERIES GRID --- */}
      <section className="py-20 px-6 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 uppercase italic tracking-tighter">Specialized Care for <span className="text-red-600">Lenovo Lineup</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'IdeaPad', icon: <FaLaptop /> },
              { name: 'ThinkPad', icon: <FaShieldAlt /> },
              { name: 'Legion Gaming', icon: <FaGamepad /> },
              { name: 'Yoga / Flex', icon: <FaLaptop /> },
              { name: 'LOQ Series', icon: <FaGamepad /> }
            ].map((model) => (
              <div key={model.name} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:border-red-500 hover:bg-white transition-all group cursor-default shadow-sm">
                <div className="mx-auto text-2xl mb-3 text-slate-400 group-hover:text-red-500 transition-colors">{model.icon}</div>
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Lenovo Expert Solutions</h2>
            <div className="w-20 h-1.5 bg-[#f97316] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Lenovo Screen Fix", d: "Cracked IdeaPad or ThinkPad screen? Fast replacement for Slim, OLED, and Touch panels.", i: <FaLaptop />, b: "Crystal Clear Display" },
              { t: "Legion Thermal Pro", d: "Thermal repasting and fan cleaning for high-end Legion & LOQ gaming rigs.", i: <FaSnowflake />, b: "Max Cooling" },
              { t: "Motherboard Recovery", d: "Chip-level repair for dead or water-damaged Lenovo motherboards. Expert soldering.", i: <FaMicrochip />, b: "Advanced Circuit Fix" },
              { t: "Original Battery Swap", d: "Solve 'Battery Not Found' or fast draining issues with genuine grade Lenovo cells.", i: <FaBatteryFull />, b: "Original Grade" },
              { t: "Keyboard & Touchpad", d: "Fix non-working keys or touchpad ghost clicks for ThinkPad and IdeaPad models.", i: <FaKeyboard />, b: "OEM Quality" },
              { t: "Storage Speed Boost", d: "Upgrade your Lenovo laptop with Gen4 NVMe SSDs and RAM for ultra-fast boot times.", i: <FaHdd />, b: "10x Faster" }
            ].map((s, idx) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-red-500 transition-all"
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

      {/* --- 4. COMMON PROBLEMS (SEO FOCUS) --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tighter">Common <span className="text-[#1e56a0]">Lenovo Issues</span> We Fix</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Lenovo laptop stuck on 'Automatic Repair' loop",
              "Legion gaming laptop overheating & loud fan noise",
              "ThinkPad keyboard not working or keys falling off",
              "IdeaPad screen flickering or horizontal lines",
              "Lenovo laptop not charging (DC jack or IC issue)",
              "Hinge repair and body replacement for IdeaPad Slim",
              "Dead laptop or blue screen (BSOD) errors"
            ].map((problem, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <FaTools className="text-red-500 shrink-0" />
                <p className="text-slate-700 font-medium">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. TESTIMONIALS --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tighter">Trusted By Lenovo Users</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sandeep Gupta", area: "Vijay Nagar", text: "Got my Lenovo Legion serviced at LAPX. The heating issue is completely gone. Very professional team." },
              { name: "Megha Jain", area: "LIG Square", text: "They fixed my ThinkPad motherboard which was declared dead by other shops. Truly expert technicians." },
              { name: "Rohit Verma", area: "Palasia", text: "Reasonable price and fast screen replacement for my IdeaPad. Best Lenovo repair in Indore." }
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

      {/* --- 6. WHY CHOOSE SECTION (DARK) --- */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-white">Why Lenovo Owners Choose LAPX Indore</h2>
            <div className="space-y-6">
              {[
                "Certified Chip-Level Lenovo Technicians",
                "Specialized Tools for Yoga & ThinkPad Repair",
                "Post-Warranty Support at Affordable Rates",
                "Genuine Grade Replacement Parts",
                "Convenient Location at AB Road Vijay Nagar"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-lg font-medium">
                  <FaCheckCircle className="text-red-500 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl text-center">
             <h3 className="font-bold mb-4 text-orange-400 uppercase tracking-widest text-sm text-center">Our Commitment</h3>
             <p className="text-slate-300 leading-relaxed italic text-lg text-center">
               &quot;We provide reliable <span className="text-white font-semibold">post-warranty support</span> for the entire Lenovo ecosystem. From durable ThinkPads to powerful Legion rigs, we ensure factory-level restoration.&quot;
             </p>
             <Link href="https://wa.me/9111000757" className="mt-8 inline-flex items-center gap-2 bg-[#f97316] text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all">
               Get Repair Quote <FaChevronRight />
             </Link>
          </div>
        </div>
      </section>

      {/* --- 7. PRICING CTA --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-linear-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-white text-red-600 px-6 py-2 font-black uppercase text-xs rounded-bl-2xl">Special Deal</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white uppercase italic">Complete Lenovo Service</h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">Protect your motherboard from short circuits. Get internal cleaning, fan lubrication, and health check today.</p>
          <div className="text-5xl font-black mb-8 text-white">Only <span className="text-orange-400">₹199*</span></div>
          <Link href="tel:9111000757" className="inline-flex items-center gap-2 bg-white text-red-600 px-10 py-4 rounded-full font-black hover:scale-105 transition-all shadow-xl">
            Book Service Now <FaChevronRight />
          </Link>
        </div>
      </section>

      {/* --- 8. SEO FOOTER --- */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed max-w-5xl mx-auto uppercase tracking-widest">
            <strong>LAPX Indore:</strong> Your trusted <strong>Lenovo Laptop Service Center Indore</strong> at <strong>LG-31 Orbit Mall</strong>. Specialized in <strong>Lenovo screen replacement Indore</strong>, <strong>Lenovo Legion motherboard repair Indore</strong>, and <strong>ThinkPad battery replacement near Vijay Nagar</strong>. Fast-track repairs for IdeaPad Slim, LOQ, Yoga, and Lenovo Flex. Serving AB Road, Palasia, Bhawarkua, and Rajwada. Best <strong>post-warranty Lenovo support</strong> in Madhya Pradesh.
          </p>
        </div>
      </section>
      
    </main>
  );
}