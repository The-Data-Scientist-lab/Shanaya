
import React from 'react';
import { Clock, Video, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  price: number;
  duration: string;
  description: string;
  isPopular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  price, 
  duration, 
  description,
  isPopular = false
}) => {
  const handleBookNow = () => {
    window.open("https://t.me/shanaya", "_blank");
  };

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl border p-6 shadow-lg transition-all duration-300 
      hover:-translate-y-2 hover:shadow-xl group ${isPopular ? 'bg-gradient-to-br from-pink-50 to-pink-100 border-pink-400' : 'bg-white border-pink-200'}`}
    >
      {isPopular && (
        <span className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-pink-700 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
          Most Popular
        </span>
      )}
      
      <h3 className="text-xl font-bold mb-3 text-pink-900 group-hover:text-pink-600 transition-colors">{title}</h3>
      
      <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent mb-4">
        ₹{price}
        <Heart className="inline-block ml-2 h-5 w-5 text-pink-500" fill={isPopular ? "#FF69B4" : "transparent"} />
      </div>
      
      <div className="flex items-center space-x-2 mb-4 text-pink-800">
        <Clock className="h-4 w-4" /> 
        <span>{duration}</span>
      </div>
      
      <div className="flex items-center space-x-2 mb-6 pb-6 border-b border-pink-200">
        <Video className="h-4 w-4 text-pink-500" /> 
        <span className="text-sm text-pink-800">Private adult video call</span>
      </div>
      
      <p className="text-sm text-pink-700 mb-6 min-h-[60px]">{description}</p>
      
      <Button 
        onClick={handleBookNow}
        className="w-full bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white shadow-md transition-all"
      >
        Book Now
      </Button>
    </div>
  );
};

export default ServiceCard;
