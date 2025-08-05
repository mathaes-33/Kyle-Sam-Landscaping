
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const activeClass = 'text-brand-green-dark border-b-2 border-brand-green-dark';
  const inactiveClass = 'text-brand-gray-darker hover:text-brand-green-dark transition-colors duration-300';
  
  return (
    <Link to={to} className={`font-medium ${isActive ? activeClass : inactiveClass}`} onClick={onClick}>
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Sprout className="h-8 w-8 text-brand-green" />
            <span className="text-xl font-bold text-brand-green-dark whitespace-nowrap">Kyle & Sam</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink key={link.path} to={link.path}>{link.label}</NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-brand-gray-darker focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-6 py-8">
             {navLinks.map(link => (
              <NavLink key={link.path} to={link.path} onClick={closeMenu}>{link.label}</NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
