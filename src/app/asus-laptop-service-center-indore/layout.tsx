// src/app/asus-laptop-service-center-indore/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ASUS Laptop Service Center Indore | ROG, TUF & VivoBook Repair",
  description: "Expert ASUS laptop repair in Indore. Specialized post-warranty support for ROG, TUF, and ZenBook at LG-31, Orbit Mall, Vijay Nagar. Call 91110-00757.",
  alternates: {
    canonical: 'https://lapx.in/asus-laptop-service-center-indore',
  },
  openGraph: {
    title: "ASUS Laptop Service Center Indore | LAPX",
    description: "Professional ASUS repair in Indore. Specialized in ROG/TUF gaming laptops, screen replacement, and motherboard repair.",
    images: ['/asus-repair-banner.jpg'], // Recommended: Add a gaming-themed banner here
    url: 'https://lapx.in/asus-laptop-service-center-indore',
    type: 'website',
  },
};

export default function AsusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Local Business Schema for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LAPX - ASUS Laptop Service Center Indore",
    "image": "https://lapx.in/asus-repair-banner.jpg",
    "@id": "https://lapx.in/asus-laptop-service-center-indore",
    "url": "https://lapx.in/asus-laptop-service-center-indore",
    "telephone": "+919111000757",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "LG-31, Lower Ground Floor, Orbit Mall (Arbitto Mall), AB Road, Vijay Nagar",
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
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "21:30"
      }
    ],
    "priceRange": "₹₹",
    "description": "Expert post-warranty repair for ASUS laptops including VivoBook, ZenBook, and specialized ROG/TUF gaming series motherboard and cooling service."
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