import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Building2, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/medium-shot-woman-working-as-travel-agent.jpg';


const stats = [
  { icon: Globe, value: '25+', label: 'Countries Served' },
  { icon: Users, value: '15,000+', label: 'Placements' },
  { icon: Building2, value: '500+', label: 'Partner Hotels' },
  { icon: Award, value: '12+', label: 'Years Experience' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hospitality professionals in luxury hotel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Global Recruitment Specialists
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
          >
           Reliable Recruitment & Consulting for a{' '}
            <span className="text-gradient-gold">Global Workforce</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed"
          >
            P Cube Consulting is your trusted partner for overseas and domestic hospitality recruitment. 
            We place exceptional professionals in hotels, resorts, cruise lines, restaurants, and 
            corporate hospitality worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button asChild size="lg" className="bg-gradient-gold hover:opacity-90 text-navy font-semibold shadow-gold text-lg px-8">
              <Link to="/apply">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            {/* our services btn */}
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-background hover:bg-primary-foreground/10 text-lg px-8">
              <Link to="/hire">
                Our Services
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10"
            >
              <stat.icon className="w-8 h-8 text-gold mb-3" />
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">{stat.value}</p>
              <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
