// src/components/ServiceCard.tsx
import React from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType; // React Icon component
  title: string;
  description: string;
  accentColor?: string; // Optional border/accent color
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, accentColor = 'red-600' }) => {
  return (
    <div
      className={`
        bg-white 
        p-8 
        rounded-2xl 
        shadow-lg 
        hover:shadow-2xl 
        transition-all duration-300 
        transform hover:-translate-y-2 hover:scale-[1.03] 
        border-t-4 border-${accentColor} 
        flex flex-col items-start justify-start
      `}
    >
      {/* Icon */}
      <div
        className={`text-${accentColor} text-5xl mb-4 p-3 bg-${accentColor}/10 rounded-xl`}
      >
        <Icon />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
