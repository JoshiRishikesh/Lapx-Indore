// src/app/hp-laptop-service-center-indore/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lapx.co.in"),

  title: "HP Laptop Service Center Indore | Pavilion, Omen & Envy Repair | LAPX",

  description: "Expert HP laptop repair in Indore. Specialized post-warranty support for HP Pavilion, Omen, and Envy series at LG-31, Orbit Mall, Vijay Nagar. Same-day screen & battery replacement. Call 9111000757.",

  keywords: [
    "HP Laptop Service Center Indore",
    "HP Pavilion Repair Indore",
    "HP Omen Gaming Service Indore",
    "HP Envy Repair Vijay Nagar",
    "HP Laptop Screen Replacement Indore",
    "HP Motherboard Repair Indore",
    "HP Battery Replacement Indore",
    "HP Laptop Service Near Orbit Mall",
    "HP Keyboard Repair Indore",
    "Post-Warranty HP Support Indore"
  ],

  alternates: {
    canonical: 'https://www.lapx.co.in/hp-laptop-service-center-indore',
    languages: {
      "en-IN": "https://www.lapx.co.in/hp-laptop-service-center-indore",
    },
  },

  openGraph: {
    title: "HP Laptop Service Center Indore | LAPX",
    description: "Professional post-warranty repair for HP laptops in Indore at Orbit Mall. Screen, Battery, and Motherboard specialists with same-day service.",
    images: [
      {
        url: "/hp-repair-banner.jpg",
        width: 1200,
        height: 630,
        alt: "HP Laptop Service Center Indore - LAPX",
      },
    ],
    url: 'https://www.lapx.co.in/hp-laptop-service-center-indore',
    siteName: "LAPX",
    locale: "en_IN",
    type: 'website',
  },

  twitter: {
    card: "summary_large_image",
    title: "HP Laptop Service Center Indore | LAPX",
    description: "Expert HP repair in Indore. Same-day service for Pavilion & Omen series starting at ₹199 at Orbit Mall.",
    images: ["/hp-repair-banner.jpg"],
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

export default function HPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComputerRepair",
    "@id": "https://www.lapx.co.in/hp-laptop-service-center-indore",
    "name": "LAPX - HP Laptop Service Center Indore",
    "image": "https://www.lapx.co.in/hp-repair-banner.jpg",
    "url": "https://www.lapx.co.in/hp-laptop-service-center-indore",
    "telephone": "+919111000757",
    "priceRange": "INR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "LG-31, Lower Ground Floor, Orbit Mall, AB Road, Vijay Nagar",
      "addressLocality": "Indore",
      "addressRegion": "MP",
      "postalCode": "452010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.7533,
      "longitude": 75.8937
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "10:30",
        "closes": "20:30"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Indore" },
      { "@type": "AdministrativeArea", "name": "Vijay Nagar" },
      { "@type": "AdministrativeArea", "name": "Orbit Mall" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HP Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HP Pavilion Screen Replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HP Omen Thermal Cleaning & Service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HP Laptop Motherboard Repair"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/lapx_laptop_repair_indore/",
      "https://www.facebook.com/people/Lapx-indore/100083816658201/",
      "https://www.youtube.com/@lapxindore",
      "https://www.justdial.com/Indore/Lap-X-Near-C21-Malhar-Mega-Mall-Vijay-Nagar/0731PX731-X731-221031122403-F5F9_BZDET",
    ],
    "description": "Premium post-warranty support for HP laptops in Indore. Specializing in HP Pavilion, Omen, and Envy series motherboard, screen, and battery repairs at Orbit Mall."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}