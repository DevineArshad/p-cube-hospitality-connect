import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Job Openings', href: '/jobs' },
  { name: 'Apply Now', href: '/apply' },
  { name: 'Hire From Us', href: '/hire' },
  { name: 'Contact Us', href: '/contact' },
];

const jobCategories = [
  { name: 'Hotel Jobs', href: '/jobs#hotels' },
  { name: 'Resort Jobs', href: '/jobs#resorts' },
  { name: 'Cruise Jobs', href: '/jobs#cruise' },
  { name: 'Restaurant & QSR', href: '/jobs#restaurant' },
  { name: 'Airline Catering', href: '/jobs#airline' },
  { name: 'Corporate Hospitality', href: '/jobs#corporate' },
];

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-navy font-heading font-bold text-xl">P³</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">P Cube Consulting</h3>
                <p className="text-sm text-gold">Hospitality Excellence</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for global hospitality recruitment. We connect exceptional talent with world-class hotels, resorts, cruise lines, and restaurants across the globe.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-gold transition-colors flex items-center gap-2 text-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Categories */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Job Categories</h4>
            <ul className="space-y-3">
              {jobCategories.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-gold transition-colors flex items-center gap-2 text-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-gold transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+91 98765 43210<br />+91 98765 43211</span>
              </a>
              <a href="mailto:info@pcubeconsulting.com" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-gold transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@pcubeconsulting.com<br />careers@pcubeconsulting.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Corporate Office, Tower A<br />Mumbai, Maharashtra 400001</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-sm font-medium mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-navy-light border-navy-light text-primary-foreground placeholder:text-muted-foreground"
                />
                <Button className="bg-gradient-gold hover:opacity-90 px-4">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 P Cube Consulting. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
