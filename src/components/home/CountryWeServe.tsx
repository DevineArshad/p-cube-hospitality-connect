import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Update 'flag' with your local asset paths
const countries = [
  { code: 'IN', name: 'India', flag: 'https://flagcdn.com/in.svg' },
  { code: 'US', name: 'United States', flag: 'https://flagcdn.com/us.svg' },
    { code: 'CA', name: 'Canada', flag: 'https://flagcdn.com/ca.svg' },
    { code: 'GB', name: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg' },
    { code: 'AU', name: 'Australia', flag: 'https://flagcdn.com/au.svg' },
    { code: 'DE', name: 'Germany', flag: 'https://flagcdn.com/de.svg' },
    { code: 'FR', name: 'France', flag: 'https://flagcdn.com/fr.svg' },
    { code: 'SG', name: 'Singapore', flag: 'https://flagcdn.com/sg.svg' },
    { code: 'AE', name: 'United Arab Emirates', flag: 'https://flagcdn.com/ae.svg' },

];

export function CountryWeServe() {
  const [duplicatedCountries, setDuplicatedCountries] = useState([...countries, ...countries]);

  useEffect(() => {
    setDuplicatedCountries([...countries, ...countries]);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden relative">
      <div className="container mx-auto mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
          Countries We Serve
        </h3>
        <p className="text-gray-600 text-center">
          Operating across 25+ countries worldwide
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 md:gap-16 px-4 whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            duration: 60, // Slower speed (Increased from 40 to 60)
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {duplicatedCountries.map((country, index) => (
            <div
              key={`${country.code}-${index}`}
              className="flex flex-col items-center justify-center gap-4 min-w-max cursor-pointer group"
            >
              {/* Image Styling */}
              <div className="w-20 md:w-28 transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={country.flag} 
                  alt={`${country.name} flag`} 
                  className="w-full h-auto object-contain drop-shadow-md"
                />
              </div>
              
              <p className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                {country.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays for smooth edges */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-indigo-50 to-transparent pointer-events-none z-10"></div>
    </section>
  );
}