import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Briefcase, DollarSign, Clock, ArrowRight, Search, Filter,
  Building2, Ship, UtensilsCrossed, Plane, Coffee, Users
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import hotelImage from '@/assets/hotel-reception.jpg';
import resortImage from '@/assets/resort-luxury.jpg';
import cruiseImage from '@/assets/cruise-service.jpg';
import chefImage from '@/assets/chef-kitchen.jpg';

const categories = [
  { id: 'all', name: 'All Jobs', icon: Briefcase, count: 850 },
  { id: 'hotels', name: 'Hotel Jobs', icon: Building2, count: 250 },
  { id: 'resorts', name: 'Resort Jobs', icon: Building2, count: 120 },
  { id: 'cruise', name: 'Cruise Jobs', icon: Ship, count: 180 },
  { id: 'airline', name: 'Airline Catering', icon: Plane, count: 95 },
  { id: 'restaurant', name: 'Restaurant & QSR', icon: UtensilsCrossed, count: 145 },
  { id: 'corporate', name: 'Corporate Hospitality', icon: Coffee, count: 60 },
];

const featuredJobs = [
  {
    id: 1,
    title: 'Executive Chef',
    company: '5-Star Luxury Resort',
    location: 'Dubai, UAE',
    type: 'Full-time',
    salary: '$4,000 - $6,000/month',
    category: 'hotels',
    image: chefImage,
    featured: true,
    posted: '2 days ago',
  },
  {
    id: 2,
    title: 'Front Office Manager',
    company: 'International Hotel Chain',
    location: 'Singapore',
    type: 'Full-time',
    salary: '$3,500 - $4,500/month',
    category: 'hotels',
    image: hotelImage,
    featured: true,
    posted: '3 days ago',
  },
  {
    id: 3,
    title: 'Cruise Ship F&B Supervisor',
    company: 'Premium Cruise Line',
    location: 'International Waters',
    type: 'Contract',
    salary: '$2,800 - $3,500/month',
    category: 'cruise',
    image: cruiseImage,
    featured: true,
    posted: '1 day ago',
  },
  {
    id: 4,
    title: 'Resort Manager',
    company: 'Beach Resort & Spa',
    location: 'Maldives',
    type: 'Full-time',
    salary: '$5,000 - $7,000/month',
    category: 'resorts',
    image: resortImage,
    featured: true,
    posted: '5 days ago',
  },
];

const allJobs = [
  {
    id: 5,
    title: 'Sous Chef',
    company: 'Fine Dining Restaurant',
    location: 'Mumbai, India',
    type: 'Full-time',
    salary: '₹60,000 - ₹80,000/month',
    category: 'restaurant',
    posted: '1 day ago',
  },
  {
    id: 6,
    title: 'Housekeeping Supervisor',
    company: 'Luxury Hotel Group',
    location: 'Qatar',
    type: 'Full-time',
    salary: '$2,000 - $2,500/month',
    category: 'hotels',
    posted: '3 days ago',
  },
  {
    id: 7,
    title: 'Guest Relations Executive',
    company: 'Beach Resort',
    location: 'Goa, India',
    type: 'Full-time',
    salary: '₹35,000 - ₹45,000/month',
    category: 'resorts',
    posted: '2 days ago',
  },
  {
    id: 8,
    title: 'Pastry Chef',
    company: 'Cruise Line',
    location: 'Caribbean Routes',
    type: 'Contract',
    salary: '$3,000 - $4,000/month',
    category: 'cruise',
    posted: '4 days ago',
  },
  {
    id: 9,
    title: 'Flight Kitchen Manager',
    company: 'Airline Catering Company',
    location: 'Delhi, India',
    type: 'Full-time',
    salary: '₹80,000 - ₹1,00,000/month',
    category: 'airline',
    posted: '1 day ago',
  },
  {
    id: 10,
    title: 'Corporate Event Coordinator',
    company: 'Corporate Hospitality Firm',
    location: 'Bangalore, India',
    type: 'Full-time',
    salary: '₹50,000 - ₹65,000/month',
    category: 'corporate',
    posted: '5 days ago',
  },
  {
    id: 11,
    title: 'Bar Manager',
    company: 'Boutique Hotel',
    location: 'Bahrain',
    type: 'Full-time',
    salary: '$2,500 - $3,200/month',
    category: 'hotels',
    posted: '2 days ago',
  },
  {
    id: 12,
    title: 'Restaurant General Manager',
    company: 'QSR Chain',
    location: 'Hyderabad, India',
    type: 'Full-time',
    salary: '₹70,000 - ₹90,000/month',
    category: 'restaurant',
    posted: '3 days ago',
  },
];

const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = allJobs.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold text-sm font-medium rounded-full mb-6">
              850+ Active Openings
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Find Your Dream <span className="text-gold">Hospitality Career</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Explore exciting opportunities in hotels, resorts, cruise lines, and restaurants worldwide.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-primary-foreground rounded-2xl p-4 shadow-xl"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Job title, company, or location..."
                  className="pl-12 h-12 border-muted"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="h-12 px-8 bg-gradient-primary">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-primary-foreground shadow-teal'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                <span className="font-medium">{cat.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === cat.id ? 'bg-primary-foreground/20' : 'bg-primary/10 text-primary'
                }`}>
                  {cat.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 md:py-20">
        <div className="container">
          <SectionHeading
            badge="Featured Opportunities"
            title="Top Hospitality Positions"
            subtitle="Hand-picked positions from leading hospitality employers worldwide."
          />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={job.image} 
                    alt={job.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-navy text-xs font-semibold rounded-full">
                    Featured
                  </span>
                  <span className="absolute bottom-4 left-4 text-primary-foreground/70 text-sm">
                    {job.posted}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{job.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </span>
                  </div>
                  <Button asChild className="w-full bg-gradient-primary">
                    <Link to="/apply">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Jobs List */}
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
            All Open Positions ({filteredJobs.length})
          </h3>
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-1">{job.title}</h4>
                    <p className="text-muted-foreground mb-3">{job.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{job.posted}</span>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/apply">Apply</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Submit your profile and we'll match you with suitable opportunities.
            </p>
            <Button asChild size="lg" className="bg-gradient-gold text-navy">
              <Link to="/apply">
                Submit Your Profile
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
