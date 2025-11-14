import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = '918713837999';
  const message = encodeURIComponent('Hi! I would like to know more about the Sobha Dubai Property Showcase in Coimbatore.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-slow opacity-30 group-hover:opacity-50 transition-opacity"></div>
        
        {/* Button */}
        <div className="relative bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 pulse-glow">
          <MessageCircle className="w-7 h-7 text-white" fill="white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="glass-dark px-4 py-2 rounded-lg">
            <p className="text-white font-medium text-sm">Chat with Dubai Advisor</p>
          </div>
        </div>

        {/* Notification Badge (Optional) */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;