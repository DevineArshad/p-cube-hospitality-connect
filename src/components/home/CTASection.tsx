import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, UserPlus, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Whether you're a hospitality professional seeking your dream career or an employer 
            looking for exceptional talent, P Cube Consulting is here to help you succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For Job Seekers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20"
          >
            <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6">
              <UserPlus className="w-8 h-8 text-navy" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
              For Job Seekers
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Submit your application today and unlock exciting hospitality career opportunities 
              across India and worldwide. Our expert team will guide you every step of the way.
            </p>
            <Button asChild size="lg" className="w-full bg-gradient-gold text-navy hover:opacity-90 font-semibold">
              <Link to="/apply">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* For Employers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20"
          >
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
              For Employers
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Partner with us to access a vast pool of pre-screened, skilled hospitality 
              professionals ready to elevate your team and guest experience.
            </p>
            <Button asChild size="lg" variant="outline" className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
              <Link to="/hire">
                Hire From Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
