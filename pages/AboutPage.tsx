import React from 'react';
import { ShieldCheck, Users, HeartHandshake } from 'lucide-react';
import { TEAM_MEMBERS, COMPANY_ASSETS } from '../constants';
import CallToAction from '../components/CallToAction';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Kyle & Sam Landscaping - Your Trusted Landscape Professionals"
        description="Meet Kyle & Sam, experienced landscaping professionals dedicated to transforming outdoor spaces. Quality workmanship, reliable service, and customer satisfaction guaranteed."
      />
      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-brand-green-dark mb-4">Our Story</h1>
              <p className="text-lg text-brand-gray-darker mb-4 leading-relaxed">
                Founded by lifelong friends Kyle and Sam, our company was born from a shared passion for transforming properties and a commitment to honest, hard work. With over 15 years of combined experience in the field, we saw a need in the GTA for a reliable, multi-disciplinary contractor that clients could truly trust.
              </p>
              <p className="text-lg text-brand-gray-darker leading-relaxed">
                We started with a single truck and a lot of determination. Today, we're proud to lead a team of skilled professionals who share our vision for quality and customer service. Every project, big or small, is an opportunity for us to prove our commitment and build lasting relationships.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-2xl h-96">
              <img src={COMPANY_ASSETS.aboutImage} alt={COMPANY_ASSETS.aboutImageAlt} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-brand-gray-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark">Our Core Values</h2>
                  <p className="text-lg text-brand-gray-darker mt-2 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                      <ShieldCheck className="mx-auto h-12 w-12 text-brand-green mb-4" />
                      <h3 className="text-2xl font-semibold text-brand-green-dark mb-2">Quality & Integrity</h3>
                      <p className="text-brand-gray-darker">We stand by our work. We do the job right the first time, using the best materials and transparent communication.</p>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md">
                      <HeartHandshake className="mx-auto h-12 w-12 text-brand-green mb-4" />
                      <h3 className="text-2xl font-semibold text-brand-green-dark mb-2">Customer Focus</h3>
                      <p className="text-brand-gray-darker">Your satisfaction is our ultimate goal. We listen to your needs and work collaboratively to exceed your expectations.</p>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md">
                      <Users className="mx-auto h-12 w-12 text-brand-green mb-4" />
                      <h3 className="text-2xl font-semibold text-brand-green-dark mb-2">Teamwork & Respect</h3>
                      <p className="text-brand-gray-darker">Our team is our greatest asset. We foster a culture of respect, safety, and continuous improvement.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark">Meet the Founders</h2>
            <p className="text-lg text-brand-gray-darker mt-2">The dedicated friends and professionals behind our success.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 justify-center md:max-w-md mx-auto">
            {TEAM_MEMBERS.map(member => (
              <div key={member.name} className="text-center">
                <img src={member.imageUrl} alt={member.imageAlt} className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg object-cover" />
                <h3 className="text-xl font-bold text-brand-green-dark">{member.name}</h3>
                <p className="text-brand-gray-darker">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default AboutPage;