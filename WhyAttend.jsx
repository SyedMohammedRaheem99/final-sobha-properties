import React, { useState, useEffect, useRef } from 'react';
import { Eye, Users, Tag, TrendingUp, FileText, Video, Gift, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Eye,
    title: 'Exclusive Previews',
    description: 'First look at upcoming Dubai projects',
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Direct access to Sobha Dubai Sales Advisors',
  },
  {
    icon: Tag,
    title: 'Early-Access Pricing',
    description: 'Special rates for event attendees',
  },
  {
    icon: TrendingUp,
    title: 'Investment Guidance',
    description: 'Tailored advice for Indian buyers & NRIs',
  },
  {
    icon: FileText,
    title: 'Complete Documentation',
    description: 'Project brochures & floor plans',
  },
  {
    icon: Video,
    title: 'Dubai Lifestyle Showcase',
    description: 'Live presentations & virtual tours',
  },
  {
    icon: Gift,
    title: 'Free Entry',
    description: 'No registration fee required',
  },
  {
    icon: Clock,
    title: 'Limited VIP Slots',
    description: 'Exclusive one-on-one consultations',
  },
];

const WhyAttend = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          benefits.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Why Attend <span className="text-gold-gradient">This Event?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Your gateway to Dubai's most prestigious properties
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`glass p-6 rounded-xl hover:border-gold-500 transition-all duration-500 hover:scale-105 ${
                  visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;