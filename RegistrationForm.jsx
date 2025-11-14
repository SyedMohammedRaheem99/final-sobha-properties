import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const RegistrationForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    city: '',
    projectInterest: '',
    budgetRange: '',
    timeSlot: '',
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        mobile: '',
        city: '',
        projectInterest: '',
        budgetRange: '',
        timeSlot: '',
      });
    }, 5000);
  };

  return (
    <section id="registration" ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Secure Your <span className="text-gold-gradient">VIP Slot</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Limited exclusive consultation slots available. Register now!
          </p>
        </div>

        <div
          className={`glass-dark p-8 md:p-12 rounded-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="relative">
                <label htmlFor="fullName" className="block text-gray-400 text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 input-glow focus:border-gold-500 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mobile Number */}
                <div className="relative">
                  <label htmlFor="mobile" className="block text-gray-400 text-sm font-medium mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    pattern="[0-9]{10}"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 input-glow focus:border-gold-500 transition-all duration-300"
                    placeholder="10-digit mobile number"
                  />
                </div>

                {/* City */}
                <div className="relative">
                  <label htmlFor="city" className="block text-gray-400 text-sm font-medium mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 input-glow focus:border-gold-500 transition-all duration-300"
                    placeholder="Your city"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Interest */}
                <div className="relative">
                  <label htmlFor="projectInterest" className="block text-gray-400 text-sm font-medium mb-2">
                    Project Interest *
                  </label>
                  <select
                    id="projectInterest"
                    name="projectInterest"
                    required
                    value={formData.projectInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white input-glow focus:border-gold-500 transition-all duration-300 cursor-pointer"
                  >
                    <option value="" className="bg-gray-900">Select property type</option>
                    <option value="apartment" className="bg-gray-900">Apartment</option>
                    <option value="villa" className="bg-gray-900">Villa</option>
                    <option value="townhouse" className="bg-gray-900">Townhouse</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div className="relative">
                  <label htmlFor="budgetRange" className="block text-gray-400 text-sm font-medium mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    required
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white input-glow focus:border-gold-500 transition-all duration-300 cursor-pointer"
                  >
                    <option value="" className="bg-gray-900">Select budget range</option>
                    <option value="below-1cr" className="bg-gray-900">Below ₹1 Cr</option>
                    <option value="1-2cr" className="bg-gray-900">₹1-2 Cr</option>
                    <option value="2-5cr" className="bg-gray-900">₹2-5 Cr</option>
                    <option value="above-5cr" className="bg-gray-900">Above ₹5 Cr</option>
                  </select>
                </div>
              </div>

              {/* Preferred Time Slot */}
              <div className="relative">
                <label htmlFor="timeSlot" className="block text-gray-400 text-sm font-medium mb-2">
                  Preferred Time Slot *
                </label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  required
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white input-glow focus:border-gold-500 transition-all duration-300 cursor-pointer"
                >
                  <option value="" className="bg-gray-900">Select time slot</option>
                  <option value="11am" className="bg-gray-900">11:00 AM</option>
                  <option value="1pm" className="bg-gray-900">1:00 PM</option>
                  <option value="4pm" className="bg-gray-900">4:00 PM</option>
                  <option value="6pm" className="bg-gray-900">6:00 PM</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-shimmer text-black font-bold py-5 rounded-lg text-lg hover:scale-105 transition-all duration-300 shadow-2xl mt-8"
              >
                Confirm My Slot
              </button>

              <p className="text-gray-500 text-sm text-center mt-4">
                * All fields are required. Your information is secure and will not be shared.
              </p>
            </form>
          ) : (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Registration Successful!</h3>
              <p className="text-gray-300 text-lg mb-2">
                Thank you for registering, {formData.fullName}!
              </p>
              <p className="text-gray-400 mb-6">
                We'll contact you shortly on {formData.mobile} with further details.
              </p>
              <div className="glass p-4 rounded-lg inline-block">
                <p className="text-gold-400 font-semibold">
                  Your Time Slot: {formData.timeSlot.toUpperCase()}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;