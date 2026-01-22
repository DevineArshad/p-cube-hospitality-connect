import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Globe, Award, Users, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import corporateImage from '@/assets/corporate-meeting.jpg';
import heroImage from '@/assets/hero-hospitality.jpg';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in every interaction, building trust through transparency.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in candidate placement, ensuring perfect matches for lasting success.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Our international network spans 25+ countries, connecting talent with opportunities worldwide.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We believe in long-term partnerships with both candidates and employers for mutual growth.',
  },
];

const milestones = [
  { year: '2012', title: 'Foundation', description: 'P Cube Consulting was established with a vision to transform hospitality recruitment.' },
  { year: '2015', title: 'International Expansion', description: 'Expanded operations to the Middle East, serving premium hotels and resorts.' },
  { year: '2018', title: '10,000 Placements', description: 'Achieved the milestone of 10,000 successful hospitality placements worldwide.' },
  { year: '2021', title: 'Pan-India Network', description: 'Established recruitment offices across major Indian cities for domestic coverage.' },
  { year: '2024', title: 'Industry Leader', description: 'Recognized as a leading hospitality recruitment firm with 15,000+ placements.' },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Building Hospitality Careers, <span className="text-gold">Globally</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              Since 2012, P Cube Consulting has been the trusted bridge between talented 
              hospitality professionals and world-class employers across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Who We Are"
                title="Your Trusted Hospitality Recruitment Partner"
                centered={false}
              />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  P Cube Consulting is a premier hospitality recruitment consultancy dedicated to 
                  connecting exceptional talent with outstanding career opportunities. With over a 
                  decade of specialized expertise, we understand the unique demands of the hospitality 
                  industry and the importance of finding the perfect match.
                </p>
                <p>
                  Our comprehensive approach encompasses both overseas and domestic recruitment, 
                  serving hotels, resorts, cruise lines, restaurants, and corporate hospitality 
                  establishments. We take pride in our ability to source, screen, and place candidates 
                  who not only meet but exceed employer expectations.
                </p>
                <p>
                  From entry-level positions to executive leadership roles, our team of experienced 
                  recruitment professionals works tirelessly to ensure successful placements that 
                  benefit both candidates and employers alike.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src={corporateImage} 
                alt="P Cube Consulting team" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-gold rounded-xl p-6 shadow-gold">
                <p className="text-4xl font-heading font-bold text-navy">12+</p>
                <p className="text-navy/70 text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-10 shadow-lg border border-border"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted partner in hospitality recruitment, delivering exceptional 
                talent solutions that empower organizations to achieve service excellence while 
                enabling professionals to build fulfilling careers in the global hospitality industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-2xl p-10 shadow-lg border border-border"
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as the global leader in hospitality recruitment, setting industry 
                benchmarks for quality, reliability, and innovation while positively impacting the 
                careers of hospitality professionals and the success of hospitality businesses worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            badge="Our Values"
            title="Principles That Guide Us"
            subtitle="These core values define who we are and how we work with candidates and employers."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-teal-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-navy text-primary-foreground">
        <div className="container">
          <SectionHeading
            badge="Our Journey"
            title="Milestones of Excellence"
            subtitle="From humble beginnings to industry leadership, here's our story of growth and commitment."
            className="text-primary-foreground [&_span]:bg-gold/20 [&_span]:text-gold [&_p]:text-primary-foreground/70"
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                  <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm border border-primary-foreground/10">
                    <span className="text-gold font-heading font-bold text-2xl">{milestone.year}</span>
                    <h4 className="font-semibold text-lg mt-2 mb-2">{milestone.title}</h4>
                    <p className="text-primary-foreground/70 text-sm">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-navy z-10" />
                
                {/* Mobile version */}
                <div className="flex-1 ml-16 md:hidden">
                  <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm border border-primary-foreground/10">
                    <span className="text-gold font-heading font-bold text-2xl">{milestone.year}</span>
                    <h4 className="font-semibold text-lg mt-2 mb-2">{milestone.title}</h4>
                    <p className="text-primary-foreground/70 text-sm">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of hospitality professionals and businesses who trust P Cube Consulting 
              for their recruitment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/apply">
                  Apply for Jobs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
