
import React, { useEffect, useRef } from 'react';

const Tools = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="tools" 
      ref={sectionRef}
      className="py-20 bg-dark-900 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            AI Toolkit
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise-Grade AI Solutions & Frameworks
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Explore our suite of specialized AI tools designed for enterprise applications and specific industry use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {Array.from({ length: 8 }).map((_, index) => (
            <ToolCard key={index} delay={(index + 1) * 100} />
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

interface ToolCardProps {
  delay: number;
}

const ToolCard = ({ delay }: ToolCardProps) => {
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
      className="glass-card glass-card-hover rounded-lg p-6 opacity-0 flex flex-col items-center justify-center aspect-square overflow-hidden relative group"
    >
      <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex items-center justify-center mb-3 w-12 h-12 rounded-full bg-dark-700 group-hover:bg-teal-500/20 transition-colors duration-300">
        <BrainIcon className="w-6 h-6 text-teal-500" />
      </div>
      
      <h3 className="text-white font-medium text-center">Lorem Ipsum</h3>
    </div>
  );
};

const BrainIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={1.5} 
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
    />
  </svg>
);

export default Tools;
