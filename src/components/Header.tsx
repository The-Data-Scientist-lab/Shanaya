
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Heart, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-300 via-purple-300 to-transparent opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <Avatar className="h-48 w-48 border-4 border-pink-500 shadow-xl hover:scale-105 transition-all duration-300">
              <AvatarImage src="/lovable-uploads/a78397df-51be-4472-b17a-2eb411296178.png" alt="Shanaya" className="object-cover" />
              <AvatarFallback className="text-4xl bg-gradient-to-r from-pink-400 to-pink-600 text-white">S</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 right-0 bg-pink-500 text-white p-1.5 rounded-full shadow-lg animate-pulse-slow">
              <Heart className="h-6 w-6" fill="white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mt-6 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 bg-clip-text text-transparent drop-shadow">
            Shanaya's Private Video Calls
          </h1>
          
          <p className="mt-4 text-lg text-pink-900 max-w-2xl mx-auto font-medium">
            Intimate, seductive and personalized adult experiences just for you
          </p>

          <div className="mt-6 flex items-center justify-center">
            <a 
              href="https://t.me/Sexy_shanayaa" 
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-pink-800 transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Message me on Telegram
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
