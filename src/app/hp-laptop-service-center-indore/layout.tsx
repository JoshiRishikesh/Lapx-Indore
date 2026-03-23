// src/app/hp-laptop-service-center-indore/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HP Laptop Service Center Indore | Post-Warranty HP Repair",
  description: "Expert post-warranty support for HP laptops in Indore. We fix HP Pavilion, Omen, and Envy at LG-31, Orbit Mall, Vijay Nagar. Near C21 & Malhar Mall. Call 91110-00757.",
  alternates: {
    canonical: 'https://lapx.in/hp-laptop-service-center-indore',
  },
  openGraph: {
    title: "HP Laptop Service Center Indore | LAPX",
    description: "Professional post-warranty repair for HP laptops in Indore at Orbit Mall. Screen, Battery, and Motherboard specialists.",
    images: ['/hp-repair-banner.jpg'],
    url: 'https://lapx.in/hp-laptop-service-center-indore',
    type: 'website',
  },
};

export default function HPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Local Business Schema for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LAPX - HP Laptop Service Center Indore",
    "image": "https://lapx.in/hp-repair-banner.jpg",
    "@id": "https://lapx.in/hp-laptop-service-center-indore",
    "url": "https://lapx.in/hp-laptop-service-center-indore",
    "telephone": "+919111000757",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "LG-31, Lower Ground Floor, Orbit Mall (Arbitto Mall), Near C21 & Malhar Mall, AB Road, Vijay Nagar",
      "addressLocality": "Indore",
      "addressRegion": "MP",
      "postalCode": "452010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.753272,
      "longitude": 75.894142
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
    "priceRange": "₹₹"
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