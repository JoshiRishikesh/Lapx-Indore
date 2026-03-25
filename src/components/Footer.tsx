"use client";

import Link from 'next/link';
import { 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaShieldAlt, 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube,
  FaStoreAlt // Use this for JustDial
} from 'react-icons/fa';

import { SiGooglemaps } from 'react-icons/si'; // Keep this since it's working

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

  const socialLinks = [
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/lapx_laptop_repair_indore/", 
      icon: <FaInstagram />, 
      color: "hover:text-[#E1306C]" 
    },
    { 
      name: "Facebook", 
      href: "https://www.facebook.com/people/Lapx-indore/100083816658201/#", 
      icon: <FaFacebookF />, 
      color: "hover:text-[#1877F2]" 
    },
    { 
      name: "YouTube", 
      href: "https://www.youtube.com/@lapxindore", 
      icon: <FaYoutube />, 
      color: "hover:text-[#FF0000]" 
    },
    { 
      name: "JustDial", 
      href: "https://www.justdial.com/Indore/Lap-X-Near-C21-Malhar-Mega-Mall-Vijay-Nagar/0731PX731-X731-221031122403-F5F9_BZDET", 
      icon: <FaStoreAlt />, 
      color: "hover:text-[#ff6a00]" 
    },
    { 
      name: "Google Maps", 
      href: "https://share.google/ydyJpPmM2cu71iLWX", 
      icon: <SiGooglemaps />, 
      color: "hover:text-[#4285F4]" 
    },
  ];

  return (
    <footer className="bg-[#0a233d] text-white pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* 1. Branding & Contact Info */}
        <div className="space-y-6">
          <Link href="/" className="text-3xl font-black tracking-tighter flex items-center gap-2">
            <FaShieldAlt className="text-[#f97316]" /> LAP<span className="text-[#f97316]">X</span>
          </Link>
          
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3 text-slate-300">
              <FaMapMarkerAlt className="text-[#f97316] mt-1 shrink-0" />
              <p>Lower Ground floor, LG-31, Orbit Mall, Vijay Nagar, Indore, Madhya Pradesh 452010</p>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <FaPhoneAlt className="text-[#f97316] shrink-0" />
              <a href="tel:+919111000757" className="hover:text-white transition-colors font-semibold">
                +91 91110-00757
              </a>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <FaWhatsapp className="text-[#25D366] shrink-0 text-lg" />
              <a 
                href="https://wa.me/919111000757?text=I%20found%20your%20website%20and%20need%20help%20with%20my%20laptop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors font-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Social Media Icons Row */}
          <div className="pt-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-400 text-xl transition-all duration-300 hover:scale-110 ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
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

        {/* 3. Expertise (Strategic Keywords) */}
        <div>
          <h4 className="text-[#f97316] font-bold uppercase tracking-widest text-xs mb-6 underline decoration-2 underline-offset-8">Our Expertise</h4>
          <ul className="grid grid-cols-1 gap-3">
            {['Laptop Screen Replacement', 'Motherboard Repair', 'Battery Replacement', 'Keyboard Repair', 'SSD Upgrade', 'Data Recovery'].map((service) => (
              <li key={service} className="text-slate-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-700 rounded-full" /> {service}
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Local SEO Area Cloud */}
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
              Top rated <strong>Dell service center near me</strong> and <strong>HP laptop repair in Indore</strong>. Visit LAPX Orbit Mall for reliable service.
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
        </div>

        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-slate-400">
          <span>Developed By</span>
          <Link 
            href="https://lupaentertainment.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#f3a700] to-[#ffdc81] bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Lupa Entertainment
          </Link>
        </div>
      </div>
    </footer>
  );
}