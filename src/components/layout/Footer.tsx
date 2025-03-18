
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Heart 
} from 'lucide-react';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Wedding Planning', path: '/services/planning' },
      { name: 'Venues', path: '/services/venues' },
      { name: 'Photography', path: '/services/photography' },
      { name: 'Catering', path: '/services/catering' },
      { name: 'Decorations', path: '/services/decorations' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Testimonials', path: '/testimonials' },
      { name: 'Careers', path: '/careers' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-wedding-50 pt-16 pb-8 border-t border-wedding-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-3xl font-display font-bold text-wedding-800">
                WeddingWave
              </h2>
            </Link>
            <p className="text-wedding-700/80 max-w-md mb-6">
              Creating unforgettable wedding experiences with elegance, attention to detail, 
              and personalized service. Your perfect day begins with us.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-wedding-600" />
                <a href="mailto:hello@weddingwave.com" className="text-wedding-700 hover:text-wedding-900 transition-colors">
                  hello@weddingwave.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-wedding-600" />
                <a href="tel:+27123456789" className="text-wedding-700 hover:text-wedding-900 transition-colors">
                  +27 12 345 6789
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-wedding-600 mt-1 flex-shrink-0" />
                <p className="text-wedding-700">
                  12 Wedding Street, Pretoria, Gauteng, South Africa
                </p>
              </div>
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-wedding-900 font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-wedding-700/80 hover:text-wedding-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & copyright */}
        <div className="pt-8 mt-8 border-t border-wedding-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-10 h-10 rounded-full bg-wedding-100 flex items-center justify-center text-wedding-700 hover:bg-wedding-200 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="text-center md:text-right text-wedding-700/70 text-sm">
            <p className="flex items-center justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 mx-1 text-wedding-500" /> in Gauteng, South Africa
            </p>
            <p className="mt-1">
              &copy; {new Date().getFullYear()} WeddingWave. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
