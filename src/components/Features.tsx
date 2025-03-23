
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Features = () => {
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
      id="features" 
      ref={sectionRef}
      className="py-20 bg-dark-800 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="mb-4">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            We can help you with
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Deploying Multimodal Intelligence On-Premise - <span className="text-[#F2FCE2]">Your Data Stays Yours</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-4xl">
            Enterprise-grade AI micro-services with built in privacy & Security (SOC2 Type 2 compliance), deployable anywhere - On Premises, Cloud, Edge, Devices, hybrid, Data Centers and more..
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title="State-Of-The-Art Foundation Models"
            description="Powerful yet light weight self learning models - with Advanced reasoning, multimodal intelligence and minimal hallucinations."
            delay="100"
            ctaText="View Our Models"
          />
          
          <FeatureCard
            title="Production-Grade Training & Deployment"
            description="Optimized training pipelines and seamless deployment - with Scalability, Low latency Inference, flexible & secure integration."
            delay="200"
            ctaText="Learn More"
          />
          
          <FeatureCard
            title="Research Backed Model Evaluations"
            description="Rigorous model evaluation - with research backed and configurable benchmarks, across custom datasets and modalities."
            delay="300" 
            ctaText="Learn More"
          />
          
          <FeatureCard
            title="Adaptive Domain Intelligence & Fine-Tuning"
            description="AI that adapts to your specific domain use-cases, optimizing accuracy, efficiency, and contextual intelligence."
            delay="400"
            ctaText="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  delay: string;
  ctaText?: string;
}

const FeatureCard = ({ title, description, delay, ctaText = "Learn More" }: FeatureCardProps) => {
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
      className="glass-card glass-card-hover p-6 rounded-lg opacity-0"
    >
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <a 
        href="#" 
        className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group"
      >
        {ctaText}
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default Features;
