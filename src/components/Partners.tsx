
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Partners = () => {
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
      id="partners" 
      ref={sectionRef}
      className="py-20 bg-dark-800 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Enterprise Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted R&D Partners For <span className="text-gradient">Global Organizations</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We collaborate with leading companies to solve complex AI challenges while maintaining data security and sovereignty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <PartnerCard 
            title="Custom AI Solution Development"
            description="Tailored AI solutions designed specifically for your business needs and technical requirements."
          />
          
          <PartnerCard 
            title="Enterprise Integration Services"
            description="Seamless integration of cutting-edge AI capabilities with your existing systems and workflows."
          />
        </div>
        
        <div className="text-center">
          <button className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium transition-all duration-300">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

interface PartnerCardProps {
  title: string;
  description: string;
}

const PartnerCard = ({ title, description }: PartnerCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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
  }, []);

  return (
    <div 
      ref={cardRef}
      className="glass-card glass-card-hover p-6 rounded-lg opacity-0 border border-white/5"
    >
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <a 
        href="#" 
        className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group"
      >
        Learn More 
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default Partners;
