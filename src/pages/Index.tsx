
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { Heart, Star, MessageCircle, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center mb-2">
              <Star className="h-5 w-5 text-pink-500 mr-2" fill="currentColor" />
              <span className="text-sm font-medium text-pink-700">EXCLUSIVE PRIVATE SESSIONS</span>
              <Star className="h-5 w-5 text-pink-500 ml-2" fill="currentColor" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-pink-900">Choose Your Fantasy</h2>
            <p className="text-pink-800 max-w-2xl mx-auto">
              Bs apni pasand ki service book karein aur dekhain kya hota hai sara paani nichod ke rakh dungi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                price={service.price}
                duration={service.duration}
                description={service.description}
                isPopular={service.isPopular}
              />
            ))}
          </div>
          
          <div className="mt-20 mb-10 text-center max-w-2xl mx-auto p-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl shadow-lg border border-pink-200">
            <div className="flex justify-center mb-4">
              <MessageCircle className="h-10 w-10 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold text-pink-900 mb-4">Contact Me on Telegram</h3>
            <p className="text-pink-800 mb-6">
              Ready to experience an unforgettable time? Message me on Telegram to book your private session now.
              I'm waiting to fulfill your desires.
            </p>
            <Button 
              className="bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white px-8 py-2 rounded-full transition-all shadow-lg"
              onClick={() => window.open("https://t.me/shanaya", "_blank")}
            >
              Message me on Telegram
            </Button>
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-pink-100">
            <div className="flex justify-center mb-4">
              <Lock className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-pink-900 mb-3">100% Discreet & Secure</h3>
            <p className="text-pink-800 text-sm">
              Your privacy is my priority. All sessions are completely confidential,
              and your personal information is always protected.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
