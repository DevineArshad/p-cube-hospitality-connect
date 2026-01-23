import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import chefImage from '@/assets/chef-kitchen.jpg';
import travelAgentImage from '@/assets/medium-shot-woman-working-as-travel-agent.jpg';
import meetingImage from '@/assets/corporate-meeting.jpg';

const services = [
  {
    id: 1,
    title: 'Immigration',
    description: 'End-to-end visa processing, documentation, and immigration assistance for seamless overseas placements.',
    image: chefImage,
    link: '/services',
  },
  {
    id: 2,
    title: 'Internship',
    description: 'Professional internship programs connecting students and fresh graduates with hospitality industry leaders.',
    image: travelAgentImage,
    link: '/services',
  },
  {
    id: 3,
    title: 'Recruitment',
    description: 'Comprehensive recruitment solutions for hotels, resorts, and hospitality businesses to find perfect talent matches.',
    image: meetingImage,
    link: '/services',
  },
];

const serviceDetails = [
  {
    title: 'Quick Service',
    description: 'We believe in time and strive to deliver results quickly by wasting no time. We have even achieved filling in a position in a week\'s time.',
    link: '/services',
  },
  {
    title: 'Our Specialization',
    description: 'Work & Travel Visa: The Work and Travel is a program run by the Government of United States of America...',
    link: '/services',
  },
  {
    title: 'Career Consultant',
    description: 'We wish to be a trusted partner for you to launch your career on a steep curve both in India and overseas. We...',
    link: '/services',
  },
];

export function ServicesSection() {
  return (
    <section className="py-28 md:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="flex justify-center items-center mb-12 md:mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">OUR SERVICES</h2>
          <Link 
            to="/services"
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm md:text-base underline absolute right-0"
          >
            VIEW MORE &gt;
          </Link>
        </div>

        {/* Service Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-4 md:px-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg mb-16">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Link 
                to={service.link}
                className="bg-gray-800 hover:bg-gray-900 text-white px-16 py-3 rounded-md font-semibold transition-colors flex flex-col items-center gap-1 shadow-lg -mt-8 relative z-10"
              >
                {service.title} 
                <span className="text-sm">Read More &gt;</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Service Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {serviceDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {detail.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {detail.description}
              </p>
              <Link 
                to={detail.link}
                className="text-gray-800 hover:text-blue-600 font-semibold text-sm transition-colors"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
