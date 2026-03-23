import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; // Ensure your Navbar is in the components folder
import Footer from "@/components/Footer"; // Ensure your Footer is in the components folder
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap', 
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "LapX – Laptop Repair Service Center DELL | HP | ASUS CENTER – Indore",
  description: "LapX provides professional laptop repair and service in Indore for Dell, HP, Asus, and Acer laptops. Doorstep service, fast repairs, and expert technicians at Orbit Mall, Vijay Nagar. Servicing starts at ₹199*.",
  keywords: ["Laptop Repair Indore", "Dell Laptop Repair Indore", "HP Laptop Repair Indore", "Asus Laptop Repair Indore", "Acer Laptop Repair Indore", "Laptop Service Center Vijay Nagar"],
  alternates: {
    canonical: "https://www.lapxindore.com", // Replace with your actual domain
  },
  openGraph: {
    title: "LapX – Laptop Repair Service Center Indore",
    description: "Expert Dell, HP, and Asus laptop repair at Orbit Mall, Vijay Nagar. Same-day service available.",
    url: "https://www.lapxindore.com",
    siteName: "LapX Laptop Repair",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-white text-slate-800 antialiased`}>
        {/* The Navbar appears on every page for consistent branding */}
        <Navbar />
        
        {/* Main content of your pages */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* The Footer appears on every page to boost Local SEO trust */}
        <Footer />
      </body>
    </html>
  );
}