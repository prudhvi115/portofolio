import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-bg-sec/80 backdrop-blur-md border-b border-neon-cyan/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
              <h1 className="text-2xl font-rajdhani font-bold text-white tracking-wider">
                <span className="text-neon-cyan">Pogaku</span> <span className="text-neon-purple">Prudhvi</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-text-secondary hover:text-neon-cyan transition-colors px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  activeClass="text-neon-cyan neon-text-cyan"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="text-neon-pink" /> : <Menu className="text-neon-cyan" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glassmorphism border-t border-neon-cyan/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-neon-cyan hover:bg-cyber-bg-sec block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
