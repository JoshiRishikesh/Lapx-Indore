// src/components/location/ReviewsSection.tsx
"use client";

import React, { useState } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface ReviewsSectionProps {
  location: string;
}

interface Review {
  name: string;
  rating: number;
  text: string;
  time?: string;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ location }) => {
  const googlePlaceId = "ChIJg3l2lGb9YjkR0U_e3MSkOzs";
  const googleWriteReviewUrl = `https://search.google.com/local/writereview?placeid=${googlePlaceId}`;
  const googleMapsUrl = `https://www.google.com/maps/place/?q=place_id:${googlePlaceId}`;

  const [rating] = useState(4.9);
  const [reviewCount] = useState(1500);

const manualReviews: Review[] = [
  { name: "Sputnik Indore", rating: 5, text: "Very quick and very genuine place. I got best and fastest service." },
  { name: "Anshika Kachhbay", rating: 5, text: "They give very good service." },
  { name: "Devansh Gupta", rating: 5, text: "Great service, professional knows what they are doing and what parts must be ordered." },
  { name: "Nishi Gupta", rating: 5, text: "Great service and very good customer support, fixed my problem in 1-2 hours hassle-free!" },
  { name: "Amit Japthapi", rating: 5, text: "Very quick and genuine suggestions provided, friendly in nature and trusted laptop service centre." },
  { name: "Rupali Sahu", rating: 5, text: "Got excellent service, my laptop was perfectly repaired. The work was done on time and the staff was very friendly." },
  { name: "Mohit Gaur", rating: 5, text: "I had a great experience with LapX. They repaired my laptop in just one hour. The team is very friendly and calm." },
  { name: "Suyash Das", rating: 5, text: "The experience was really nice and smooth. I had an issue in my Mac and it was resolved the same day. Fast service, thank you!" },
  { name: "Mayur Soudawat", rating: 5, text: "I visited LapX for a battery replacement. They explained all available options and performed the work efficiently." },
  { name: "Amrapali Shukla", rating: 5, text: "Excellent laptop repair service! Quick turnaround, fair pricing, and my laptop works like new. Highly recommend!" },
  { name: "Vishal Gupta", rating: 5, text: "Fantastic and genuine service provider. At this time it's difficult to find such a wonderful service centre." },
  { name: "Deep Agrawal", rating: 5, text: "Such a wonderful rapid service. My laptop was fixed on time without any delay. Owner diagnosing skills are awesome." },
  { name: "Shubham Sharma", rating: 5, text: "Great place to be in, Roshan had been big help and was doing work at hand timely and also suggested the best solutions." },
  { name: "Rishi Choubey", rating: 5, text: "Very disappointed with my experience at this repair shop. They overcharged me for the repair compared to other places. (Owner responded professionally)" },
  { name: "Uday PS", rating: 5, text: "Extremely fast and professional service, fixed my motherboard issue in my ROG Strix laptop hand to hand under an hour." },
];


  const renderStars = (value: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (value >= i) stars.push(<BsStarFill key={i} className="text-yellow-400 inline-block" />);
      else if (value + 0.5 >= i) stars.push(<BsStarHalf key={i} className="text-yellow-400 inline-block" />);
      else stars.push(<BsStar key={i} className="text-yellow-400 inline-block" />);
    }
    return stars;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          What Customers Say in {location}
        </h2>
        <p className="text-gray-600 mb-8">
          Trusted by over {reviewCount} customers with real-time Google ratings.
        </p>

        {/* Rating Card */}
        <div className="inline-block bg-white shadow-lg rounded-2xl p-8 border-t-4 border-yellow-400 mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-4xl font-black">{rating}</div>
            <div className="text-yellow-400 text-xl">{renderStars(rating)}</div>
          </div>
          <p className="text-gray-600 mb-6 text-sm md:text-base">Rated excellent by {reviewCount}+ customers</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-sky-600 text-white rounded-xl font-bold text-sm hover:bg-sky-500 transition"
            >
              Write a Review
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-bold text-sm hover:bg-gray-300 transition"
            >
              See on Google Maps
            </a>
          </div>
        </div>

        {/* Manual Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manualReviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-left">
              <div className="flex items-center gap-3 mb-2">
                <div className="font-semibold text-gray-900">{review.name}</div>
                <div className="text-yellow-400 text-sm">{renderStars(review.rating)}</div>
              </div>
              <p className="text-gray-600 text-sm">{review.text}</p>
              {review.time && <p className="text-gray-400 text-xs mt-2">{review.time}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
