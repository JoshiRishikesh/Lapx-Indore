// src/components/Footer.tsx
import Link from 'next/link';

const Footer: React.FC = () => {
  // UI Design Constants
  const headingClass = "text-lg font-bold mb-6 text-sky-400 tracking-tight uppercase";
  const textClass = "text-gray-400 text-sm leading-relaxed font-light";
  const linkHoverClass = "hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2";

  // --- LIVE DATA ---
  const googlePlaceId = "ChIJg3l2lGb9YjkR0U_e3MSkOzs";
  const googleWriteReviewUrl = `https://search.google.com/local/writereview?placeid=${googlePlaceId}`;
  const googleMapsUrl = `https://www.google.com/maps/place/?q=place_id:${googlePlaceId}`;
  const justdialUrl = "https://www.justdial.com/Indore/Lap-X-Near-C21-Malhar-Mega-Mall-Vijay-Nagar/0731PX731-X731-221031122403-F5F9_BZDET";

  return (
    <footer className="bg-gray-950 text-white font-poppins border-t border-gray-900"> 
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Contact & Identity */}
          <div className="space-y-4">
            <h3 className={headingClass}>Visit Lap-X</h3> 
            <div className={textClass}>
              <p className="font-medium text-gray-200">LG-11, Orbit Mall</p>
              <p>Vijay Nagar, Indore, MP 452010</p>
            </div>
            <div className="pt-2">
              <a href="tel:09111000757" className="text-sky-400 font-bold text-lg hover:text-sky-300 transition">
                091110 00757
              </a>
              <p className="text-[11px] text-gray-500 mt-1 uppercase tracking-widest">Available: 10:00 AM - 9:30 PM</p>
            </div>
          </div>

          {/* Column 2: Service Quick Links */}
          <div>
            <h3 className={headingClass}>Repair Centers</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/asus-service-center" className={linkHoverClass}><span>›</span> ASUS Support</Link></li>
              <li><Link href="/hp-service-center" className={linkHoverClass}><span>›</span> HP Support</Link></li>
              <li><Link href="/dell-service-center" className={linkHoverClass}><span>›</span> DELL Support</Link></li>
              <li><Link href="/lenovo-service-center" className={linkHoverClass}><span>›</span> LENOVO Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Trust & Live Ratings */}
          <div>
            <h3 className={headingClass}>Customer Trust</h3>
            <div className="space-y-4">
              {/* Google Badge */}
              <div className="bg-gray-900/40 border border-gray-800 p-4 rounded-xl backdrop-blur-sm group hover:border-sky-500/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-tighter">Google Rating</span>
                  <span className="text-yellow-500 flex text-[10px]">★★★★★</span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-black text-white">4.9</span>
                  <span className="text-[10px] text-gray-500 italic">Excellent</span>
                </div>
                <div className="flex gap-4">
                  <a href={googleWriteReviewUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold text-sky-400 hover:text-white transition uppercase underline decoration-sky-800 underline-offset-4">Write Review</a>
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold text-gray-500 hover:text-white transition uppercase">Find Us</a>
                </div>
              </div>

              {/* Justdial Link */}
              <a href={justdialUrl} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center justify-between p-3 bg-gray-900/20 border border-gray-800 rounded-lg hover:bg-gray-900/60 transition group">
                <span className="text-xs text-gray-400 font-medium">Justdial Verified</span>
                <span className="text-orange-500 text-xs font-bold group-hover:translate-x-1 transition-transform">View Profile →</span>
              </a>
            </div>
          </div>
          
          {/* Column 4: Expertise Note */}
          <div className="bg-sky-950/10 p-6 rounded-2xl border border-sky-900/20">
            <h3 className="text-sm font-bold mb-3 text-sky-200">Independent Specialist</h3>
            <p className="text-[12px] text-gray-500 leading-relaxed italic">
              Lap-X provides authorized-level post-warranty repairs. We are experts in chip-level servicing and OEM part replacement for high-performance laptops.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-600 tracking-wide font-light">
              © {new Date().getFullYear()} <span className="text-gray-400 font-medium">Lap-X Indore</span>. All Rights Reserved.
            </p>
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
               <Link href="/privacy" className="text-[10px] text-gray-700 hover:text-gray-400 uppercase tracking-widest">Privacy Policy</Link>
               <Link href="/terms" className="text-[10px] text-gray-700 hover:text-gray-400 uppercase tracking-widest">Terms</Link>
            </div>
          </div>

          {/* Lupa Entertainment Credit with Yellow Gradient */}
          <div className="flex flex-col items-center md:items-end">
            <span className="text-[10px] text-gray-700 uppercase tracking-[0.2em] mb-1">Developed By</span>
            <a 
              href="https://lupaentertainment.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-black tracking-wider transition-opacity hover:opacity-80"
            >
              <span className="bg-linear-to-r from-yellow-400 to-yellow-100 bg-clip-text text-transparent uppercase">
                Lupa Entertainment
              </span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;