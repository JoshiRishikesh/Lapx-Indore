import Link from 'next/link';
import { FaShieldAlt, FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#1e56a0] shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <FaShieldAlt className="text-green-400" /> Lap<span className="font-light">X</span>
        </Link>
        
        <div className="hidden lg:flex space-x-8 text-sm font-semibold uppercase tracking-wider text-white/90 items-center">
          <Link href="/#services" className="hover:text-green-400">Services</Link>
          
          {/* THE SEO POWER MOVE: BRANDS DROPDOWN */}
          <div className="group relative py-2">
            <button className="flex items-center gap-1 hover:text-green-400 transition-colors uppercase">
              Repair Centers <FaChevronDown className="text-[10px] group-hover:rotate-180 transition-transform" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-4 hidden group-hover:block border-t-4 border-green-400 animate-in fade-in slide-in-from-top-2">
              <Link href="/dell-laptop-service-center-indore" className="block px-6 py-2 text-slate-800 hover:bg-slate-50 hover:text-[#1e56a0]">Dell Service Center</Link>
              <Link href="/hp-laptop-service-center-indore" className="block px-6 py-2 text-slate-800 hover:bg-slate-50 hover:text-[#1e56a0]">HP Service Center</Link>
              <Link href="/asus-laptop-service-center-indore" className="block px-6 py-2 text-slate-800 hover:bg-slate-50 hover:text-[#1e56a0]">Asus Service Center</Link>
              <Link href="/acer-laptop-service-center-indore" className="block px-6 py-2 text-slate-800 hover:bg-slate-50 hover:text-[#1e56a0]">Acer Service Center</Link>
            </div>
          </div>

          <Link href="/contact" className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}