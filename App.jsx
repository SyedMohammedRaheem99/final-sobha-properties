import React from 'react';
import HeroSection from './HeroSection.jsx';
import LuxuryStatement from './LuxuryStatement.jsx';
import FeaturedProjects from './FeaturedProjects.jsx';
import WhyAttend from './WhyAttend.jsx';
import WhyInvestDubai from './WhyInvestDubai.jsx';
import EventDetails from './EventDetails.jsx';
import RegistrationForm from './RegistrationForm.jsx';
import AboutSobha from './AboutSobha.jsx';
import FloatingWhatsApp from './FloatingWhatsApp.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="relative">
      {/* All your sections here */}
      <HeroSection />
      <LuxuryStatement />
      <FeaturedProjects />
      <WhyAttend />
      <WhyInvestDubai />
      <EventDetails />
      <RegistrationForm />
      <AboutSobha />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
