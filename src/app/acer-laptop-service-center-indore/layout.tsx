import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lapx.co.in"),

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
    canonical: "https://lapx.co.in/acer-laptop-repair-indore",
    languages: {
      "en-IN": "https://lapx.co.in/acer-laptop-repair-indore",
    },
  },

  openGraph: {
    title: "Acer Laptop Service Center Indore | LAPX",
    description:
      "Fast & reliable Acer laptop repair in Indore. Screen, battery, motherboard & overheating fixes with same-day service at Orbit Mall.",
    url: "https://lapx.co.in/acer-laptop-repair-indore",
    siteName: "LAPX",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://lapx.co.in/og-acer-repair.jpg",
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
    images: ["https://lapx.co.in/og-acer-repair.jpg"],
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

    name: "LAPX Acer Laptop Service Center Indore",
    image: "https://lapx.co.in/acer-repair-banner.jpg",

    "@id": "https://lapx.co.in/acer-laptop-repair-indore",
    url: "https://lapx.co.in/acer-laptop-repair-indore",

    telephone: "+919111000757",

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
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:30",
        closes: "20:30",
      },
    ],

    priceRange: "₹₹",

    areaServed: [
      "Vijay Nagar",
      "Palasia",
      "AB Road",
      "RNT Marg",
      "Indore",
      "Madhya Pradesh",
    ],

    sameAs: [
      "https://www.instagram.com/lapx_laptop_repair_indore/",
      "https://www.facebook.com/people/Lapx-indore/100083816658201/",
      "https://www.youtube.com/@lapxindore",
      "https://www.justdial.com/Indore/Lap-X-Near-C21-Malhar-Mega-Mall-Vijay-Nagar/0731PX731-X731-221031122403-F5F9_BZDET",
    ],

    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Acer Laptop Repair",
        areaServed: "Indore",
      },
    },

    description:
      "Need Acer laptop repair in Indore? LAPX provides expert servicing for Aspire, Swift, Nitro & Predator series. Screen replacement, charging port repair, overheating fixes & motherboard repair available with same-day service.",
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