// src/lib/schema.ts
export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lap-X",
    "alternateName": "Lap-X Laptop Repair Indore",
    "description": "Premium laptop service center in Vijay Nagar, Indore. Expert motherboard repair, screen replacement, and hardware upgrades for ASUS, HP, Dell, and Lenovo.",
    "url": "https://yourwebsite.com", // Replace with your live URL
    "logo": "https://yourwebsite.com/logo.png",
    "telephone": "+91-9111000757",
    "priceRange": "₹₹",
    "image": [
       "https://yourwebsite.com/images/shop-front.jpg",
       "https://yourwebsite.com/images/interior.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "LG-11, Orbit Mall, AB Road, near C21 Mall",
      "addressLocality": "Vijay Nagar, Indore",
      "addressRegion": "MP",
      "postalCode": "452010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.744527,
      "longitude": 75.893815
    },
    "hasMap": "https://www.google.com/maps?cid=13312389643449339089", // Derived from your PlaceID
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "21:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150" // Update this number periodically
    },
    "sameAs": [
      "https://www.justdial.com/Indore/Lap-X-Near-C21-Malhar-Mega-Mall-Vijay-Nagar/0731PX731-X731-221031122403-F5F9_BZDET"
    ]
  };
};