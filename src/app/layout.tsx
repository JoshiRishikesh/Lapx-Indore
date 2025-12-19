// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css'; // Your global styles/Tailwind import
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import ContactCTASection from "@/components/ContactCTASection";
import "@fontsource/orbitron/700.css"; // Bold weight

// Define Global Metadata
export const metadata: Metadata = {
  title: 'Premium Laptop Service Center in Indore | ASUS, HP, DELL, LENOVO Specialist',
  description: 'Indore\'s top authorized-level post-warranty service center. Expert Motherboard repair, screen replacement, and upgrades for all major laptop brands.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar /> 
          
          {/* The children prop holds the content of the current page (e.g., /asus-service-center) */}
          <main className="grow">
            {children}
          </main>
          
          <ContactCTASection />
          <Footer />
        </div>
      </body>
    </html>
  );
}