import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { SERVICES, SOCIAL_LINKS, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green-dark text-brand-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">Kyle & Sam</span>
            </Link>
            <p className="text-brand-gray-dark">
              Your trusted partners in transforming outdoor and indoor spaces across the GTA.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brand-gray-light hover:text-white transition-colors"><Facebook /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-gray-light hover:text-white transition-colors"><Instagram /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-brand-gray-light hover:text-white transition-colors"><Linkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map(service => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-brand-green-light flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-1 text-brand-green-light flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-1 text-brand-green-light flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-brand-gray-dark">
          <p>&copy; {new Date().getFullYear()} Kyle & Sam Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;