"use client";

import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const brandLinks = [
    { name: "Dell Service Center", href: "/dell-laptop-service-center-indore" },
    { name: "HP Service Center", href: "/hp-laptop-service-center-indore" },
    { name: "Asus Service Center", href: "/asus-laptop-service-center-indore" },
    { name: "Acer Service Center", href: "/acer-laptop-service-center-indore" },
    { name: "Lenovo Service Center", href: "/lenovo-laptop-service-center-indore" },
    { name: "MSI Service Center", href: "/msi-laptop-service-center-indore" },
  ];

  const serviceKeywords = [
    "Laptop Screen Replacement", "Motherboard Repair", "Battery Replacement", 
    "Keyboard Repair", "SSD Upgrade", "Liquid Damage Repair", 
    "Hinge Repair", "Data Recovery"
  ];

  return (
    <footer className="bg-[#0a233d] text-white pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* 1. Branding & Business Info */}
        <div className="space-y-6">
          <Link href="/" className="text-3xl font-black tracking-tighter flex items-center gap-2">
            <FaShieldAlt className="text-[#f97316]" /> LAP<span className="text-[#f97316]">X</span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Indore's most trusted <strong>post-warranty laptop service center</strong>. Specializing in chip-level motherboard repair and original part replacements for all major brands.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3 text-slate-300">
              <FaMapMarkerAlt className="text-[#f97316] mt-1 shrink-0" />
              <p>LG-31, Orbit Mall, Vijay Nagar, Indore, MP 452010</p>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <FaPhoneAlt className="text-[#f97316] shrink-0" />
              <p>+91 91110-00757</p>
            </div>
          </div>
        </div>

        {/* 2. Brand Support (SEO Rich) */}
        <div>
          <h4 className="text-[#f97316] font-bold uppercase tracking-widest text-xs mb-6 underline decoration-2 underline-offset-8">Brand Support</h4>
          <ul className="grid grid-cols-1 gap-3">
            {brandLinks.map((brand) => (
              <li key={brand.name}>
                <Link href={brand.href} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-[#f97316]" /> {brand.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Specialized Services */}
        <div>
          <h4 className="text-[#f97316] font-bold uppercase tracking-widest text-xs mb-6 underline decoration-2 underline-offset-8">Our Expertise</h4>
          <ul className="grid grid-cols-1 gap-3">
            {serviceKeywords.map((service) => (
              <li key={service} className="text-slate-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-700 rounded-full" /> {service}
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Strategic Keyword Cloud (Indore Specific) */}
        <div>
          <h4 className="text-[#f97316] font-bold uppercase tracking-widest text-xs mb-6 underline decoration-2 underline-offset-8">Nearby Areas</h4>
          <div className="flex flex-wrap gap-2">
            {['Vijay Nagar', 'Palasia', 'Bhawarkua', 'AB Road', 'LIG', 'Rajwada'].map((area) => (
              <span key={area} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-slate-400 font-bold uppercase tracking-tighter">
                Laptop Repair {area}
              </span>
            ))}
          </div>
          <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/5">
            <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-widest">
              Searching for <strong>Dell service center near me</strong> or <strong>Asus laptop repair in Indore</strong>? Visit LAPX at Orbit Mall for genuine parts.
            </p>
          </div>
        </div>

      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="space-y-1">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {currentYear} LAPX LAPTOP REPAIR SERVICE CENTER INDORE.
          </p>
          <p className="text-slate-600 text-[9px] uppercase tracking-widest italic">
            All brand names, logos, and trademarks are property of their respective owners.
          </p>
        </div>

        {/* Website Credit */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-slate-400">
          <span>Developed By</span>
          <Link 
            href="https://lupaentertainment.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-linear-to-r from-[#f3a700] to-[#ffdc81] bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Lupa Entertainment
          </Link>
        </div>
      </div>
    </footer>
  );
}