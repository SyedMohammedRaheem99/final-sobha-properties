import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Clock, Navigation } from 'lucide-react';

const EventDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Event <span className="text-gold-gradient">Details</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Mark your calendar for this exclusive showcase
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Info Card */}
          <div
            className={`glass-dark p-8 md:p-10 rounded-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
              Join Us at the Showcase
            </h3>

            <div className="space-y-6">
              {/* Venue */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-gold-400 font-semibold mb-1">Venue</p>
                  <p className="text-white text-lg font-medium">Vivanta Surya (By Taj)</p>
                  <p className="text-gray-400 text-sm">
                    RS Puram, Coimbatore, Tamil Nadu
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-gold-400 font-semibold mb-1">Date</p>
                  <p className="text-white text-lg font-medium">15–16 November 2025</p>
                  <p className="text-gray-400 text-sm">Two days of exclusive access</p>
                </div>
              </div>

              {/* Timing */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-gold-400 font-semibold mb-1">Timing</p>
                  <p className="text-white text-lg font-medium">10:00 AM – 8:00 PM</p>
                  <p className="text-gray-400 text-sm">Book your preferred time slot</p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Vivanta+Surya+Taj+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full flex items-center justify-center gap-2 gold-gradient text-black font-bold py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </div>

          {/* Map */}
          <div
            className={`glass-dark rounded-2xl overflow-hidden h-[400px] lg:h-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1682359583254!2d76.95615731526804!3d11.021064992151967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sVivanta%20Coimbatore!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vivanta Surya Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;