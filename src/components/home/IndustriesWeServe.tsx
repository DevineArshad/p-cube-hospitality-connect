import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import chefImage from '@/assets/chef-kitchen.jpg';
import corporateImage from '@/assets/corporate-meeting.jpg';
import travelAgentImage from '@/assets/medium-shot-woman-working-as-travel-agent.jpg';
import hotelImage from '@/assets/hotel-reception.jpg';
import resortImage from '@/assets/resort-luxury.jpg';
import cruiseImage from '@/assets/cruise-service.jpg';

import { ArrowRight } from 'lucide-react';

const industries = [
    {
        id: 1,
        name: 'Hospitality',
        image: chefImage,
        link: '/services',
    },
    {
        id: 2,
        name: 'Health Care',
        image: corporateImage,
        link: '/services',
    },
    {
        id: 3,
        name: 'Oil and Gas',
        image: hotelImage,
        link: '/services',
    },
    {
        id: 4,
        name: 'Construction',
        image: travelAgentImage,
        link: '/services',
    },
    {
        id: 5,
        name: 'Retail',
        image: resortImage,
        link: '/services',
    },
    {
        id: 6,
        name: 'Information Technology',
        image: cruiseImage,
        link: '/services',
    },
];

export function IndustriesWeServe() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        INDUSTRIES WE SERVE
                    </h2>
                    <div className="w-20 h-1 bg-teal-600 mx-auto" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group relative h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-200"
                        >
                            {/* 1. THE IMAGE: Ensure 'w-full h-full' and 'object-cover' are present */}
                            <img
                                src={industry.image}
                                alt={industry.name}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* 2. THE OVERLAY: Gradient makes sure the image is visible but text is readable */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-all duration-300" />

                            {/* 3. THE CONTENT */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                                <Link
                                    to={industry.link}
                                    className="flex flex-col items-center justify-center w-full p-6 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-xl transition-all duration-300 group/btn"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                        {industry.name}
                                    </h3>
                                    
                                    {/* Reveal "View All" on hover */}
                                    <div className="flex items-center gap-2 text-sm text-teal-300 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <span>View All</span>
                                        <ArrowRight size={14} />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}