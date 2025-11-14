import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gold-gradient">Sobha Dubai</span>
            <br />
            <span className="text-white">Property Showcase</span>
          </h1>

          {/* Event Details */}
          <div className="mb-8 space-y-3">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-gold-400">
              Coimbatore Exclusive
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              15–16 November 2025 | 10 AM – 8 PM
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              Vivanta Surya (By Taj), Coimbatore
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a
              href="#registration"
              className="btn-shimmer text-black font-semibold px-8 py-4 rounded-lg text-lg hover:scale-105 transition-all duration-300 shadow-2xl min-w-[240px]"
            >
              Book Your VIP Slot
            </a>
            <button
              onClick={scrollToProjects}
              className="glass-dark text-white font-semibold px-8 py-4 rounded-lg text-lg hover:border-gold-500 hover:text-gold-400 transition-all duration-300 min-w-[240px] border border-white/20"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gold-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;