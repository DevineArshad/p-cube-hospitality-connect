import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, Home, Users, FileCheck, GraduationCap, Building2, 
  ArrowRight, CheckCircle2, Plane, FileText, Award, Briefcase
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-hospitality.jpg';

const services = [
  {
    id: 'overseas',
    icon: Globe,
    title: 'Overseas Hospitality Recruitment',
    description: 'We specialize in placing hospitality professionals in premium positions across the globe. Our extensive network spans the Middle East, Europe, Southeast Asia, Australia, and beyond.',
    features: [
      'Placements in 25+ countries worldwide',
      'Premium hotel and resort positions',
      'Cruise line opportunities',
      'Competitive international packages',
      'Pre-departure orientation and support',
    ],
    color: 'bg-primary',
  },
  {
    id: 'domestic',
    icon: Home,
    title: 'Domestic Hospitality Staffing',
    description: 'Comprehensive recruitment solutions for the Indian hospitality market, from luxury hotels to quick-service restaurants, covering all major cities and tourist destinations.',
    features: [
      'Pan-India recruitment coverage',
      'Hotels, resorts, and restaurants',
      'Entry-level to management positions',
      'Quick turnaround placements',
      'Local market expertise',
    ],
    color: 'bg-secondary',
  },
  {
    id: 'bulk',
    icon: Users,
    title: 'Bulk Hiring for Hotels & Chains',
    description: 'Large-scale recruitment campaigns designed for hotel chains, new property openings, and seasonal staffing requirements with efficient mass recruitment processes.',
    features: [
      'Volume recruitment campaigns',
      'New property pre-opening staffing',
      'Seasonal workforce solutions',
      'Multi-location hiring',
      'Customized assessment centers',
    ],
    color: 'bg-accent',
  },
  {
    id: 'visa',
    icon: FileCheck,
    title: 'Visa & Immigration Support',
    description: 'End-to-end visa processing and immigration assistance ensuring smooth overseas placements with complete documentation and compliance support.',
    features: [
      'Work permit processing',
      'Document attestation and verification',
      'Embassy interview preparation',
      'Immigration compliance guidance',
      'Travel and logistics coordination',
    ],
    color: 'bg-primary',
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Training & Skill Development',
    description: 'Pre-deployment training programs designed to prepare candidates for international hospitality standards and specific client requirements.',
    features: [
      'Language proficiency training',
      'Service excellence workshops',
      'Cultural sensitivity programs',
      'Technical skills enhancement',
      'Soft skills development',
    ],
    color: 'bg-secondary',
  },
  {
    id: 'employer',
    icon: Building2,
    title: 'Employer Recruitment Solutions',
    description: 'Tailored hiring solutions for hotels, resorts, and hospitality businesses to find the perfect talent match with comprehensive support throughout the process.',
    features: [
      'Customized recruitment strategies',
      'Comprehensive candidate screening',
      'Interview coordination and support',
      'Background verification services',
      'Onboarding assistance',
    ],
    color: 'bg-accent',
  },
];

const process = [
  {
    step: '01',
    icon: FileText,
    title: 'Requirement Analysis',
    description: 'We understand your specific needs, whether you\'re a candidate seeking opportunities or an employer looking for talent.',
  },
  {
    step: '02',
    icon: Users,
    title: 'Sourcing & Screening',
    description: 'Our expert team sources qualified candidates through our extensive database and rigorous screening processes.',
  },
  {
    step: '03',
    icon: Award,
    title: 'Selection & Matching',
    description: 'We carefully match candidates with suitable positions based on skills, experience, and career aspirations.',
  },
  {
    step: '04',
    icon: Plane,
    title: 'Deployment & Support',
    description: 'From documentation to orientation, we ensure smooth deployment and provide ongoing support.',
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold text-sm font-medium rounded-full mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Comprehensive Hospitality <span className="text-gold">Recruitment Solutions</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              From overseas placements to domestic staffing, visa support to training programs, 
              we offer end-to-end solutions tailored to the hospitality industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-gradient-primary hover:opacity-90">
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                <div className={`bg-muted rounded-2xl p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="w-full h-64 flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-primary/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            subtitle="Our streamlined recruitment process ensures efficient placements with quality outcomes."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 shadow-md border border-border h-full">
                  <span className="text-6xl font-heading font-bold text-muted/50">{item.step}</span>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mt-4 mb-4">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-foreground mb-3">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-6 w-8 h-8 text-primary/30 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Whether you're seeking your next career move or looking to hire exceptional talent, 
              our team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-gold text-navy hover:opacity-90">
                <Link to="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/hire">
                  Hire From Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
