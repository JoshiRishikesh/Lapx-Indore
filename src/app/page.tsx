"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  FaMicrochip, FaBatteryFull, FaDesktop, FaKeyboard, FaHdd, 
  FaTools, FaMapMarkerAlt, FaPhoneAlt, FaChevronRight, 
  FaCheckCircle, FaInstagram, FaFacebook, FaYoutube, FaStar, FaExternalLinkAlt,
  FaLaptopMedical, FaUserCheck
} from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function LapXHomePage() {
  const brands = ["Dell", "HP", "Asus", "Acer", "Lenovo", "MSI", "Apple"];
  const indoreAreas = ['Vijay Nagar', 'Palasia', 'Bhawarkua', 'AB Road', 'RNT Marg', 'Saket', 'LIG Square', 'Annapurna', 'Rau', 'Rajwada'];

  return (
    <div className="bg-white selection:bg-[#1e56a0] selection:text-white">
      
      {/* --- 1. HERO SECTION (SEO Optimized H1) --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 px-6 bg-linear-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#1e56a0] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <FaUserCheck /> Top-Rated Laptop Repair in Indore
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1e56a0] leading-[1.1] mb-6 tracking-tight">
              Best <span className="text-slate-800">Laptop Service Center</span> in Indore – Dell, HP, Asus, Acer
            </h1>
            <p className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              Searching for a <strong>Dell service center near me</strong> or <strong>HP laptop repair in Indore</strong>? LapX provides expert <strong>post-warranty support</strong> for all brands at Orbit Mall, Vijay Nagar. Fast, reliable, and starting at just ₹199*.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="tel:9111000757" className="inline-flex items-center px-8 py-4 bg-[#f97316] text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 uppercase tracking-wide text-sm group">
                Call Laptop Expert <FaPhoneAlt className="ml-3 group-hover:animate-bounce" />
              </Link>
              <Link href="https://wa.me/9111000757" className="inline-flex items-center px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all text-sm uppercase tracking-wide">
                Get Free Quote
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t pt-8 border-slate-100">
              <div>
                <p className="text-2xl font-black text-[#1e56a0]">10k+</p>
                <p className="text-xs font-bold text-slate-400 uppercase">Laptops Repaired</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#1e56a0]">4.9/5</p>
                <p className="text-xs font-bold text-slate-400 uppercase">Google Rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative group">
            <div className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 relative z-10">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" /> Visit LapX Indore Hub
              </h3>
              <div className="space-y-6">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-sm font-bold text-slate-800 leading-relaxed">
                    LG-31, Lower Ground Floor, Orbit Mall<br/>
                    Near C21 & Malhar Mall, AB Road<br/>
                    <span className="text-[#1e56a0]">Vijay Nagar, Indore, MP 452010</span>
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-2xl text-center">
                    <p className="text-[10px] font-bold text-blue-500 uppercase">Hours</p>
                    <p className="text-sm font-bold">10:30 - 20:30</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-2xl text-center">
                    <p className="text-[10px] font-bold text-green-500 uppercase">Status</p>
                    <p className="text-sm font-bold">Open 7 Days</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
      </section>

      {/* --- 2. KEYWORD STUFFING BRAND BAR --- */}
      <section className="py-12 bg-white overflow-hidden border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Specialized Brand Support In Indore</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity cursor-default">
            {brands.map((brand) => (
              <span key={brand} className="text-xl md:text-3xl font-black text-slate-800 tracking-tighter group hover:text-[#1e56a0] transition-colors">
                {brand}<span className="text-[10px] align-top text-[#f97316] font-bold">®</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES (Keyword Heavy Descriptions) --- */}
      <section id="services" className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-[#f97316] font-bold uppercase tracking-widest text-xs mb-4">Certified Hardware Labs</h2>
          <p className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Premium Repair Solutions</p>
          <p className="text-slate-500 max-w-2xl mx-auto italic">Expert <strong>Dell screen replacement Indore</strong>, HP motherboard repair, and Asus liquid damage restoration near you.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { 
              title: "Dell & HP Screen Fix", icon: <FaDesktop />, 
              desc: "Best price for Dell Inspiron and HP Pavilion LED/LCD screen replacement in Indore. Same-day service available." 
            },
            { 
              title: "Asus & Acer Battery", icon: <FaBatteryFull />, 
              desc: "Genuine battery replacement for Asus ROG, TUF, and Acer Nitro gaming laptops with warranty." 
            },
            { 
              title: "Laptop Keyboard Repair", icon: <FaKeyboard />, 
              desc: "Fixing ghost typing and liquid damage for Lenovo and MSI keyboards at Orbit Mall Indore." 
            },
            { 
              title: "Chip-Level Motherboard", icon: <FaMicrochip />, 
              desc: "Advanced micro-soldering for Apple MacBook and Windows laptops. High success rate for dead laptops." 
            },
            { 
              title: "SSD & RAM Upgrades", icon: <FaHdd />, 
              desc: "Speed up your slow laptop with high-speed NVMe SSD upgrades. Fast boot-up in under 10 seconds." 
            },
            { 
              title: "Gaming Laptop Service", icon: <FaLaptopMedical />, 
              desc: "Deep thermal cleaning and liquid metal application for MSI, Omen, and Alienware gaming rigs." 
            }
          ].map((s, i) => (
            <motion.div 
              key={i} variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}
              className="p-10 bg-white border border-slate-200 rounded-3xl hover:shadow-2xl hover:border-[#1e56a0] transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 text-[#1e56a0] rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-[#1e56a0] group-hover:text-white transition-all transform group-hover:rotate-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="flex items-center gap-2 text-[10px] font-black text-green-600 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full w-fit">
                <FaCheckCircle /> 100% Genuine Parts
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4. THE "NEAR ME" TRUST SECTION --- */}
      <section className="py-24 px-6 bg-[#1e56a0] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">Indore's Trusted <br/><span className="text-orange-400">Multi-Brand</span> Tech Hub</h2>
            <div className="space-y-6">
              {[
                { t: "Lenovo Service Center near Vijay Nagar", d: "Walking distance from C21 and Malhar Mall. Easy access for all Lenovo users." },
                { t: "Certified MSI & Acer Support", d: "Specialized gaming repair division for MSI Katana and Acer Predator series." },
                { t: "Best Asus Service Center Indore", d: "Expert technicians for Asus Zenbook and Vivobook hinge and screen repairs." },
                { t: "Post-Warranty Dell & HP Specialist", d: "Save up to 40% compared to official centers with same factory-grade quality." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-1 text-orange-400 group-hover:bg-orange-400 group-hover:text-white transition-all">
                    <FaTools size={14} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.t}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed opacity-80">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-slate-900 text-center border-8 border-white/10">
              <div className="flex justify-center text-yellow-400 text-3xl mb-6">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-xl font-bold mb-6 italic leading-relaxed">
                "LapX is the best <strong>laptop repair shop near me</strong> in Indore. They fixed my HP laptop motherboard in 24 hours at a very reasonable price."
              </p>
              <p className="font-black text-sm uppercase tracking-widest text-[#1e56a0]">— Rahul Sharma, Vijay Nagar</p>
              <Link href="https://search.google.com/local/writereview?placeid=ChIJg3l2lGb9YjkR0U_e3MSkOzs" className="mt-8 inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-black transition-all uppercase tracking-widest">
                Read Reviews <FaExternalLinkAlt size={10} />
              </Link>
            </div>
          </div>
        </div>
        {/* Subtle background tech pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </section>

      {/* --- 5. AREAS & SEO FOOTER (Keyword Cloud) --- */}
      <section className="py-20 px-6 bg-slate-50 border-b">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[#1e56a0] font-black text-2xl mb-8 uppercase tracking-tighter">Service Available Across Indore</h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-slate-500 font-bold text-xs">
            {indoreAreas.map(area => (
              <span key={area} className="hover:text-[#f97316] transition-colors cursor-default underline decoration-slate-200 underline-offset-4">
                Laptop Service Center in {area}
              </span>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-slate-200">
            <p className="text-[10px] text-slate-400 leading-loose uppercase tracking-[0.2em] font-medium text-justify md:text-center">
              <strong>LAPX INDORE SEO TAGS:</strong> DELL SERVICE CENTER INDORE • HP LAPTOP REPAIR INDORE • ASUS SERVICE CENTER INDORE VIJAY NAGAR • 
              ACER SERVICE CENTER NEAR ME • LENOVO LAPTOP REPAIR INDORE • MSI SERVICE CENTER INDORE • APPLE MACBOOK REPAIR INDORE • 
              BEST LAPTOP REPAIRING NEAR ORBIT MALL • LAPTOP MOTHERBOARD REPAIR INDORE • LAPTOP SCREEN REPLACEMENT INDORE PRICE • 
              GAMING LAPTOP REPAIR INDORE • SSD UPGRADE INDORE • VIJAY NAGAR LAPTOP REPAIR • PALASIA LAPTOP SERVICE • BHAWARKUA LAPTOP SUPPORT
            </p>
          </div>
        </div>
      </section>

      {/* --- 6. FINAL CTA --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Ready to fix your laptop?</h2>
          <p className="text-slate-500 mb-12 text-lg">Visit us at <strong>Orbit Mall</strong> or call for doorstep pickup across Indore.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="tel:9111000757" className="bg-[#1e56a0] text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-blue-100">
              CALL 91110-00757
            </Link>
            <Link href="#contact" className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-slate-200">
              FIND OUR SHOP
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}