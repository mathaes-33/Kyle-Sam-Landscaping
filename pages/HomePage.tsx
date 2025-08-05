import React from 'react';
import { Link } from 'react-router-dom';
import { TreePine, ShieldCheck, Star, Quote } from 'lucide-react';
import { SERVICES, GALLERY_ITEMS, TESTIMONIALS, COMPANY_ASSETS } from '../constants';
import CallToAction from '../components/CallToAction';
import SEO from '../components/SEO';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center flex flex-col">
        <div className="inline-block bg-brand-green-light text-brand-green-dark p-4 rounded-full mb-4 mx-auto">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-brand-green-dark mb-2">{title}</h3>
        <p className="text-brand-gray-darker mb-4 flex-grow">{description}</p>
        <Link to={link} className="font-semibold text-brand-green hover:text-brand-green-dark transition-colors">
            Learn More &rarr;
        </Link>
    </div>
);

const TestimonialCard: React.FC<{ quote: string; name: string; service: string; }> = ({ quote, name, service }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col">
        <Quote className="h-8 w-8 text-brand-gold mx-auto mb-4" />
        <p className="text-brand-gray-darker italic mb-4 flex-grow">"{quote}"</p>
        <div>
            <p className="font-bold text-brand-green-dark">{name}</p>
            <p className="text-sm text-brand-gray-dark">{service}</p>
        </div>
    </div>
);


const HomePage: React.FC = () => {
    return (
        <>
            <SEO 
                title="Kyle & Sam Landscaping - Professional Landscaping Services"
                description="Transform your outdoor space with Kyle & Sam Landscaping. Expert waterproofing, landscaping design, and demolition services. Call (437) 240-2266 for a free consultation today!"
            />
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white flex items-center" style={{ backgroundImage: `url('${GALLERY_ITEMS[0].imageUrl}')` }} role="img" aria-label={GALLERY_ITEMS[0].imageAlt}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tighter">Your Vision, Our Expertise.</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-brand-gray-light">
                        Expert Landscaping, Demolition, and Waterproofing services for the Greater Toronto Area. We build with passion and precision.
                    </p>
                    <Link to="/contact" className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 transform hover:scale-105">
                        Get a Free Quote
                    </Link>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="py-16 md:py-24 bg-brand-gray-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark">Our Core Services</h2>
                        <p className="text-lg text-brand-gray-darker mt-2 max-w-2xl mx-auto">From pristine landscapes to secure foundations, we deliver excellence.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.slice(0, 3).map(service => (
                           <ServiceCard key={service.id} icon={service.icon} title={service.title} description={service.shortDescription} link="/services" />
                        ))}
                    </div>
                     <div className="text-center mt-12">
                        <Link to="/services" className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">Why Choose Kyle & Sam?</h2>
                            <p className="text-lg text-brand-gray-darker mb-6">We are more than just contractors. We are your partners in bringing your property's potential to life. Our commitment to quality, integrity, and customer satisfaction sets us apart.</p>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Star className="h-6 w-6 text-brand-gold mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Unmatched Quality</h3>
                                        <p className="text-brand-gray-darker">We use the finest materials and proven techniques to ensure lasting results.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <ShieldCheck className="h-6 w-6 text-brand-gold mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Reliable & Insured</h3>
                                        <p className="text-brand-gray-darker">Fully insured and committed to safety and timelines you can count on.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <TreePine className="h-6 w-6 text-brand-gold mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Local GTA Experts</h3>
                                        <p className="text-brand-gray-darker">Deep understanding of local climate, soil, and building codes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-2xl h-96">
                             <img src={COMPANY_ASSETS.aboutImage} alt={COMPANY_ASSETS.aboutImageAlt} className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 md:py-24 bg-brand-gray-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark">What Our Clients Say</h2>
                        <p className="text-lg text-brand-gray-darker mt-2 max-w-2xl mx-auto">Real stories from satisfied customers across the GTA.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial, index) => (
                           <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction />
        </>
    );
};

export default HomePage;