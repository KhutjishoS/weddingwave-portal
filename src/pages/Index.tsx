
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Vendors from '@/components/home/Vendors';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import { registerScrollAnimations } from '@/lib/animations';

const Index = () => {
  useEffect(() => {
    // Register animations that trigger on scroll
    registerScrollAnimations();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        window.scrollTo({
          top: (target as HTMLElement).offsetTop - 100,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-wedding-50">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Vendors />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
