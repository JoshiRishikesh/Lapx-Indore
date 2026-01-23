// src/lib/schema.ts
export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LapX - Laptop Repair Indore",
    "alternateName": [
      "Lap-X Laptop Repair Indore",
      "Asus Service Center in Indore Vijay Nagar",
      "MSI Service Center Indore",
      "MacBook Repair Specialist Indore",
      "Best Laptop Repairing Near Orbit Mall"
    ],
    "@id": "https://lapx.co.in/#localbusiness",
    "description": "Indore's #1 trusted service center for MacBook, ASUS, MSI, Dell, HP, Lenovo, and Acer. Specialist in Chip-level motherboard repair, liquid damage, and screen replacement with over 300+ 5-star reviews.",
    "url": "https://lapx.co.in",
    "logo": "https://lapx.co.in/logo.png",
    "telephone": "+91-9111000757",
    "priceRange": "₹₹",
    "image": [
       "https://lapx.co.in/og-image.jpg",
       "https://lapx.co.in/shop-interior.jpg" 
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "LG-11, Orbit Mall, AB Road, Near C21 Mall",
      "addressLocality": "Vijay Nagar, Indore",
      "addressRegion": "MP",
      "postalCode": "452010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.7453065,
      "longitude": 75.8942294
    },
    "knowsAbout": [
      "MacBook Logic Board Repair", 
      "Asus ROG Gaming Laptop Repair", 
      "MSI Gaming Laptop Service", 
      "Chip-level Motherboard Repairing",
      "Laptop Screen Replacement Vijay Nagar",
      "Liquid Damage Repair",
      "Dell and HP Laptop Service",
      "Genuine Laptop Battery Replacement"
    ],
    "hasMap": "https://lapx.co.in/",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "21:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "301", 
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.justdial.com/Indore/Lap-X-Near-C21-Malhar-Mega-Mall-Vijay-Nagar/0731PX731-X731-221031122403-F5F9_BZDET"
    ]
  };
};