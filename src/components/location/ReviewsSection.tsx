"use client";

import React, { useState } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface Review {
  name: string;
  rating: number;
  text: string;
}

interface ReviewsSectionProps {
  location: string;
}

const manualReviews: Review[] = [
  { name: "Sputnik Indore", rating: 5, text: "Very quick and very genuine place. I got best and fastest service." },
  { name: "Anshika Kachhbay", rating: 5, text: "They give very good service." },
  { name: "Devansh Gupta", rating: 5, text: "Great service, professional knows what they are doing and what parts must be ordered." },
  { name: "Nishi Gupta", rating: 5, text: "Great service and very good customer support, fixed my problem in 1–2 hours hassle-free." },
  { name: "Amit Japthapi", rating: 5, text: "Very quick and genuine suggestions provided, friendly in nature and trusted laptop service centre." },
  { name: "Rupali Sahu", rating: 5, text: "Excellent service, perfectly repaired laptop, work done on time and very friendly staff." },
  { name: "Mohit Gaur", rating: 5, text: "They repaired my laptop in just one hour. Team is very friendly and calm." },
  { name: "Suyash Das", rating: 5, text: "Issue in my Mac resolved the same day. Smooth and fast service." },
  { name: "Mayur Soudawat", rating: 5, text: "Battery replacement done perfectly after explaining all available options." },
  { name: "Amrapali Shukla", rating: 5, text: "Quick turnaround, fair pricing, and my laptop works like new." },
  { name: "Vishal Gupta", rating: 5, text: "Fantastic and genuine service provider. Very difficult to find such honesty nowadays." },
  { name: "Deep Agrawal", rating: 5, text: "Rapid service with excellent diagnosis. Laptop fixed on time without delay." },
  { name: "Shubham Sharma", rating: 5, text: "Great guidance, timely work, and best solutions suggested." },
  { name: "Uday PS", rating: 5, text: "Motherboard issue fixed in under an hour. Extremely professional service." },
  { name: "Vansh Shrivastava", rating: 5, text: "Very well serviced, polite behavior and quality work." },
];

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ location }) => {
  const googlePlaceId = "ChIJg3l2lGb9YjkR0U_e3MSkOzs";
  const googleMapsUrl = `https://www.google.com/maps/place/?q=place_id:${googlePlaceId}`;
  const googleWriteReviewUrl = `https://search.google.com/local/writereview?placeid=${googlePlaceId}`;

  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? manualReviews : manualReviews.slice(0, 6);

  const rating = 4.9;
  const reviewCount = 1500;

  const renderStars = (value: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (value >= i) stars.push(<BsStarFill key={i} className="text-yellow-400" />);
      else if (value + 0.5 >= i) stars.push(<BsStarHalf key={i} className="text-yellow-400" />);
      else stars.push(<BsStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Trusted Laptop Repair in {location}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Real customer experiences and consistent 5-star satisfaction on Google Maps.</p>
        </div>

        {/* Google Rating Card */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-8 py-6 text-center">
            <div className="text-4xl font-black text-gray-900 mb-1">{rating}</div>
            <div className="flex justify-center gap-1 mb-2">{renderStars(rating)}</div>
            <p className="text-sm text-gray-600">Based on {reviewCount}+ Google reviews</p>
            <div className="flex justify-center gap-4 mt-4 flex-wrap">
              <a href={googleWriteReviewUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-sky-600 text-white rounded-xl font-semibold text-sm hover:bg-sky-500 transition">Write a Review</a>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-gray-200 text-gray-800 rounded-xl font-semibold text-sm hover:bg-gray-300 transition">View on Google Maps</a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-3">{renderStars(review.rating)}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">“{review.text}”</p>
              </div>
              <div className="font-semibold text-gray-900 text-sm">— {review.name}</div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-10">
          <button onClick={() => setShowAll(!showAll)} className="px-8 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition">
            {showAll ? "Show Less Reviews" : "Show More Reviews"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
