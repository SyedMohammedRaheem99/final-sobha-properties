import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Shield, Building2, Globe2, DollarSign, FileCheck, Users2, Award, Home } from 'lucide-react';

const reasons = [
  {
    icon: TrendingUp,
    title: '7-10% Annual Returns',
    description: 'Consistently high rental yields compared to global markets',
    side: 'left',
  },
  {
    icon: DollarSign,
    title: '0% Property Tax',
    description: 'No annual property tax, capital gains tax, or inheritance tax',
    side: 'right',
  },
  {
    icon: Building2,
    title: 'Fast-Growing Economy',
    description: 'Strategic location connecting East and West with world-class infrastructure',
    side: 'left',
  },
  {
    icon: Shield,
    title: 'Safe & Stable Market',
    description: 'Highly regulated market with transparent legal framework',
    side: 'right',
  },
  {
    icon: Globe2,
    title: 'Global Investor Demand',
    description: 'Attracts investors from 200+ countries with strong market liquidity',
    side: 'left',
  },
  {
    icon: FileCheck,
    title: 'Easy Buying Process',
    description: 'Streamlined procedures for Indian buyers with remote purchasing options',
    side: 'right',
  },
  {
    icon: Award,
    title: 'Flexible Payment Plans',
    description: 'Low booking amounts with developer payment plans available',
    side: 'left',
  },
  {
    icon: Home,
    title: '100% Foreign Ownership',
    description: 'Full freehold ownership rights for international investors',
    side: 'right',
  },
  {
    icon: Users2,
    title: 'Strong Rental Market',
    description: 'High-quality tenants with excellent demand for premium properties',
    side: 'left',
  },
];

const WhyInvestDubai = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reasons.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
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
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245, 158, 11, 0.4) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Why Invest in <span className="text-gold-gradient">Dubai?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the unmatched advantages of Dubai real estate
          </p>
        </div>

        {/* Alternating Content Blocks */}
        <div className="space-y-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isLeft = reason.side === 'left';
            
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  !isLeft ? 'md:flex-row-reverse' : ''
                } ${
                  visibleItems.includes(index)
                    ? `opacity-100 translate-x-0`
                    : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'}`
                } transition-all duration-800`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Icon Box */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl gold-gradient flex items-center justify-center shadow-2xl">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 glass p-8 rounded-xl hover:border-gold-500 transition-all duration-300 ${
                  !isLeft ? 'md:text-right' : ''
                }`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#registration"
            className="inline-block gold-gradient text-black font-bold px-10 py-4 rounded-lg text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Start Your Dubai Investment Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestDubai;