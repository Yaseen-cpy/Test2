
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';

const CaseStudies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="case-studies" 
      ref={sectionRef}
      className="py-20 bg-dark-800 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="mb-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Industry Research
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Research & Industry Whitepapers
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            Explore our thorough research on specific industries and evolving AI use cases across various sectors.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-dark-600 rounded-md leading-5 bg-dark-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition duration-150 ease-in-out sm:text-sm"
              placeholder="Search by industry or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {Array.from({ length: 4 }).map((_, index) => (
            <CaseStudyCard key={index} delay={(index + 1) * 150} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="px-8 py-3 rounded-full bg-dark-700 hover:bg-dark-600 text-white transition-all duration-300">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

interface CaseStudyCardProps {
  delay: number;
}

const CaseStudyCard = ({ delay }: CaseStudyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          if (entry.target instanceof HTMLElement) {
            entry.target.style.animationDelay = `${delay}ms`;
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="border border-teal-500/20 rounded-lg p-6 opacity-0 hover:border-teal-500/40 transition-colors duration-300"
    >
      <div className="grid grid-cols-2 gap-4">
        {/* Left side reserved for image */}
        <div className="hidden md:block">
          {/* Image placeholder */}
        </div>
        
        <div>
          <div className="text-xs text-gray-400 mb-2">Category • Lorem Ipsum</div>
          <h3 className="text-lg font-semibold mb-2 text-white">Building a Lorem Ipsum for Enterprise</h3>
          <p className="text-gray-400 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
          <a 
            href="#" 
            className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group"
          >
            Read More 
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
