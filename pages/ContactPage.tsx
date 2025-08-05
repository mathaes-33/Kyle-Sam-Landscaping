import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import SEO from '../components/SEO';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'success' && (
        <div className="bg-brand-green-light text-brand-green-dark p-4 rounded-md">
          Thank you for your message! We'll get back to you shortly.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-gray-darker mb-1">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-brand-gray-dark rounded-md focus:ring-brand-green focus:border-brand-green" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-gray-darker mb-1">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-brand-gray-dark rounded-md focus:ring-brand-green focus:border-brand-green" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-gray-darker mb-1">Phone Number (Optional)</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-brand-gray-dark rounded-md focus:ring-brand-green focus:border-brand-green" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-gray-darker mb-1">Your Message</label>
        <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-brand-gray-dark rounded-md focus:ring-brand-green focus:border-brand-green"></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 disabled:bg-brand-gray disabled:cursor-not-allowed flex items-center justify-center"
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

const ContactPage: React.FC = () => {
    return (
      <>
        <SEO
            title="Contact Kyle & Sam Landscaping - Free Estimates Available"
            description="Ready to transform your outdoor space? Contact Kyle & Sam Landscaping today! Call (437) 240-2266 for free estimates on all landscaping, demolition, and waterproofing services."
        />
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-green-dark">Get In Touch</h1>
                    <p className="text-lg text-brand-gray-darker mt-3 max-w-3xl mx-auto">
                        Ready to start your next project? We're here to help. Fill out the form below or contact us directly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Form */}
                    <div className="lg:col-span-3 bg-brand-gray-light p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-brand-green-dark mb-6">Send us a Message</h2>
                        <ContactForm />
                    </div>

                    {/* Contact Info & Map */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Contact Information</h2>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-center space-x-3 text-brand-gray-darker">
                                    <MapPin className="h-6 w-6 text-brand-green" />
                                    <span>{CONTACT_INFO.fullAddress}</span>
                                </li>
                                <li className="flex items-center space-x-3 text-brand-gray-darker">
                                    <Phone className="h-6 w-6 text-brand-green" />
                                    <span>{CONTACT_INFO.phone}</span>
                                </li>
                                <li className="flex items-center space-x-3 text-brand-gray-darker">
                                    <Mail className="h-6 w-6 text-brand-green" />
                                    <span>{CONTACT_INFO.email}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-brand-gray rounded-lg h-96 shadow-inner overflow-hidden">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369324.2819894092!2d-79.93290714392474!3d43.71731553558834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1685031201531!5m2!1sen!2sca"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map of Greater Toronto Area"
                          ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default ContactPage;