
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import GlassPanel from '@/components/ui/GlassPanel';
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        const offset = scrollY * 0.3; // Parallax effect
        imageRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-32 pb-20 sm:pb-32 lg:pb-40 overflow-hidden min-h-screen flex items-center">
      {/* Background image with parallax effect */}
      <div 
        ref={imageRef}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-wedding-50/90 via-wedding-50/70 to-wedding-50" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
          style={{ opacity: 0.3 }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-wedding-100 text-wedding-800 mb-6">
              <Heart className="w-4 h-4 mr-2 text-wedding-500" />
              <span>Making wedding dreams come true</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-wedding-900 leading-tight mb-6">
              Creating <span className="text-wedding-700">Beautiful</span> Wedding Memories
            </h1>
            
            <p className="text-xl text-wedding-700 mb-8 max-w-lg">
              We believe every love story deserves a beautiful beginning. Let us help you craft a wedding day that reflects your unique journey together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-base bg-wedding-700 hover:bg-wedding-800 text-white px-8 py-6 rounded-md shadow-soft transition-transform hover:translate-y-[-2px]">
                Plan Your Wedding
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-base text-wedding-700 border-wedding-200 hover:bg-wedding-50 px-8 py-6 rounded-md">
                Explore Services
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center p-4">
                <p className="text-3xl font-display font-bold text-wedding-800">250+</p>
                <p className="text-sm text-wedding-600">Weddings Planned</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl font-display font-bold text-wedding-800">50+</p>
                <p className="text-sm text-wedding-600">Venues</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl font-display font-bold text-wedding-800">12+</p>
                <p className="text-sm text-wedding-600">Years Experience</p>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative hidden lg:block">
            <GlassPanel className="absolute -top-4 -left-4 w-full h-full -z-10" />
            <GlassPanel className="absolute -bottom-4 -right-4 w-full h-full -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1528823872057-05050d6c586c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Happy wedding couple" 
              className="rounded-xl w-full h-[500px] object-cover shadow-soft animate-scale-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
