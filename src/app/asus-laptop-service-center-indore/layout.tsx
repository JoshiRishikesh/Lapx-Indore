// src/app/asus-laptop-service-center-indore/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lapx.co.in"),

  title: "ASUS Laptop Service Center Indore | ROG, TUF & VivoBook Repair | LAPX",

  description: "Expert ASUS laptop repair in Indore. Specialized post-warranty support for ROG, TUF, and ZenBook at LG-31, Orbit Mall, Vijay Nagar. Same-day screen & motherboard repair. Call 9111000757.",

  keywords: [
    "ASUS Laptop Service Center Indore",
    "ASUS ROG Repair Indore",
    "ASUS TUF Gaming Repair Indore",
    "ASUS VivoBook Service Indore",
    "ASUS ZenBook Repair Vijay Nagar",
    "ASUS Laptop Screen Replacement Indore",
    "ASUS Motherboard Repair Indore",
    "ASUS Battery Replacement Indore",
    "ASUS Laptop Cooling Fan Repair Indore"
  ],

  alternates: {
    canonical: 'https://www.lapx.co.in/asus-laptop-service-center-indore',
    languages: {
      "en-IN": "https://www.lapx.co.in/asus-laptop-service-center-indore",
    },
  },

  openGraph: {
    title: "ASUS Laptop Service Center Indore | LAPX",
    description: "Professional ASUS repair in Indore. Specialized in ROG/TUF gaming laptops, screen replacement, and motherboard repair at Orbit Mall.",
    images: [
      {
        url: "/asus-repair-banner.jpg",
        width: 1200,
        height: 630,
        alt: "ASUS Laptop Service Center Indore - LAPX",
      },
    ],
    url: 'https://www.lapx.co.in/asus-laptop-service-center-indore',
    siteName: "LAPX",
    locale: "en_IN",
    type: 'website',
  },

  twitter: {
    card: "summary_large_image",
    title: "ASUS Laptop Service Center Indore | LAPX",
    description: "Expert ASUS gaming laptop repair in Indore. Same-day service for ROG & TUF series starting at ₹199.",
    images: ["/asus-repair-banner.jpg"],
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

export default function AsusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComputerRepair",
    "@id": "https://www.lapx.co.in/asus-laptop-service-center-indore",
    "name": "LAPX - ASUS Laptop Service Center Indore",
    "image": "https://www.lapx.co.in/asus-repair-banner.jpg",
    "url": "https://www.lapx.co.in/asus-laptop-service-center-indore",
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
      "name": "ASUS Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ASUS Gaming Laptop Motherboard Repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ASUS ROG/TUF Screen Replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ASUS ZenBook Battery Repair"
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
    "description": "Expert post-warranty repair for ASUS laptops including VivoBook, ZenBook, and specialized ROG/TUF gaming series. Same-day cooling and motherboard service in Indore."
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