import React from 'react';
import { SERVICES } from '../constants';
import CallToAction from '../components/CallToAction';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Services | Kyle & Sam Landscaping"
        description="Explore our wide range of services including Landscaping, Demolition, Waterproofing, Playground Installation, and more. Quality craftsmanship for the GTA."
      />
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-green-dark">Our Expertise</h1>
            <p className="text-lg text-brand-gray-darker mt-3 max-w-3xl mx-auto">
              We provide a comprehensive suite of services to enhance and protect your property. Each project is handled with the utmost professionalism and care.
            </p>
          </div>

          <div className="space-y-20">
            {SERVICES.map((service, index) => (
              <div key={service.id} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`rounded-lg overflow-hidden shadow-2xl h-96 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <img src={service.imageUrl} alt={service.imageAlt} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  <div className="inline-block text-brand-green">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-brand-green-dark">{service.title}</h2>
                  <p className="text-brand-gray-darker text-lg leading-relaxed">{service.longDescription}</p>
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span className="text-brand-gray-darker">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CallToAction />
    </>
  );
};

export default ServicesPage;