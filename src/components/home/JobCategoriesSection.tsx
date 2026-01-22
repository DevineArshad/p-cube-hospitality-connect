import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';

import chefImage from '@/assets/chef-kitchen.jpg';
import cruiseImage from '@/assets/cruise-service.jpg';
import resortImage from '@/assets/resort-luxury.jpg';
import hotelImage from '@/assets/hotel-reception.jpg';

const categories = [
  {
    id: 'hotels',
    title: 'Hotel Jobs',
    description: 'Front office, housekeeping, F&B service, kitchen, management and more',
    image: hotelImage,
    positions: '250+ Active',
  },
  {
    id: 'resorts',
    title: 'Resort Jobs',
    description: 'Luxury resort positions worldwide including spa, recreation, and hospitality',
    image: resortImage,
    positions: '120+ Active',
  },
  {
    id: 'cruise',
    title: 'Cruise Jobs',
    description: 'Exciting careers aboard international cruise lines across all departments',
    image: cruiseImage,
    positions: '180+ Active',
  },
  {
    id: 'restaurant',
    title: 'Restaurant & QSR',
    description: 'Fine dining, casual restaurants, and quick service establishments',
    image: chefImage,
    positions: '300+ Active',
  },
];

export function JobCategoriesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          badge="Job Categories"
          title="Explore Career Opportunities"
          subtitle="Discover exciting hospitality careers across hotels, resorts, cruise lines, and restaurants worldwide."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl h-80"
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block w-fit px-3 py-1 bg-gold text-navy text-xs font-semibold rounded-full mb-3">
                  {category.positions}
                </span>
                <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-primary-foreground/80 mb-4">
                  {category.description}
                </p>
                <Link 
                  to={`/jobs#${category.id}`}
                  className="inline-flex items-center text-gold font-medium hover:text-gold-light transition-colors"
                >
                  View Openings
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
            <Link to="/jobs">
              View All Job Categories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
