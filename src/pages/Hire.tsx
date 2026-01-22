import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, Users, Globe, CheckCircle2, ArrowRight, Shield, Clock, 
  Award, Briefcase, User, Mail, Phone, FileText
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-hospitality.jpg';

const benefits = [
  {
    icon: Users,
    title: 'Pre-Screened Candidates',
    description: 'Access a pool of thoroughly vetted hospitality professionals ready for deployment.',
  },
  {
    icon: Globe,
    title: 'Diverse Talent Pool',
    description: 'Candidates with international experience and multi-cultural backgrounds.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Fast recruitment cycles to meet your urgent staffing requirements.',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'Replacement guarantee ensuring your complete satisfaction with placements.',
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Deep understanding of hospitality industry requirements and standards.',
  },
  {
    icon: Briefcase,
    title: 'End-to-End Support',
    description: 'From sourcing to onboarding, we handle the complete recruitment process.',
  },
];

const hiringCategories = [
  'Hotel Staff',
  'Resort Staff',
  'Restaurant Staff',
  'Cruise Line Staff',
  'Kitchen / Culinary',
  'Housekeeping',
  'Front Office',
  'F&B Service',
  'Management Positions',
  'Bulk Hiring',
  'Other',
];

const companyTypes = [
  'Hotel / Hotel Chain',
  'Resort / Spa',
  'Restaurant / QSR',
  'Cruise Line',
  'Catering Company',
  'Corporate Hospitality',
  'Event Management',
  'Other',
];

const Hire = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Our recruitment team will contact you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

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
              For Employers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Hire Exceptional <span className="text-gold">Hospitality Talent</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed mb-8">
              Partner with P Cube Consulting to access a vast pool of pre-screened, skilled 
              hospitality professionals ready to elevate your guest experience.
            </p>
            <div className="flex flex-wrap gap-8 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span>15,000+ Placements</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span>500+ Partner Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span>25+ Countries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            badge="Why Partner With Us"
            title="Your Trusted Recruitment Partner"
            subtitle="We understand the hospitality industry's unique staffing challenges and deliver solutions that work."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-teal-light rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <SectionHeading
            badge="Our Process"
            title="How We Deliver Talent"
            subtitle="Our streamlined process ensures you get the right candidates quickly and efficiently."
          />

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Share Requirements', desc: 'Tell us about your staffing needs, job specifications, and timeline.' },
              { step: '02', title: 'Candidate Sourcing', desc: 'We source and screen candidates from our extensive database.' },
              { step: '03', title: 'Shortlist & Interview', desc: 'Receive shortlisted profiles and conduct interviews at your convenience.' },
              { step: '04', title: 'Onboarding Support', desc: 'We handle documentation and support smooth candidate onboarding.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Get Started"
                title="Share Your Hiring Needs"
                centered={false}
              />
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form and our dedicated recruitment team will contact you within 
                24 hours to discuss your requirements and provide a customized staffing solution.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Call Us Directly</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email Us</h4>
                    <p className="text-muted-foreground">employers@pcubeconsulting.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input id="companyName" placeholder="Your company name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyType">Company Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {companyTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Person *</Label>
                    <Input id="contactName" placeholder="Full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="designation">Designation</Label>
                    <Input id="designation" placeholder="Your role" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="hiringCategory">Hiring Category *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {hiringCategories.map(cat => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vacancies">Number of Vacancies</Label>
                    <Input id="vacancies" type="number" placeholder="e.g., 10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Specific Requirements</Label>
                  <Textarea 
                    id="requirements" 
                    placeholder="Describe the positions, qualifications, experience needed, location, etc..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hire;
