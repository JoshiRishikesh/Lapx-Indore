"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaChevronDown, FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brandLinks = [
    { name: "Dell Service Center", href: "/dell-laptop-service-center-indore" },
    { name: "HP Service Center", href: "/hp-laptop-service-center-indore" },
    { name: "Asus Service Center", href: "/asus-laptop-service-center-indore" },
    { name: "Acer Service Center", href: "/acer-laptop-service-center-indore" },
    { name: "Lenovo Service Center", href: "/lenovo-laptop-service-center-indore" },
    { name: "MSI Service Center", href: "/msi-laptop-service-center-indore" },
  ];

  return (
    <nav className={`fixed w-full z-100 transition-all duration-300 ${
      scrolled ? 'bg-[#1e56a0]/95 backdrop-blur-md py-3 shadow-lg' : 'bg-[#1e56a0] py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2 group">
          <FaShieldAlt className="text-[#f97316] group-hover:rotate-12 transition-transform" /> 
          LAP<span className="text-[#f97316]">X</span>
        </Link>
        
        {/* DESKTOP MENU */}
        <div className="hidden lg:flex space-x-8 text-[13px] font-bold uppercase tracking-widest text-white/90 items-center">
          <Link href="/#services" className="hover:text-[#f97316] transition-colors">Services</Link>
          
          {/* BRANDS DROPDOWN */}
          <div className="group relative py-2">
            <button className="flex items-center gap-1 hover:text-[#f97316] transition-colors uppercase">
              Repair Centers <FaChevronDown className="text-[10px] group-hover:rotate-180 transition-transform" />
            </button>
            
            <div className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl py-4 hidden group-hover:block border-t-4 border-[#f97316] animate-in fade-in slide-in-from-top-2">
              <div className="px-6 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 mb-2">
                Indore Brand Hubs
              </div>
              {brandLinks.map((brand) => (
                <Link 
                  key={brand.name} 
                  href={brand.href} 
                  className="block px-6 py-3 text-slate-800 hover:bg-blue-50 hover:text-[#1e56a0] font-bold transition-all"
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/#about" className="hover:text-[#f97316] transition-colors">Why Us</Link>
          
          <Link 
            href="tel:9111000757" 
            className="flex items-center gap-2 bg-[#f97316] text-white px-6 py-2.5 rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30"
          >
            <FaPhoneAlt size={12} /> 91110-00757
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#1e56a0] border-t border-white/10 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'
      }`}>
        <div className="flex flex-col p-6 space-y-4 text-white font-bold uppercase tracking-widest text-sm">
          <Link href="/#services" onClick={() => setIsOpen(false)} className="py-2 border-b border-white/5">Services</Link>
          
          <div className="py-2">
            <p className="text-[#f97316] text-[10px] mb-4 tracking-[0.3em]">Brand Centers</p>
            <div className="grid grid-cols-1 gap-3 pl-2">
              {brandLinks.map((brand) => (
                <Link 
                  key={brand.name} 
                  href={brand.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white text-xs"
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="tel:9111000757" className="bg-[#f97316] text-center py-4 rounded-xl shadow-xl active:scale-95 transition-transform">
            Call Support Now
          </Link>
        </div>
      </div>
    </nav>
  );
}