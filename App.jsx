const originalContent = `import React from 'react';
import HeroSection from './HeroSection';
import LuxuryStatement from './LuxuryStatement';
import FeaturedProjects from './FeaturedProjects';
import WhyAttend from './WhyAttend';
import WhyInvestDubai from './WhyInvestDubai';
import EventDetails from './EventDetails';
import RegistrationForm from './RegistrationForm';
import AboutSobha from './AboutSobha';
import FloatingWhatsApp from './FloatingWhatsApp';
import Footer from './Footer';`

// This file contains the original flattened App component
// Copy contents to App.jsx for final version

function App() {
  return (
    <div className="relative">
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Luxury Statement */}
      <LuxuryStatement />

      {/* Section 3: Featured Projects */}
      <FeaturedProjects />

      {/* Section 4: Why Attend */}
      <WhyAttend />

      {/* Section 5: Why Invest in Dubai */}
      <WhyInvestDubai />

      {/* Section 6: Event Details */}
      <EventDetails />

      {/* Section 7: Registration Form */}
      <RegistrationForm />

      {/* Section 8: About Sobha */}
      <AboutSobha />

      {/* Section 9: Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
}

export default App;