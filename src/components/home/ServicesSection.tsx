import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Home, Users, FileCheck, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const services = [
  {
    icon: Globe,
    title: 'Overseas Hospitality Recruitment',
    description: 'We connect skilled hospitality professionals with premium opportunities across the Middle East, Europe, Southeast Asia, and beyond.',
    color: 'bg-primary',
  },
  {
    icon: Home,
    title: 'Domestic Hospitality Staffing',
    description: 'Comprehensive staffing solutions for hotels, resorts, and restaurants across India, from entry-level to executive positions.',
    color: 'bg-secondary',
  },
  {
    icon: Users,
    title: 'Bulk Hiring for Hotels & Chains',
    description: 'Large-scale recruitment campaigns for hotel chains, new property openings, and seasonal staffing requirements.',
    color: 'bg-accent',
  },
  {
    icon: FileCheck,
    title: 'Visa & Immigration Support',
    description: 'End-to-end visa processing, documentation, and immigration assistance for seamless overseas placements.',
    color: 'bg-primary',
  },
  {
    icon: GraduationCap,
    title: 'Training & Skill Development',
    description: 'Pre-deployment training programs to ensure candidates meet international hospitality standards and client expectations.',
    color: 'bg-secondary',
  },
  {
    icon: Building2,
    title: 'Employer Recruitment Solutions',
    description: 'Customized hiring solutions for hotels, resorts, and hospitality businesses to find the perfect talent match.',
    color: 'bg-accent',
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <SectionHeading
          badge="Our Services"
          title="Comprehensive Hospitality Recruitment"
          subtitle="From overseas placements to domestic staffing, we offer end-to-end recruitment solutions tailored to the hospitality industry."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
