
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import GlassPanel from '@/components/ui/GlassPanel';
import { useToast } from '@/components/ui/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Calendar, 
  Heart
} from 'lucide-react';

const contactPoints = [
  {
    icon: Phone,
    title: 'Phone',
    detail: '+27 12 345 6789',
    action: 'Call us',
    link: 'tel:+27123456789'
  },
  {
    icon: Mail,
    title: 'Email',
    detail: 'hello@weddingwave.com',
    action: 'Email us',
    link: 'mailto:hello@weddingwave.com'
  },
  {
    icon: MapPin,
    title: 'Office',
    detail: '12 Wedding Street, Pretoria',
    action: 'Get directions',
    link: 'https://maps.google.com'
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-wedding-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-wedding-100 text-wedding-800 mb-4">
            <Heart className="w-4 h-4 mr-2 text-wedding-500" />
            <span>Start Your Wedding Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-wedding-900">
            Let's Create Your Dream Wedding
          </h2>
          <p className="text-lg text-wedding-700">
            Reach out to discuss your vision, and let's begin planning the celebration you've always imagined.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <GlassPanel intensity="medium" className="p-8 h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-wedding-800 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-wedding-200 focus:border-wedding-400 focus:ring focus:ring-wedding-200 focus:ring-opacity-50 bg-white/50"
                      placeholder="John & Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-wedding-800 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-wedding-200 focus:border-wedding-400 focus:ring focus:ring-wedding-200 focus:ring-opacity-50 bg-white/50"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-wedding-800 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-wedding-200 focus:border-wedding-400 focus:ring focus:ring-wedding-200 focus:ring-opacity-50 bg-white/50"
                      placeholder="+27 12 345 6789"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-wedding-800 mb-1">
                      Wedding Date (if known)
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-wedding-200 focus:border-wedding-400 focus:ring focus:ring-wedding-200 focus:ring-opacity-50 bg-white/50"
                      />
                      <Calendar className="absolute right-3 top-3 h-5 w-5 text-wedding-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-wedding-800 mb-1">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-wedding-200 focus:border-wedding-400 focus:ring focus:ring-wedding-200 focus:ring-opacity-50 bg-white/50"
                    placeholder="Share your wedding ideas, questions, or specific needs..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-wedding-700 hover:bg-wedding-800 text-white shadow-sm py-6"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Inquiry
                      <Send className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>
            </GlassPanel>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="space-y-6 h-full flex flex-col">
              <GlassPanel intensity="light" className="p-8 flex-grow">
                <h3 className="text-2xl font-display font-semibold mb-6 text-wedding-800">
                  Get in Touch
                </h3>
                <div className="space-y-8">
                  {contactPoints.map((point, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-wedding-100 flex items-center justify-center">
                          <point.icon className="h-5 w-5 text-wedding-700" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-wedding-800">
                          {point.title}
                        </h4>
                        <p className="text-wedding-600 mb-2">
                          {point.detail}
                        </p>
                        <a 
                          href={point.link} 
                          className="text-sm font-medium text-wedding-700 hover:text-wedding-900 transition-colors"
                        >
                          {point.action} →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>

              <GlassPanel intensity="medium" className="p-8">
                <h3 className="text-xl font-display font-semibold mb-4 text-wedding-800">
                  Consultation Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-wedding-600">Monday - Friday</span>
                    <span className="font-medium text-wedding-800">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-wedding-600">Saturday</span>
                    <span className="font-medium text-wedding-800">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-wedding-600">Sunday</span>
                    <span className="font-medium text-wedding-800">By Appointment</span>
                  </div>
                </div>
              </GlassPanel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
