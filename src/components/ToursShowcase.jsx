import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ToursShowcase = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  // Tours data
  const tours = [
    {
      id: 0,
      title: t('tours.paragliding.title'),
      description: t('tours.paragliding.description'),
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&h=400&fit=crop',
      link: '/services#paragliding'
    },
    {
      id: 1,
      title: t('tours.horses.title'),
      description: t('tours.horses.description'),
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&h=400&fit=crop',
      link: '/services#horses'
    },
    {
      id: 2,
      title: t('tours.camels.title'),
      description: t('tours.camels.description'),
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&h=400&fit=crop',
      link: '/services#camels'
    },
    {
      id: 3,
      title: t('tours.quad.title'),
      description: t('tours.quad.description'),
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop',
      link: '/services#quads'
    }
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      opacity: 1,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div ref={sectionRef} className="relative min-h-screen py-16 md:py-0 md:h-screen overflow-hidden bg-gray-100">
      {/* Static background for all screen sizes */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&h=1080&fit=crop"
          alt="Default background"
          className="w-full h-full object-cover hidden md:block"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 hidden md:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 hidden md:block"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center items-center px-4">
        {/* Featured Works Label */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="absolute top-8 left-8 flex items-center gap-2"
        >
          <span className="text-light-gray text-sm font-medium tracking-wider uppercase">
            {t('tours.featured')}
          </span>
          <div className="w-12 h-px bg-white/60 animate-pulse hidden md:block"></div>
        </motion.div>

        {/* Title for mobile */}
        <motion.h2 
          className="text-2xl font-bold mb-8 md:hidden text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {t('tours.featured')}
        </motion.h2>

        {/* Tour Cards - Horizontal on desktop, Vertical on mobile */}
        <div className="w-full max-w-6xl">
          <div className="hidden md:flex justify-center items-center">
            {tours.map((tour, index) => (
              <Link to={tour.link} key={tour.id}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                  className={`relative w-48 h-64 overflow-hidden cursor-pointer ${
                    hoveredCard !== null && hoveredCard !== index ? 'opacity-30' : ''
                  }`}
                  style={{
                    transition: 'all 0.3s ease',
                  }}
                >
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Card overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Card title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-semibold">{tour.title}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile version - vertical cards */}
          <div className="md:hidden grid grid-cols-1 max-w-md mx-auto">
            {tours.map((tour, index) => (
              <Link to={tour.link} key={tour.id}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                  className="relative w-full h-48 overflow-hidden cursor-pointer rounded-sm shadow-lg"
                >
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Card overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Card title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-semibold">{tour.title}</h3>
                    <p className="text-white/80 text-sm mt-1">{tour.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursShowcase;