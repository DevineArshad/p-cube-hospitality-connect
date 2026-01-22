import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Job Openings', href: '/jobs' },
  { name: 'Apply Now', href: '/apply' },
  { name: 'Hire From Us', href: '/hire' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-navy text-primary-foreground py-2 hidden md:block">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>
            <a href="mailto:info@pcubeconsulting.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              info@pcubeconsulting.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gold font-medium">Global Hospitality Recruitment Specialists</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-xl">P³</span>
          </div>
          <div>
            <h1 className="font-heading text-xl font-bold text-foreground">P Cube Consulting</h1>
            <p className="text-xs text-muted-foreground">Hospitality Recruitment Excellence</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                location.pathname === item.href
                  ? "text-primary bg-teal-light"
                  : "text-foreground hover:text-primary hover:bg-muted"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/apply">Apply for Jobs</Link>
          </Button>
          <Button asChild className="bg-gradient-gold hover:opacity-90 shadow-gold">
            <Link to="/hire">Hire Talent</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-up">
          <div className="container py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "text-primary bg-teal-light"
                    : "text-foreground hover:text-primary hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button asChild variant="outline" className="w-full border-primary text-primary">
                <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>Apply for Jobs</Link>
              </Button>
              <Button asChild className="w-full bg-gradient-gold">
                <Link to="/hire" onClick={() => setMobileMenuOpen(false)}>Hire Talent</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
