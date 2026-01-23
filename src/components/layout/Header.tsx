import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, Briefcase, Globe, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';  
import  logo  from '@/assets/logo.png';


import { motion, AnimatePresence } from 'framer-motion';


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services', hasMegaMenu: true },
  { name: 'Job Openings', href: '/jobs' },
  { name: 'Apply Now', href: '/apply' },
  // { name: 'Hire From Us', href: '/hire' },
  // { name: 'Contact', href: '/contact' },
];

const megaMenuItems = [
  {
    title: 'Our Services',
    description: 'Comprehensive recruitment solutions',
    icon: Briefcase,
    items: [
      { name: 'Overseas Recruitment', href: '/services' },
      { name: 'Domestic Staffing', href: '/services' },
      { name: 'Training Programs', href: '/services' },
    ]
  },
  {
    title: 'Hotel & Hospitality',
    description: 'Premium hospitality placements',
    icon: Globe,
    items: [
      { name: 'Overseas Hotel Jobs', href: '/jobs' },
      { name: 'Resort Placements', href: '/jobs' },
      { name: 'Cruise Line Jobs', href: '/jobs' },
    ]
  },
  {
    title: 'Visa & Immigration',
    description: 'Complete visa support',
    icon: Users,
    items: [
      { name: 'Visa Processing', href: '/services' },
      { name: 'Documentation Support', href: '/services' },
      { name: 'Immigration Consulting', href: '/services' },
    ]
  },
  {
    title: 'Career Growth',
    description: 'Professional development',
    icon: Award,
    items: [
      { name: 'Career Consulting', href: '/services' },
      { name: 'Skill Enhancement', href: '/services' },
      { name: 'Interview Preparation', href: '/services' },
    ]
  },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState<string | null>(null);
    const location = useLocation();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
            {/* 1. Elegant Top Bar */}
            <div className="bg-[#0a192f] text-white py-2.5 hidden md:block">
                <div className="container flex justify-between items-center text-[13px] font-medium tracking-wide">
                    <div className="flex items-center gap-8">
                        <a href="tel:+919318387645" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
                            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                            +91 93183 87645
                        </a>
                        <a href="mailto:info@pcubeconsulting.com" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
                            <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                            info@pcubeconsulting.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="uppercase text-[11px] opacity-80 letter-spacing-1 text-[#d4af37]">Global Recruitment Specialists
</span>
                    </div>
                </div>
            </div>

            {/* 2. Main Navigation Area */}
            <nav className="container flex items-center justify-between py-4">
                <Link to="/" className="flex items-center gap-4 group">
                    <img src={logo} alt="P Cube Consulting Logo" className="h-14 w-auto transition-transform group-hover:scale-105" />
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-1">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="relative px-2 py-1"
                            onMouseEnter={() => setIsHovered(item.name)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            <Link
                                to={item.href}
                                className={cn(
                                    "px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-1.5",
                                    location.pathname === item.href
                                        ? "text-[#148d8d] bg-[#148d8d]/5"
                                        : "text-gray-600 hover:text-[#148d8d]"
                                )}
                            >
                                {item.name}
                                {item.hasMegaMenu && (
                                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isHovered === item.name && "rotate-180")} />
                                )}
                            </Link>

                            {/* Beautiful Animated Mega Menu */}
                            <AnimatePresence>
                                {item.hasMegaMenu && isHovered === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="fixed left-0 right-0 top-[115px] w-screen bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-50 overflow-hidden"
                                    >
                                        <div className="container py-12 grid grid-cols-12 gap-8">
                                            {/* Left: Link Columns (Cols 1-8) */}
                                            <div className="col-span-8 grid grid-cols-3 gap-8">
                                                {megaMenuItems.slice(0, 3).map((section) => (
                                                    <div key={section.title}>
                                                        <div className="flex items-center gap-3 mb-6">
                                                            <div className="p-2 bg-[#148d8d]/10 rounded-xl text-[#148d8d]">
                                                                <section.icon className="w-5 h-5" />
                                                            </div>
                                                            <h3 className="font-bold text-gray-900">{section.title}</h3>
                                                        </div>
                                                        <ul className="space-y-4">
                                                            {section.items.map((subitem) => (
                                                                <li key={subitem.name}>
                                                                    <Link to={subitem.href} className="text-[13px] text-gray-500 hover:text-[#148d8d] flex items-center gap-2 transition-all hover:translate-x-1 group/item">
                                                                        <div className="w-1 h-1 rounded-full bg-gray-300 group-hover/item:bg-[#148d8d]" />
                                                                        {subitem.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Right: Featured Promo (Cols 9-12) */}
                                            <div className="col-span-4 bg-[#f8fafc] rounded-3xl p-8 border border-gray-100">
                                                <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-4">Featured Highlight</h4>
                                                <h3 className="text-xl font-bold text-[#0a192f] mb-3">Global Internship Programs 2026</h3>
                                                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                                    Start your luxury hospitality journey with premier placements in the USA and Dubai.
                                                </p>
                                                <Button size="sm" className="bg-[#148d8d] hover:bg-[#0a192f] rounded-full group">
                                                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* CTA Group */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button variant="ghost" asChild className="text-gray-600 hover:text-[#148d8d] hover:bg-[#148d8d]/5 rounded-full px-6">
                        <Link to="/apply">Job Search</Link>
                    </Button>
                    <Button asChild className="bg-gradient-to-r from-[#d4af37] to-[#b8952b] text-white rounded-full px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                        <Link to="/hire">Hire Talent</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden p-2 text-[#0a192f] hover:bg-gray-100 rounded-xl transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </nav>
        </header>
    );
}