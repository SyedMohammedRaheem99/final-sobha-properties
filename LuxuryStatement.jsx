import React, { useState, useEffect, useRef } from 'react';

const LuxuryStatement = () => {
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
    <section ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          When Dubai's Finest Luxury
          <br />
          <span className={`animated-underline ${isVisible ? 'visible' : ''}`}>
            <span className="text-gold-gradient">Comes to Coimbatore</span>
          </span>
        </h2>
      </div>
    </section>
  );
};

export default LuxuryStatement;