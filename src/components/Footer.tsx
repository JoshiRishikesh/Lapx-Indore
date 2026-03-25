import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-[#0a233d] text-white px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Branding & Precise Address */}
        <div className="flex-1">
          <p className="text-2xl font-bold tracking-tighter mb-4 text-white uppercase">
            LAPX <span className="text-green-500 font-light italic">REPAIR</span>
          </p>
          <div className="text-slate-400 text-sm leading-relaxed not-italic space-y-1">
            <p className="font-semibold text-slate-300">Lower Ground Floor, LG-31, Orbit Mall (Arbitto Mall)</p>
            <p>Near C21 & Malhar Mall, AB Road, Vijay Nagar</p>
            <p>Indore, Madhya Pradesh 452010</p>
            <p className="pt-2 text-[#f97316] font-bold">Call: +91 91110-00757</p>
          </div>
        </div>

        {/* SEO-Rich Service Links Grid */}
        <div className="flex-2 grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-8 text-[10px] font-black uppercase tracking-widest">
          <Link href="/dell-laptop-service-center-indore" className="text-orange-400 hover:text-white transition-colors">
            Dell Repair
          </Link>
          <Link href="/hp-laptop-service-center-indore" className="text-orange-400 hover:text-white transition-colors">
            HP Repair
          </Link>
          <Link href="/asus-laptop-service-center-indore" className="text-orange-400 hover:text-white transition-colors">
            Asus Repair
          </Link>
          <Link href="/acer-laptop-repair-indore" className="text-orange-400 hover:text-white transition-colors">
            Acer Repair
          </Link>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Lupa Entertainment Credit */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
          © {currentYear} LAPX LAPTOP REPAIR SERVICE CENTER. ALL RIGHTS RESERVED.
        </p>

        {/* Lupa Entertainment Signature */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-slate-400">
          <span>Website By</span>
          <Link 
            href="https://lupaentertainment.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-linear-to-r from-[#f3a700] to-[#ffdc81] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Lupa Entertainment
          </Link>
        </div>
      </div>
    </footer>
  );
}