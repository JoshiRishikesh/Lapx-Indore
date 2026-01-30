// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'; // Added Viewport
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import ContactCTASection from "@/components/ContactCTASection";
import "@fontsource/orbitron/700.css";
import { getLocalBusinessSchema } from '@/lib/schema';

// 1. ADVANCED VIEWPORT SETTINGS (Mobile UX is a ranking factor)
export const viewport: Viewport = {
  themeColor: '#0ea5e9', // Sky blue to match your brand
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// 2. ADVANCED METADATA
export const metadata: Metadata = {
  metadataBase: new URL('https://lapx.co.in'),
title: {
  default: 'Lap-X | Best Laptop Service Center in Indore | Apple, Dell, HP, MSI, Asus',
  template: '%s | Lap-X Indore'
},
description: 'Indore\'s trusted laptop repair experts at Orbit Mall. Certified service for Apple, Dell, HP, MSI, Asus, & Lenovo. Specialized in chip-level motherboard repair.',
keywords: [
    "Apple Service Center Indore",

    "Dell Laptop Service Center Indore",

    "HP Laptop Repair Indore",

    "Lenovo Service Center Indore",

    "Asus Laptop Repair Indore",

    "Acer Service Center Indore",

    "MSI Gaming Laptop Repair Indore"
  ],
  
  // Advanced Robots instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification for Search Console (Essential)
  verification: {
    google: 'your-google-verification-code', // Add your code from Search Console
    // me: ['your-email@example.com'],
  },

  alternates: {
    canonical: '/',
  },

  // Twitter/X Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Lap-X | Laptop Repair Specialist Indore',
    description: 'Visit us at Orbit Mall, Vijay Nagar for expert laptop repairs.',
    images: ['/og-image.jpg'], 
  },

  openGraph: {
    title: 'Lap-X | Laptop Repair Specialist in Indore',
    description: 'Professional repair services for all major brands at Orbit Mall, Vijay Nagar.',
    url: 'https://lapx.co.in',
    siteName: 'Lap-X Laptop Repair',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lap-X Laptop Repair Shop Front Orbit Mall',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  // Icons for all devices
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const businessSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="lapx-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar /> 
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