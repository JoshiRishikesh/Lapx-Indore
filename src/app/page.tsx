"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  FaMicrochip, FaBatteryFull, FaDesktop, FaKeyboard, FaHdd, 
  FaTools, FaMapMarkerAlt, FaPhoneAlt, FaChevronRight, 
  FaCheckCircle, FaInstagram, FaFacebook, FaYoutube, FaStar, FaExternalLinkAlt
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
  return (
    <div className="bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1e56a0] leading-tight mb-6">
              Laptop Repair & Service Center in Indore – <span className="text-slate-700">Dell | HP | Asus | Acer</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              LapX is your trusted partner for professional <strong>Laptop Repair in Indore</strong>. We provide fast, affordable, and expert doorstep services for all major brands at <strong>Orbit Mall, LG-31</strong>.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-green-100 border border-green-200 px-6 py-3 rounded-lg">
                <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-1">Affordable Servicing</p>
                <p className="text-2xl font-bold text-green-800">Starting ₹199*</p>
              </div>
              <div className="bg-blue-100 border border-blue-200 px-6 py-3 rounded-lg">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Quality Assurance</p>
                <p className="text-2xl font-bold text-blue-800">Post Warranty Support</p>
              </div>
            </div>

            <Link href="tel:9111000757" className="inline-flex items-center px-10 py-5 bg-[#f97316] text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 uppercase tracking-wide text-sm">
              Book Your Repair Now <FaChevronRight className="ml-3" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="hidden lg:block bg-white p-8 rounded-2xl shadow-2xl border border-slate-100">
            <div className="flex items-center gap-4 mb-6 border-b pb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">L</div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">LapX Indore Hub</h3>
                <p className="text-sm text-slate-500">Certified Hardware Engineering Lab</p>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <FaCheckCircle className="text-green-500" /> 9111000757 (Direct Line)
              </li>
              <li className="flex items-start gap-3 text-slate-700 font-medium">
                <FaCheckCircle className="text-green-500 mt-1" /> 
                <span>LG-31, Orbit Mall, Vijay Nagar<br/><span className="text-xs text-slate-400 font-normal italic">Near C21 & Malhar Mall</span></span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <FaCheckCircle className="text-green-500" /> Open: 10:30 AM - 8:30 PM
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-[#1e56a0] font-bold uppercase tracking-[0.2em] text-sm mb-4">Professional Solutions</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Laptop Repair Services</p>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { 
              title: "Screen Replacement", icon: <FaDesktop />, 
              desc: "Genuine high-quality panel replacements for Dell, HP, Asus, and Acer models. Fast 1-day turnaround." 
            },
            { 
              title: "Battery Solutions", icon: <FaBatteryFull />, 
              desc: "Restore battery life with OEM-standard replacements. Safe, long-lasting, and performance-certified." 
            },
            { 
              title: "Keyboard Repair", icon: <FaKeyboard />, 
              desc: "Quick fixes for unresponsive keys and liquid-damaged keyboards for all major laptop brands." 
            },
            { 
              title: "Motherboard Recovery", icon: <FaMicrochip />, 
              desc: "Expert chip-level motherboard diagnostics and micro-soldering for dead laptops or logic failures." 
            },
            { 
              title: "Secure Data Recovery", icon: <FaHdd />, 
              desc: "Professional retrieval of lost data from crashed hard drives and corrupted SSDs with 100% privacy." 
            },
            { 
              title: "Advanced Servicing", icon: <FaTools />, 
              desc: "Comprehensive internal cleaning and thermal paste application to stop overheating and improve speed." 
            }
          ].map((s, i) => (
            <motion.div 
              key={i} variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}
              className="p-10 bg-white border border-slate-200 rounded-xl hover:shadow-xl hover:border-blue-300 transition-all group shadow-sm"
            >
              <div className="w-14 h-14 bg-blue-50 text-[#1e56a0] rounded-lg flex items-center justify-center text-2xl mb-8 group-hover:bg-[#1e56a0] group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{s.desc}</p>
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest border-t pt-4">Certified Repair Service</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- BRANDS SECTION --- */}
      <section id="brands" className="py-16 border-y bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-10">Brands We Service in Indore</h2>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 grayscale opacity-60">
            {['DELL', 'HP', 'ASUS', 'ACER', 'LENOVO'].map((brand) => (
              <span key={brand} className="text-2xl md:text-3xl font-black text-slate-700 tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section id="about" className="py-24 px-6 bg-[#1e56a0] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5 font-extrabold mb-10 leading-tight">Why Choose LapX?</h2>
            <div className="grid gap-8">
              {[
                { t: "Doorstep Service", d: "Convenient home or office pickup and delivery available across Indore." },
                { t: "Fast & Affordable", d: "Competitive pricing and rapid turnaround times to get you back to work." },
                { t: "Expert Technicians", d: "Certified hardware engineers with 10+ years of micro-soldering experience." },
                { t: "Reliable Support", d: "Complete post-warranty support and genuine part replacements." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 text-[10px]">✔</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 tracking-wide">{item.t}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-12 rounded-2xl shadow-2xl text-slate-900 text-center relative overflow-hidden">
            <div className="flex justify-center text-yellow-400 text-3xl mb-4">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-2xl font-bold mb-4 italic">"Best Service in Vijay Nagar"</p>
            <p className="text-slate-500 leading-relaxed mb-8">
              "Professional team. They fixed my Asus motherboard which other centers said was unrepairable. Highly recommend for Dell and HP laptop service in Indore."
            </p>
            <Link href="https://search.google.com/local/writereview?placeid=ChIJg3l2lGb9YjkR0U_e3MSkOzs" className="text-blue-600 font-bold uppercase text-xs tracking-widest hover:underline inline-flex items-center gap-2">
              Read Google Reviews <FaExternalLinkAlt className="text-[10px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- AREAS SERVED --- */}
      <section className="py-16 px-6 bg-slate-50 border-b text-center">
        <h2 className="text-[#1e56a0] font-bold text-xl mb-6">Areas We Serve in Indore</h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-slate-500 font-medium text-sm">
          {['Vijay Nagar', 'Palasia', 'Bhawarkua', 'AB Road', 'RNT Marg', 'Saket', 'LIG Square', 'Annapurna'].map(area => (
            <span key={area}>• {area}</span>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <h2 className="text-4xl font-extrabold text-[#1e56a0] mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <FaMapMarkerAlt className="text-orange-500 text-2xl mt-1" />
                <div>
                  <p className="font-bold text-slate-800 text-lg mb-1">LapX Service Center</p>
                  <div className="text-slate-500 leading-relaxed italic">
                    <p>Lower Ground Floor, LG-31, Orbit Mall (Arbitto Mall)</p>
                    <p>Near C21 & Malhar Mall, AB Road Vijay Nagar</p>
                    <p>Indore, MP 452010</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <FaPhoneAlt className="text-green-500 text-2xl" />
                <Link href="tel:9111000757" className="text-3xl font-black text-[#1e56a0] hover:underline">
                  91110-00757
                </Link>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <Link href="https://www.instagram.com/lapx_laptop_repair_indore/" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-[#1e56a0] hover:bg-blue-600 hover:text-white transition-all"><FaInstagram /></Link>
              <Link href="https://www.facebook.com/people/Lapx-indore/100083816658201/" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-[#1e56a0] hover:bg-blue-600 hover:text-white transition-all"><FaFacebook /></Link>
              <Link href="https://www.youtube.com/@lapxindore" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-[#1e56a0] hover:bg-red-600 hover:text-white transition-all"><FaYoutube /></Link>
            </div>
          </motion.div>

          <div className="bg-white p-10 rounded-2xl border-2 border-slate-100 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 uppercase text-sm tracking-widest">Expert Brand Support</h3>
            <ul className="grid gap-4 font-semibold text-slate-500 text-sm">
              <li className="flex justify-between items-center p-4 border-b hover:text-blue-600">Dell Laptop Repair Indore <FaChevronRight /></li>
              <li className="flex justify-between items-center p-4 border-b hover:text-blue-600">HP Laptop Repair Indore <FaChevronRight /></li>
              <li className="flex justify-between items-center p-4 border-b hover:text-blue-600">Asus Laptop Repair Indore <FaChevronRight /></li>
              <Link href="https://www.justdial.com/..." className="flex justify-between items-center p-4 border-b text-orange-600">View on Justdial <FaExternalLinkAlt /></Link>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}