
import React from 'react';
import { Heart, MessageCircle, Instagram, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-pink-200 to-transparent opacity-40 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-2">
              Shanaya's Private Calls
            </h3>
            <p className="text-pink-800">Premium quality adult video experiences</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://t.me/shanaya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full shadow-lg hover:bg-pink-100 transition-colors"
            >
              <MessageCircle size={24} className="text-pink-500" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full shadow-lg hover:bg-pink-100 transition-colors">
              <Instagram size={24} className="text-pink-500" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full shadow-lg hover:bg-pink-100 transition-colors">
              <Lock size={24} className="text-pink-600" />
            </a>
          </div>
        </div>
        
        <div className="text-center text-sm text-pink-800">
          <p className="flex items-center justify-center">
            © 2025 Shanaya's Private Video Calls. All Rights Reserved 
            <Heart size={14} className="ml-2 text-pink-500" fill="currentColor" />
          </p>
          <p className="mt-2">For adults 18+ only | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
