
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassPanel from '@/components/ui/GlassPanel';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'Venues', path: '/#venues' },
  { name: 'Gallery', path: '/#gallery' },
  { name: 'About', path: '/#about' },
  { name: 'Contact', path: '/#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <GlassPanel
        intensity={isScrolled ? 'medium' : 'light'}
        className={cn(
          'mx-4 sm:mx-8 my-4 transition-all duration-500',
          isScrolled ? 'py-3 shadow-soft' : 'py-4'
        )}
      >
        <nav className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative z-50 flex items-center transition-transform duration-300 hover:scale-105"
          >
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-wedding-800">
              WeddingWave
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'px-3 py-2 text-sm rounded-md transition-all duration-300',
                  'hover:bg-wedding-100/50 text-wedding-800',
                  'animate-fade-in',
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="ml-2 bg-wedding-700 hover:bg-wedding-800 text-white shadow-sm animate-fade-in"
              style={{ animationDelay: `${navLinks.length * 100}ms` }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2 rounded-md text-wedding-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 animate-fade-in" />
            ) : (
              <Menu className="h-6 w-6 animate-fade-in" />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={cn(
              'fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden',
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xl font-medium text-wedding-800 hover:text-wedding-600 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                className="mt-4 bg-wedding-700 hover:bg-wedding-800 text-white shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </nav>
      </GlassPanel>
    </header>
  );
};

export default Navbar;
