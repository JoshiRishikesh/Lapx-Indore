// src/components/Footer.tsx
import Link from 'next/link';

const Footer: React.FC = () => {
  // Define base classes for dark theme typography
  const baseTextClass = 'text-gray-400 font-poppins';
  // Use a modern, light sky blue/cyan hover accent
  const accentClass = 'text-sky-400'; 
  const linkClass = `text-sm hover:${accentClass} transition duration-200`; 

  return (
    // Switched to a darker background (gray-950)
    <footer className="bg-gray-950 text-white font-poppins mt-12 border-t border-gray-800"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Column 1: Business Info */}
          <div>
            {/* ACCENT: Sky Blue for heading */}
            <h3 className={`text-xl font-bold mb-5 ${accentClass} tracking-wider`}>Contact &amp; Location</h3> 
            <p className={`${baseTextClass} text-sm mb-2`}>LG-11, Orbit Mall, Vijay Nagar,</p>
            <p className={`${baseTextClass} text-sm mb-4`}>Indore, MP 452010</p>
            <p className={`${baseTextClass} text-sm`}>Phone: <a href="tel:09111000757" className={linkClass}>091110 00757</a></p>
            <p className={`${baseTextClass} text-sm`}>Hours: Mon-Sun, 10:00 - 21:30</p>
          </div>

          {/* Column 2: Service Pages */}
          <div>
            {/* ACCENT: Sky Blue for heading */}
            <h3 className={`text-xl font-bold mb-5 ${accentClass} tracking-wider`}>Our Service Centers</h3>
            <ul>
              <li className="mb-2"><Link href="/asus-service-center" className={linkClass}>ASUS Service Center</Link></li>
              <li className="mb-2"><Link href="/hp-service-center" className={linkClass}>HP Service Center</Link></li>
              <li className="mb-2"><Link href="/dell-service-center" className={linkClass}>DELL Service Center</Link></li>
              <li className="mb-2"><Link href="/lenovo-service-center" className={linkClass}>LENOVO Service Center</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            {/* ACCENT: Sky Blue for heading */}
            <h3 className={`text-xl font-bold mb-5 ${accentClass} tracking-wider`}>Company</h3>
            <ul>
              <li className="mb-2"><Link href="/about" className={linkClass}>About Our Experts</Link></li>
              <li className="mb-2"><Link href="/contact" className={linkClass}>Visit Us</Link></li>
              <li className="mb-2"><a href="https://wa.me/919111000757" target="_blank" rel="noopener noreferrer" className={linkClass}>WhatsApp Chat</a></li>
            </ul>
          </div>
          
          {/* Column 4: Expertise Disclaimer */}
          <div className="col-span-2 md:col-span-1">
            {/* ACCENT: Sky Blue for heading */}
            <h3 className={`text-xl font-bold mb-5 ${accentClass} tracking-wider`}>Expertise Note</h3>
            <p className="text-xs text-gray-500">
              We are an independent, authorized-level post-warranty repair specialist for ASUS, HP, DELL, and LENOVO laptops. We use genuine quality parts and follow strict OEM repair standards for the best results.
            </p>
          </div>

        </div>
        
        {/* Copyright and Legal Section */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500 font-light">&copy; {new Date().getFullYear()} Premium Laptop Service Center. All Rights Reserved.</p>
          {/* Link color changed to match the linkClass hover color */}
          <Link href="/privacy" className={`text-xs text-gray-600 hover:${accentClass} transition duration-200 block mt-1`}>Privacy Policy | Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;