
import React, { useState, useRef, useEffect } from 'react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import GlassPanel from '@/components/ui/GlassPanel';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Star, MapPin, ExternalLink } from 'lucide-react';

const categories = [
  'All', 'Venues', 'Photographers', 'Florists', 'Caterers', 'Entertainment'
];

const vendors = [
  {
    id: 1,
    name: 'Rosewood Manor',
    category: 'Venues',
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80',
    location: 'Pretoria, Gauteng',
    description: 'A stunning historic manor with beautiful gardens perfect for elegant outdoor ceremonies.',
  },
  {
    id: 2,
    name: 'Dreamlight Photography',
    category: 'Photographers',
    rating: 4.8,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Johannesburg, Gauteng',
    description: 'Capturing timeless moments with a unique artistic perspective and attention to detail.',
  },
  {
    id: 3,
    name: 'Bloom & Petal',
    category: 'Florists',
    rating: 4.7,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1561128290-000a4689e6d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Centurion, Gauteng',
    description: 'Creating breathtaking floral arrangements that perfectly complement your wedding theme.',
  },
  {
    id: 4,
    name: 'Gourmet Delights',
    category: 'Caterers',
    rating: 4.9,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Sandton, Gauteng',
    description: 'Exquisite culinary creations that delight the senses and impress your guests.',
  },
  {
    id: 5,
    name: 'Harmony Strings',
    category: 'Entertainment',
    rating: 4.8,
    reviews: 83,
    image: 'https://images.unsplash.com/photo-1581264692292-8154a06d9cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Pretoria, Gauteng',
    description: 'Setting the perfect mood with classical and contemporary musical arrangements.',
  },
  {
    id: 6,
    name: 'Lakeside Retreat',
    category: 'Venues',
    rating: 4.7,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    location: 'Hartbeespoort, North West',
    description: 'A serene waterfront venue offering breathtaking views and magical sunset ceremonies.',
  },
];

const Vendors = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const filteredVendors = selectedCategory === 'All' 
    ? vendors 
    : vendors.filter(vendor => vendor.category === selectedCategory);

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
      id="venues" 
      className="py-20 bg-wedding-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-wedding-900">
            Premium Wedding Vendors
          </h2>
          <p className="text-lg text-wedding-700">
            Discover our carefully selected vendors who meet our high standards of quality, reliability, and exceptional service.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
                selectedCategory === category
                  ? 'bg-wedding-700 text-white shadow-sm'
                  : 'bg-white text-wedding-700 hover:bg-wedding-100'
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map((vendor, index) => (
            <AnimatedCard
              key={vendor.id}
              className={cn(
                'overflow-hidden h-full',
                isVisible && 'animate-fade-up'
              )}
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0
              }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <GlassPanel className="px-3 py-1">
                    <span className="text-xs font-medium text-wedding-800">
                      {vendor.category}
                    </span>
                  </GlassPanel>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-wedding-800">
                    {vendor.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-amber-500 mr-1" fill="currentColor" />
                    <span className="text-sm font-medium">{vendor.rating}</span>
                    <span className="text-xs text-wedding-500 ml-1">({vendor.reviews})</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-wedding-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {vendor.location}
                </div>
                <p className="text-wedding-700 mb-4">
                  {vendor.description}
                </p>
                <Button variant="outline" className="w-full justify-center border-wedding-200 text-wedding-700 hover:bg-wedding-50">
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* See All Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-wedding-200 text-wedding-700 hover:bg-wedding-50 px-8">
            View All Vendors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Vendors;
