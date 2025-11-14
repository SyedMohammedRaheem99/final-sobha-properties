import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-gold-gradient mb-4">
              Sobha Dubai
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Bringing Dubai's finest luxury real estate to discerning Indian investors. 
              Experience world-class living with unmatched quality and returns.
            </p>
            <div className="glass inline-block px-4 py-2 rounded-lg">
              <p className="text-gold-400 font-semibold text-sm">
                Property Showcase Coimbatore 2025
              </p>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:+918713837999"
                className="flex items-start gap-3 text-gray-400 hover:text-gold-400 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+91 87138 37999</p>
                </div>
              </a>

              <a
                href="mailto:info@sobhadubai.com"
                className="flex items-start gap-3 text-gray-400 hover:text-gold-400 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">info@sobhadubai.com</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Event Venue</p>
                  <p className="font-medium">Vivanta Surya, Coimbatore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links & Social */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href="#featured-projects"
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
                >
                  Register Now
                </a>
              </li>
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
                >
                  Event Details
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918713837999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
                >
                  Contact Advisor
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="text-white font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-gold-500 transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-gold-400" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-gold-500 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-gold-400" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-gold-500 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-gold-400" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-gold-500 transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-gold-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Sobha Realty. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;