import React, { useState, useEffect, useRef } from 'react';
import { Award, Building, TrendingUp, CheckCircle } from 'lucide-react';

const AboutSobha = () => {
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

  const highlights = [
    'Exceptional construction quality',
    'Award-winning waterfront communities',
    'Iconic architecture & design',
    'High appreciation & ROI',
    'Timely delivery track record',
    'World-class lifestyle amenities',
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              About <span className="text-gold-gradient">Sobha Realty</span>
            </h2>
          </div>

          {/* Content Card */}
          <div className="glass-dark p-8 md:p-12 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              {/* Stat 1 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                  <Building className="w-8 h-8 text-black" />
                </div>
                <div className="text-4xl font-bold text-gold-400 mb-2">45+</div>
                <div className="text-gray-400">Years of Excellence</div>
              </div>

              {/* Stat 2 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <div className="text-4xl font-bold text-gold-400 mb-2">100+</div>
                <div className="text-gray-400">Awards Won</div>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <div className="text-4xl font-bold text-gold-400 mb-2">500M+</div>
                <div className="text-gray-400">Sq.Ft Delivered</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
                <span className="font-bold text-white">Sobha Realty</span> is a globally recognized luxury developer in Dubai, 
                renowned for delivering properties in prestigious locations including <span className="text-gold-400">Downtown Dubai</span>, 
                <span className="text-gold-400"> Mohammed Bin Rashid City</span>, <span className="text-gold-400">Dubai Marina</span>, 
                and premium waterfront districts. With an unwavering commitment to quality and innovation, Sobha has established 
                itself as a trusted name among discerning investors worldwide.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 glass p-4 rounded-lg hover:border-gold-500 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSobha;