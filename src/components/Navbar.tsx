
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-in-out",
      isScrolled ? "bg-dark-800/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-white">novaforge</span>
            <span className="text-teal-500 font-bold text-xl">.</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#features">Solutions</NavLink>
          <NavLink href="#research">Research</NavLink>
          <NavLink href="#partners">For Enterprises</NavLink>
          <NavLink href="#tools">Tools</NavLink>
          <NavLink href="#case-studies">Case Studies</NavLink>
          <NavLink href="#contact">About Us</NavLink>
        </div>
        
        <div className="flex items-center">
          <button className="px-5 py-2 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300 text-sm">
            Contact Sales
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-gray-300 hover:text-teal-500 transition-colors duration-300 text-sm font-medium"
  >
    {children}
  </a>
);

export default Navbar;
