
import React, { useState, useRef, useEffect } from 'react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 1,
    title: 'Full Wedding Planning',
    description: 'From concept to execution, we handle every detail of your wedding day so you can focus on creating memories.',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: '✨',
  },
  {
    id: 2,
    title: 'Day-of Coordination',
    description: 'Let us coordinate your special day while you savor every moment with your loved ones.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    icon: '📅',
  },
  {
    id: 3,
    title: 'Venue Selection',
    description: 'Discover the perfect backdrop for your wedding with our curated selection of stunning venues.',
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: '🏰',
  },
  {
    id: 4,
    title: 'Floral Design',
    description: 'Create stunning floral arrangements that perfectly complement your wedding theme and personal style.',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80',
    icon: '🌸',
  },
  {
    id: 5,
    title: 'Catering Services',
    description: 'Delight your guests with exquisite culinary experiences tailored to your preferences and dietary needs.',
    image: 'https://images.unsplash.com/photo-1530377381049-f19732b9b5fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: '🍽️',
  },
  {
    id: 6,
    title: 'Photography & Videography',
    description: 'Capture every precious moment with our professional photographers and videographers.',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: '📸',
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0].id);
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
      id="services" 
      className="py-20 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-wedding-900">
            Comprehensive Wedding Services
          </h2>
          <p className="text-lg text-wedding-700">
            Every detail of your special day deserves attention. Our range of services ensures your wedding is everything you've dreamed of and more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Service showcase */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-soft">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={cn(
                    'absolute inset-0 transition-opacity duration-500',
                    activeService === service.id ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-white text-2xl font-display font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90 mb-4">
                      {service.description}
                    </p>
                    <Button className="w-max bg-wedding-600 hover:bg-wedding-700 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service list */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {services.map((service, index) => (
                <AnimatedCard
                  key={service.id}
                  className={cn(
                    'p-4 cursor-pointer transition-all duration-300',
                    activeService === service.id
                      ? 'border-l-4 border-wedding-600'
                      : 'border-l-4 border-transparent',
                    isVisible && 'animate-fade-up'
                  )}
                  hover3D={false}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0
                  }}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-wedding-800 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-wedding-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
