import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryCategory } from '../constants';
import SEO from '../components/SEO';

type Category = 'All' | GalleryCategory;

const GalleryItem: React.FC<{ imageUrl: string; title: string; category: string; imageAlt: string; }> = ({ imageUrl, title, category, imageAlt }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
    <img src={imageUrl} alt={imageAlt} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
    <div className="absolute bottom-0 left-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
      <h3 className="text-white text-lg font-bold">{title}</h3>
      <p className="text-brand-gray-light text-sm">{category}</p>
    </div>
  </div>
);

const GalleryPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    
    // Dynamically generate categories from gallery items to ensure all are included
    const allCategories: GalleryCategory[] = [...new Set(GALLERY_ITEMS.map(item => item.category))].sort();
    const categories: Category[] = ['All', ...allCategories];

    const filteredItems = activeCategory === 'All'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter(item => item.category === activeCategory);
    
    return (
      <>
        <SEO
            title="Project Gallery | Kyle & Sam Landscaping"
            description="Browse our gallery of completed projects. See our quality work in landscaping, demolition, waterproofing, and playground installation across the GTA."
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-green-dark">Our Work</h1>
                <p className="text-lg text-brand-gray-darker mt-3 max-w-2xl mx-auto">
                    A showcase of our commitment to quality craftsmanship and transformative results.
                </p>
            </div>

            <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                            activeCategory === category
                                ? 'bg-brand-green text-white shadow-md'
                                : 'bg-white text-brand-gray-darker hover:bg-brand-gray'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map(item => (
                    <GalleryItem key={item.id} imageUrl={item.imageUrl} title={item.title} category={item.category} imageAlt={item.imageAlt} />
                ))}
            </div>
        </div>
      </>
    );
};

export default GalleryPage;