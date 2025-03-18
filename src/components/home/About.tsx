
import React, { useRef, useEffect, useState } from 'react';
import GlassPanel from '@/components/ui/GlassPanel';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const stats = [
  { value: '100%', label: 'Satisfaction' },
  { value: '250+', label: 'Weddings' },
  { value: '12+', label: 'Years' },
  { value: '15+', label: 'Awards' },
];

const values = [
  {
    title: 'Personalized Service',
    description: 'We believe every couple is unique, and your wedding should reflect your individual story and style.'
  },
  {
    title: 'Attention to Detail',
    description: 'From the grandest ballroom to the smallest boutonnière, we obsess over every detail of your special day.'
  },
  {
    title: 'Transparent Communication',
    description: 'We maintain open, honest communication throughout the planning process, ensuring peace of mind.'
  },
  {
    title: 'Vendor Excellence',
    description: 'We partner only with the most reliable, skilled, and creative professionals in the industry.'
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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
      id="about" 
      className="py-20 bg-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-wedding-100 opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-wedding-100 opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div 
                  className={cn(
                    "rounded-lg overflow-hidden shadow-soft",
                    isVisible && "animate-fade-up"
                  )}
                  style={{ animationDelay: '100ms' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Wedding planning team" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div 
                  className={cn(
                    "rounded-lg overflow-hidden shadow-soft",
                    isVisible && "animate-fade-up"
                  )}
                  style={{ animationDelay: '300ms' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Wedding planning process" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div 
                  className={cn(
                    "rounded-lg overflow-hidden shadow-soft",
                    isVisible && "animate-fade-up"
                  )}
                  style={{ animationDelay: '200ms' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1960&q=80" 
                    alt="Wedding planner at work" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div 
                  className={cn(
                    "rounded-lg overflow-hidden shadow-soft",
                    isVisible && "animate-fade-up"
                  )}
                  style={{ animationDelay: '400ms' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                    alt="Wedding venue decoration" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Stats overlay */}
            <GlassPanel 
              className={cn(
                "absolute -bottom-6 -right-6 p-6 shadow-soft hidden md:grid grid-cols-2 gap-6 w-3/4",
                isVisible && "animate-fade-up"
              )}
              style={{ animationDelay: '500ms' }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-display font-bold text-wedding-800">{stat.value}</p>
                  <p className="text-sm text-wedding-600">{stat.label}</p>
                </div>
              ))}
            </GlassPanel>
          </div>
          
          {/* About Content */}
          <div className={cn(isVisible && "animate-fade-up")} style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-wedding-900">
              Our Passion is Creating Your Perfect Day
            </h2>
            
            <p className="text-lg text-wedding-700 mb-8">
              At WeddingWave, we believe that your wedding day should be as unique as your love story. 
              With over 12 years of experience creating magical celebrations, our team of dedicated 
              professionals works tirelessly to transform your vision into reality.
            </p>
            
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-wedding-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-wedding-700" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-wedding-800">
                      {value.title}
                    </h3>
                    <p className="text-wedding-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-wedding-700 italic border-l-4 border-wedding-200 pl-4 py-2">
              "We don't just plan weddings; we craft experiences that become cherished memories for a lifetime."
            </p>
            
            {/* Mobile Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12 md:hidden">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-wedding-50 rounded-lg">
                  <p className="text-3xl font-display font-bold text-wedding-800">{stat.value}</p>
                  <p className="text-sm text-wedding-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
