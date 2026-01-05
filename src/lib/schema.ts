// src/lib/schema.ts
export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lap-X",
    "alternateName": "Lap-X Laptop Repair Indore",
    "@id": "https://lapx.co.in/#website", // Links the site to the business entity
    "description": "Indore's trusted laptop service center in Orbit Mall, Vijay Nagar. Specialists in motherboard repair, screen replacement, and hardware upgrades for ASUS, HP, Dell, and Lenovo.",
    "url": "https://lapx.co.in",
    "logo": "https://lapx.co.in/logo.png", // Ensure your logo is at this path
    "telephone": "+91-9111000757",
    "priceRange": "₹₹",
    "image": [
       "https://lapx.co.in/og-image.jpg", // Using your OG image as a primary business photo
       "https://lapx.co.in/images/shop-interior.jpg" 
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
      "latitude": 22.744527,
      "longitude": 75.893815
    },
    // The PlaceID link you provided in the footer
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Lap-X+Orbit+Mall+Indore&query_place_id=ChIJg3l2lGb9YjkR0U_e3MSkOzs",
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
      "reviewCount": "150", 
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.justdial.com/Indore/Lap-X-Near-C21-Malhar-Mega-Mall-Vijay-Nagar/0731PX731-X731-221031122403-F5F9_BZDET",
      // Add your Instagram or Facebook here if you have them
    ]
  };
};