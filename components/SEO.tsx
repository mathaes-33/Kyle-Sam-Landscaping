import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
    
    // It's good practice to clean up or revert changes, but for an SPA
    // where this component is always present, it's not strictly necessary.
    // However, if pages could exist without an SEO component, a cleanup function would be useful.
  }, [title, description]);

  return null;
};

export default SEO;
