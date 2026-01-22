import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Clock, Globe, Users, Award } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import corporateImage from '@/assets/corporate-meeting.jpg';

const features = [
  {
    icon: Shield,
    title: 'Trusted & Verified Placements',
    description: 'All positions are verified with reputable employers, ensuring safe and legitimate opportunities.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Access opportunities in 25+ countries with our extensive international partner network.',
  },
  {
    icon: Clock,
    title: 'Fast-Track Deployment',
    description: 'Streamlined processes for quick visa approvals and candidate deployment.',
  },
  {
    icon: Users,
    title: 'End-to-End Support',
    description: 'From resume building to post-deployment support, we guide you at every step.',
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description: '12+ years of specialized experience in hospitality recruitment excellence.',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Assurance',
    description: 'Rigorous screening ensures only the best candidates are presented to employers.',
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 md:py-28 bg-navy text-primary-foreground overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold text-sm font-medium rounded-full mb-6">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Your Success is Our <span className="text-gold">Priority</span>
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-10 leading-relaxed">
                P Cube Consulting combines deep industry expertise with a genuine commitment to 
                candidate and employer success. We don't just fill positions—we build careers 
                and strengthen hospitality teams worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-primary-foreground/60">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={corporateImage} 
                alt="Professional recruitment team meeting" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-card rounded-xl p-6 shadow-xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-navy" />
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold text-foreground">98%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
