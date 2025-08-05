import React from 'react';
import { TreePine, Wrench, Droplets, ToyBrick, Shovel, Waves, Leaf } from 'lucide-react';

export const CONTACT_INFO = {
  phone: '(437) 240-2266',
  email: 'contact@kylesam.com',
  address: 'Toronto, ON, Canada',
  fullAddress: 'Greater Toronto Area, ON'
};

export const SERVICES = [
  {
    id: 'landscaping',
    title: 'Landscaping',
    icon: <TreePine size={32} />,
    shortDescription: 'Creating beautiful, functional outdoor spaces tailored to your vision.',
    longDescription: 'Our landscaping services cover everything from design to installation and maintenance. We create stunning and sustainable outdoor environments, including patios, walkways, retaining walls, garden beds, and sod installation. We work with you to bring your dream backyard to life.',
    imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/03_interlock_walkway.jpg',
    imageAlt: 'A newly laid interlock brick walkway leading to a house entrance.',
    features: ['Custom Landscape Design', 'Interlock Patios & Walkways', 'Retaining Walls', 'Sodding & Planting', 'Deck & Fence Construction'],
  },
  {
    id: 'demolition',
    title: 'Demolition',
    icon: <Wrench size={32} />,
    shortDescription: 'Safe, efficient, and clean demolition services for any project size.',
    longDescription: 'We provide professional demolition services for both residential and commercial properties. Our team is equipped to handle interior strip-outs, structural demolition, and concrete breaking with a strong focus on safety, efficiency, and site cleanup.',
    imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/user_team_saw_closeup.jpg',
    imageAlt: 'A team member operating a large red Hilti concrete saw with water to minimize dust during a demolition project.',
    features: ['Interior & Exterior Demolition', 'Concrete Cutting & Breaking', 'Site Clearing & Preparation', 'Asbestos Abatement Coordination', 'Debris Removal & Recycling'],
  },
  {
    id: 'waterproofing',
    title: 'Waterproofing',
    icon: <Droplets size={32} />,
    shortDescription: 'Protecting your property from water damage with reliable solutions.',
    longDescription: 'Keep your basement dry and your foundation secure with our expert waterproofing services. We specialize in interior and exterior solutions, including foundation crack repair, weeping tile systems, and sump pump installation, to provide long-lasting protection against water intrusion.',
    imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/07_waterproofing_membrane.jpg',
    imageAlt: 'Applying a black waterproof membrane and installing weeping tile on a new home foundation.',
    features: ['Exterior Foundation Waterproofing', 'Interior Weeping Tile Systems', 'Sump Pump Installation', 'Foundation Crack Repair (Epoxy/Polyurethane)', 'Window Well Installation & Drains'],
  },
  {
    id: 'playground',
    title: 'Playground Installation',
    icon: <ToyBrick size={32} />,
    shortDescription: 'Safe and fun custom playground installations for communities and homes.',
    longDescription: 'Create safe, fun outdoor spaces with our professional playground installation services. We handle everything from site preparation to the assembly of custom wooden playsets and the installation of safety surfacing, ensuring a complete and secure solution.',
    imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/user_playground_worker_pointing.jpg',
    imageAlt: 'A team member pointing out details on a new playground installation with soft rubber tiles.',
    features: ['Custom Playground Design', 'Wooden & Metal Playset Assembly', 'Certified Safety Surfacing (Wood Chips, Rubber Mulch)', 'Site Preparation & Grading', 'Regular Maintenance & Inspection'],
  },
  {
    id: 'paving',
    title: 'Concrete & Paving',
    icon: <Shovel size={32} />,
    shortDescription: 'Durable and aesthetic concrete and paving solutions for any surface.',
    longDescription: 'We offer professional concrete cutting, removal, and paving services for driveways, walkways, patios, and more. Our team uses modern equipment and techniques to deliver quality workmanship that stands the test of time.',
    imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/05_concrete_saw.jpg',
    imageAlt: 'Two workers carefully operating a concrete saw to cut a precise line in a wet pavement.',
    features: ['Concrete Driveway & Walkway Paving', 'Patio Slabs & Interlock Paving', 'Concrete Cutting & Removal', 'Asphalt Repair & Sealing', 'Curb & Gutter Installation'],
  },
  {
    id: 'pools',
    title: 'Pools & Water Features',
    icon: <Waves size={32} />,
    shortDescription: 'Stunning custom pools and tranquil water features for your backyard oasis.',
    longDescription: 'Transform your backyard into a relaxing oasis with our custom pool and water feature design and installation services. From natural stone pools to elegant waterfalls and ponds, we create stunning focal points for your outdoor living space.',
    imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/user_pool_dog.jpg',
    imageAlt: 'A beautiful natural stone pool and patio in a green backyard, with a happy dog in the foreground.',
    features: ['Custom Pool Design & Installation', 'Natural Stone Pool Decks', 'Waterfalls, Ponds, & Fountains', 'Pool Landscaping & Lighting', 'Safety Fencing & Compliance'],
  },
  {
    id: 'lawn',
    title: 'Lawn Installation',
    icon: <Leaf size={32} />,
    shortDescription: 'Lush, healthy, and beautiful lawns with our expert sodding services.',
    longDescription: 'Achieve a lush, healthy lawn with our expert sod installation and lawn establishment services. We ensure proper soil preparation and use high-quality sod for a vibrant, green lawn that enhances your property\'s curb appeal.',
    imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/user_sod_install_2.jpg',
    imageAlt: 'Fresh, green rolls of sod being installed on prepared soil to create a perfect new lawn.',
    features: ['Topsoil & Grading', 'High-Quality Sod Installation', 'Seeding & Hydroseeding', 'Irrigation System Consultation', 'Lawn Repair & Overseeding'],
  },
];

export const TEAM_MEMBERS = [
    { name: 'Kyle', role: 'Co-Founder & Operations Lead', imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/user_jackhammer.jpg', imageAlt: 'Kyle operating a jackhammer on a demolition site.' },
    { name: 'Sam', role: 'Co-Founder & Project Lead', imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/user_playground_worker.jpg', imageAlt: 'Sam on a playground construction site, taking a brief pause.' },
];

export const COMPANY_ASSETS = {
    aboutImage: 'https://storage.googleapis.com/kyle-sam-assets/new/user_team_saw.jpg',
    aboutImageAlt: 'The Kyle & Sam team working together on a concrete cutting job.',
};

export const SOCIAL_LINKS = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
};

export type GalleryCategory = 'Landscaping' | 'Demolition' | 'Waterproofing' | 'Playgrounds' | 'Paving';

export const GALLERY_ITEMS: { id: number; category: GalleryCategory; imageUrl: string; title: string, imageAlt: string }[] = [
  { id: 1, category: 'Landscaping', imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/user_pool_dog.jpg', title: 'Natural Stone Poolside', imageAlt: 'A beautiful modern poolside patio with elegant stonework and a happy dog.' },
  { id: 2, category: 'Paving', imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/05_concrete_saw.jpg', title: 'Precision Concrete Sawing', imageAlt: 'A worker uses a large saw to cut cleanly through a concrete floor.' },
  { id: 3, category: 'Landscaping', imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/user_sod_install_2.jpg', title: 'Fresh Sod Installation', imageAlt: 'Newly installed rolls of green sod creating a perfect lawn.' },
  { id: 4, category: 'Waterproofing', imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/07_waterproofing_membrane.jpg', title: 'Foundation Membrane', imageAlt: 'A black waterproofing membrane being applied to a concrete foundation wall.' },
  { id: 5, category: 'Demolition', imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/user_jackhammer.jpg', title: 'Concrete Demolition', imageAlt: 'An excavator actively demolishing a structure on a construction site.' },
  { id: 6, category: 'Landscaping', imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/03_interlock_walkway.jpg', title: 'Interlock Walkway', imageAlt: 'A newly laid interlock brick walkway leading to a house entrance.' },
  { id: 7, category: 'Playgrounds', imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/user_playground_worker_pointing.jpg', title: 'Playground Surfacing', imageAlt: 'Installation of safe, interlocking rubber tiles for a new playground.' },
  { id: 8, category: 'Landscaping', imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/04_retaining_wall.jpg', title: 'Garden Retaining Wall', imageAlt: 'A sturdy retaining wall made of large stone blocks holding back a garden bed.' },
  { id: 9, category: 'Demolition', imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/user_team_saw_closeup.jpg', title: 'Teamwork in Action', imageAlt: 'The team works together on a precision cutting task.' },
  { id: 10, category: 'Playgrounds', imageUrl: 'https://storage.googleapis.com/kyle-sam-assets/new/user_playground_worker.jpg', title: 'Playground Assembly', imageAlt: 'Assembling a new wooden playground structure.' },
];

export const TESTIMONIALS = [
  {
    quote: "Kyle & Sam transformed our backyard into a paradise. Their attention to detail and professionalism were outstanding. We couldn't be happier with our new patio!",
    name: 'Jessica M.',
    service: 'Landscaping',
  },
  {
    quote: "The demolition of our old garage was handled so efficiently and safely. The team left the site spotless. Highly recommend their services.",
    name: 'David Chen',
    service: 'Demolition',
  },
  {
    quote: "We had a serious basement leak, and their waterproofing solution worked perfectly. They were quick, clean, and very knowledgeable. A huge relief!",
    name: 'Sarah T.',
    service: 'Waterproofing',
  },
];