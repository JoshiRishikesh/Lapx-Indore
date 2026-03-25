import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
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
  // Fixes the build warning and provides a base for all relative image paths
  metadataBase: new URL("https://www.lapx.co.in"),

  title: "LapX – Laptop Repair Service Center DELL | HP | ASUS | ACER – Indore",
  
  description: "LapX provides professional laptop repair and service in Indore for Dell, HP, Asus, and Acer laptops. Doorstep service, fast repairs, and expert technicians at Orbit Mall, Vijay Nagar. Servicing starts at ₹199*.",
  
  keywords: [
    "Laptop Repair Indore", 
    "Dell Laptop Repair Indore", 
    "HP Laptop Repair Indore", 
    "Asus Laptop Repair Indore", 
    "Acer Laptop Repair Indore", 
    "Laptop Service Center Vijay Nagar",
    "Orbit Mall Laptop Repair"
  ],

  alternates: {
    canonical: "https://www.lapx.co.in",
  },

  openGraph: {
    title: "LapX – Laptop Repair Service Center Indore",
    description: "Expert Dell, HP, Asus, and Acer laptop repair at Orbit Mall, Vijay Nagar. Same-day service available starting at ₹199*.",
    url: "https://www.lapx.co.in",
    siteName: "LapX Laptop Repair",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-main.jpg", // Ensure this file exists in your public folder
        width: 1200,
        height: 630,
        alt: "LapX Laptop Repair Service Center Indore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LapX – Laptop Repair Service Center Indore",
    description: "Fast & reliable laptop repair for all brands in Indore. Located at Orbit Mall, Vijay Nagar.",
    images: ["/og-main.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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