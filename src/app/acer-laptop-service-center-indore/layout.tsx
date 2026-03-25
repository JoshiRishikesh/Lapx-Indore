import { Metadata } from "next";

export const metadata: Metadata = {
  // Use 'www' consistently to match your root layout
  metadataBase: new URL("https://www.lapx.co.in"),

  title: "Acer Laptop Service Center Indore | Fast Acer Repair Near Vijay Nagar | LAPX",

  description:
    "Need Acer laptop repair in Indore? Get fast screen replacement, battery, charging port & motherboard repair for Aspire, Swift & Predator. Same-day service in Vijay Nagar. Servicing starts at ₹199*. Call now 9111000757.",

  keywords: [
    "Acer Laptop Repair Indore",
    "Acer Service Center Indore",
    "Acer Laptop Repair Near Me",
    "Acer Service Center Vijay Nagar",
    "Acer Screen Replacement Indore",
    "Acer Battery Repair Indore",
    "Acer Motherboard Repair Indore",
    "Acer Charging Port Repair Indore",
    "Acer Overheating Repair Indore",
    "Laptop Repair Vijay Nagar Indore",
  ],

  alternates: {
    canonical: "https://www.lapx.co.in/acer-laptop-service-center-indore",
    languages: {
      "en-IN": "https://www.lapx.co.in/acer-laptop-service-center-indore",
    },
  },

  openGraph: {
    title: "Acer Laptop Service Center Indore | LAPX",
    description:
      "Fast & reliable Acer laptop repair in Indore. Screen, battery, motherboard & overheating fixes with same-day service at Orbit Mall.",
    url: "https://www.lapx.co.in/acer-laptop-service-center-indore",
    siteName: "LAPX",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-acer-repair.jpg", // Next.js handles the base URL automatically if metadataBase is set
        width: 1200,
        height: 630,
        alt: "Acer Laptop Service Center Indore - LAPX",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Acer Laptop Service Center Indore | LAPX",
    description:
      "Same-day Acer laptop repair in Indore. Screen, battery & motherboard repair starting at ₹199.",
    images: ["/og-acer-repair.jpg"],
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

export default function AcerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComputerRepair",
    "@id": "https://www.lapx.co.in/acer-laptop-service-center-indore",
    name: "LAPX Acer Laptop Service Center Indore",
    image: "https://www.lapx.co.in/acer-repair-banner.jpg",
    url: "https://www.lapx.co.in/acer-laptop-service-center-indore",
    telephone: "+919111000757",
    priceRange: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "LG-31, Lower Ground Floor, Orbit Mall, AB Road, Vijay Nagar",
      addressLocality: "Indore",
      addressRegion: "MP",
      postalCode: "452010",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.7533,
      longitude: 75.8937,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        opens: "10:30",
        closes: "20:30",
      },
    ],
    areaServed: [
      { "@type": "City", "name": "Indore" },
      { "@type": "AdministrativeArea", "name": "Vijay Nagar" },
      { "@type": "AdministrativeArea", "name": "Palasia" }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "name": "Acer Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Acer Screen Replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Acer Battery Replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Acer Motherboard Repair"
          }
        }
      ]
    },
    sameAs: [
      "https://www.instagram.com/lapx_laptop_repair_indore/",
      "https://www.facebook.com/people/Lapx-indore/100083816658201/",
      "https://www.youtube.com/@lapxindore",
      "https://www.justdial.com/Indore/Lap-X-Near-C21-Malhar-Mega-Mall-Vijay-Nagar/0731PX731-X731-221031122403-F5F9_BZDET",
    ],
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