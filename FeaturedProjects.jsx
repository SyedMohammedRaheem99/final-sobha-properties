import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Sobha One',
    subtitle: 'Waterfront Living',
    description: 'Experience luxury at its finest with stunning lagoon views in the heart of Dubai.',
    price: '₹1.3 Cr+',
    features: '1, 2, 3 Bedroom Premium Apartments',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
  },
  {
    id: 2,
    name: 'Sobha Hartland',
    subtitle: 'Premium Community',
    description: 'Luxury community in Mohammed Bin Rashid City with world-class amenities.',
    price: 'Prime Location',
    features: 'Close to Downtown Dubai • High Rental Demand',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
  },
  {
    id: 3,
    name: 'Sobha SeaHaven',
    subtitle: 'Marina View',
    description: 'Panoramic sea and skyline views with ultra-luxury interiors designed for global citizens.',
    price: 'Ultra Luxury',
    features: 'Ideal for NRIs • Premium Investment',
    image: 'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=800',
  },
];

const FeaturedProjects = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger animation for cards
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
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
    <section id="featured-projects" ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="text-gold-gradient">Dubai Projects</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Exclusive access to Sobha's most prestigious developments
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass hover-lift rounded-xl overflow-hidden group cursor-pointer transition-all duration-600 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="zoom-image h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-1">
                    {project.name}
                  </h3>
                  <p className="text-gold-400 text-lg font-medium">{project.subtitle}</p>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 pb-4 border-b border-white/10">
                  <p className="text-gold-500 text-xl font-bold">{project.price}</p>
                  <p className="text-gray-400 text-sm mt-1">{project.features}</p>
                </div>

                <button className="flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;