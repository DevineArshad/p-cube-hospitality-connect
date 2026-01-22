import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Send, Facebook, Linkedin, Instagram, Youtube
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const offices = [
  {
    city: 'Mumbai (Head Office)',
    address: 'Tower A, 15th Floor, Business Park, Andheri East, Mumbai, Maharashtra 400069',
    phone: '+91 98765 43210',
    email: 'mumbai@pcubeconsulting.com',
  },
  {
    city: 'Delhi',
    address: '2nd Floor, Corporate Hub, Connaught Place, New Delhi 110001',
    phone: '+91 98765 43211',
    email: 'delhi@pcubeconsulting.com',
  },
  {
    city: 'Dubai',
    address: 'Office 1205, Business Bay Tower, Dubai, UAE',
    phone: '+971 4 123 4567',
    email: 'dubai@pcubeconsulting.com',
  },
];

const inquiryTypes = [
  'Job Seeker - Apply for Positions',
  'Employer - Hiring Inquiry',
  'Partnership Opportunity',
  'Training Services',
  'General Inquiry',
  'Other',
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24-48 hours.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold text-sm font-medium rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Have questions about our services? Looking for career opportunities or need recruitment support? 
              We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Phone, title: 'Phone', info: '+91 98765 43210', subInfo: 'Mon-Sat, 9AM-6PM' },
              { icon: Mail, title: 'Email', info: 'info@pcubeconsulting.com', subInfo: 'We reply within 24 hours' },
              { icon: MapPin, title: 'Head Office', info: 'Mumbai, Maharashtra', subInfo: 'India' },
              { icon: Clock, title: 'Business Hours', info: 'Mon - Sat: 9AM - 6PM', subInfo: 'Sunday: Closed' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-md border border-border text-center"
              >
                <div className="w-14 h-14 bg-teal-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-foreground font-medium">{item.info}</p>
                <p className="text-sm text-muted-foreground">{item.subInfo}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Send a Message"
                title="We'd Love to Hear from You"
                centered={false}
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input id="name" placeholder="Full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Our Offices"
                title="Visit Us"
                centered={false}
              />
              
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div 
                    key={office.city}
                    className="bg-card rounded-xl p-6 shadow-md border border-border"
                  >
                    <h4 className="font-heading font-semibold text-foreground text-lg mb-3">
                      {office.city}
                    </h4>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 flex-shrink-0" />
                        <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 p-6 bg-navy rounded-xl text-primary-foreground">
                <h4 className="font-heading font-semibold mb-4">Connect With Us</h4>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary/20 mx-auto mb-4" />
            <p className="text-muted-foreground">Map integration available</p>
            <p className="text-sm text-muted-foreground">Mumbai, Maharashtra, India</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
