
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-brand-green-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg text-brand-gray-light max-w-2xl mx-auto mb-8">
          Let's discuss your project. Contact us today for a free, no-obligation consultation and quote.
        </p>
        <Link
          to="/contact"
          className="bg-white hover:bg-brand-gray-light text-brand-green-dark font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get Your Free Quote
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
