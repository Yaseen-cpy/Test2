
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 opacity-0"
      style={{ background: 'linear-gradient(180deg, #0F1114 0%, #121316 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500/10 blur-[100px]" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-teal-500/5 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 glass-card p-10 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We Develop <span className="text-gradient">Models, Methods</span> & <span className="text-gradient">Maths</span> Behind AGI
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            A Research Lab engineering AI for Low Compute & cost, Advanced Reasoning & Real World Adaptability without compromising Speed
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a 
              href="#features" 
              className="px-8 py-3 rounded-full bg-dark-700 hover:bg-dark-600 text-white transition-all duration-300 flex items-center justify-center group w-full sm:w-auto backdrop-blur-md bg-dark-700/80 border border-white/5"
            >
              View Our Solutions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#features" className="text-white/50 hover:text-white transition-colors duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6" 
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
