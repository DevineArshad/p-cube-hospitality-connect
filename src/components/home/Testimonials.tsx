import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Hotel Manager, Luxury Resorts',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    content: 'P Cube Consulting transformed our recruitment process. They provided exceptional candidates who truly understood luxury hospitality standards. Highly recommended!',
    rating: 5,
    company: 'Five-Star Hotel Chain',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    position: 'Operations Director, Middle East',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
    content: 'The professionalism and attention to detail from the team was outstanding. They matched us with skilled professionals who elevated our service standards significantly.',
    rating: 5,
    company: 'International Hotel Group',
  },
  {
    id: 3,
    name: 'Emily Chen',
    position: 'HR Manager, Hospitality Group',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    content: 'Working with P Cube Consulting has been a game-changer for our staffing needs. Their dedication to finding the perfect fit for our team is unmatched.',
    rating: 5,
    company: 'Asian Hospitality Chain',
  },
  {
    id: 4,
    name: 'Michael Stevens',
    position: 'Executive Chef, Restaurant Group',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    content: 'The candidates sent by P Cube were well-trained and motivated. They made an immediate impact on our kitchen operations and service quality.',
    rating: 5,
    company: 'Fine Dining Establishments',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by leading hospitality brands and employers worldwide
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="pt-6 px-6">
                <Quote className="w-8 h-8 text-blue-500 opacity-60" />
              </div>

              {/* Content */}
              <div className="px-6 py-4">
                <p className="text-gray-700 text-sm leading-relaxed mb-4 min-h-24">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200" />

              {/* Author Info */}
              <div className="px-6 py-4 flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-200"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-600 truncate">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-blue-600 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg mb-4">
            Join hundreds of satisfied employers worldwide
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
