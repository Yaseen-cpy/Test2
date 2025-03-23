import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
const Research = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeVertical, setActiveVertical] = useState('percepta');
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const verticals = [{
    id: 'percepta',
    title: 'Percepta',
    subtitle: 'Adaptive vision intelligence for domain specific use-cases',
    focus: 'Building A unified vision AI stack delivering precise results with minimal training and low computational overhead',
    capabilities: [{
      title: 'Hybrid Vision Language Models',
      description: 'Context-aware scene interpretation with reasoning'
    }, {
      title: 'Multi-modal Architectures',
      description: 'Processes images, videos, text, and audio'
    }, {
      title: 'Self Improving Systems',
      description: 'Learns and optimizes dynamically'
    }, {
      title: 'Task Specific Models',
      description: 'High-precision tracking, detection, segmentation, and 3D reconstruction'
    }]
  }, {
    id: 'lexora',
    title: 'Lexora',
    subtitle: 'Advanced language processing and understanding',
    focus: 'Developing contextual language models with efficient reasoning',
    capabilities: [{
      title: 'Context-aware Processing',
      description: 'Understand nuanced language patterns and cultural context'
    }, {
      title: 'Low Compute Requirements',
      description: 'Efficient models that run on modest hardware'
    }, {
      title: 'Customizable for Domains',
      description: 'Language models adaptable to specialized fields'
    }, {
      title: 'Multilingual Support',
      description: 'Process and understand multiple languages effectively'
    }]
  }, {
    id: 'vocalis',
    title: 'Vocalis',
    subtitle: 'Speech and audio intelligence solutions',
    focus: 'Creating responsive audio processing systems with minimal latency',
    capabilities: [{
      title: 'Real-time Speech Recognition',
      description: 'Convert speech to text with high accuracy in real-time'
    }, {
      title: 'Audio Classification',
      description: 'Identify and categorize sounds and audio patterns'
    }, {
      title: 'Voice Authentication',
      description: 'Secure biometric voice recognition solutions'
    }, {
      title: 'Noise Reduction',
      description: 'Advanced algorithms for clear audio in noisy environments'
    }]
  }, {
    id: 'stratum',
    title: 'Stratum',
    subtitle: 'Foundational model infrastructure',
    focus: 'Building scalable and efficient infrastructure for AI model deployment',
    capabilities: [{
      title: 'Model Optimization',
      description: 'Reduce resource requirements without compromising performance'
    }, {
      title: 'Distributed Training',
      description: 'Efficient multi-node training architectures'
    }, {
      title: 'Deployment Automation',
      description: 'Seamless deployment across diverse computing environments'
    }, {
      title: 'Resource Management',
      description: 'Intelligent allocation of computing resources'
    }]
  }, {
    id: 'aetherminds',
    title: 'Aetherminds',
    subtitle: 'Advanced reasoning and decision systems',
    focus: 'Developing AI with robust reasoning capabilities for complex decision-making',
    capabilities: [{
      title: 'Causal Reasoning',
      description: 'Understanding cause-effect relationships in complex systems'
    }, {
      title: 'Decision Support',
      description: 'AI-assisted decision making for critical applications'
    }, {
      title: 'Uncertainty Quantification',
      description: 'Reliable confidence measures for model predictions'
    }, {
      title: 'Explainable AI',
      description: 'Transparent reasoning processes for trustworthy AI'
    }]
  }];
  const activeVerticalData = verticals.find(v => v.id === activeVertical) || verticals[0];
  return <section id="research" ref={sectionRef} className="py-20 bg-dark-900 opacity-0">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Research Focus
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Next-Gen AI Research Verticals
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-8">
          {verticals.map(vertical => <button key={vertical.id} onClick={() => setActiveVertical(vertical.id)} className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${activeVertical === vertical.id ? 'bg-teal-500 text-black font-medium' : 'bg-dark-700 text-white hover:bg-dark-600'}`}>
              {vertical.title}
            </button>)}
        </div>

        <div className="bg-dark-800 rounded-xl p-8 glass-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-gradient">{activeVerticalData.title}</h3>
              <p className="text-gray-400 mb-6">{activeVerticalData.subtitle}</p>
              
              <h4 className="text-xl font-medium mb-3">Our Primary Focus</h4>
              <p className="text-gray-400 mb-6">{activeVerticalData.focus}</p>
            </div>
            
            {/* Right top corner reserved for image */}
            <div className="hidden md:block">
              {/* Image placeholder */}
            </div>
          </div>
          
          <div className="mt-10">
            <h4 className="text-xl font-semibold mb-6">Core Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6">
              {activeVerticalData.capabilities.map((capability, index) => <div key={index} className="p-5 rounded-lg bg-dark-600">
                  <h5 className="font-medium text-white mb-2">{capability.title}</h5>
                  <p className="text-gray-400 text-sm">{capability.description}</p>
                </div>)}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium">
              Explore Use Cases 
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Research;