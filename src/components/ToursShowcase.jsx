import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ToursShowcase = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeImage, setActiveImage] = useState(null); // Added back for background change
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  // Tours data
  const tours = [
    {
      id: 0,
      title: t('tours.paragliding.title'),
      description: t('tours.paragliding.description'),
      image: 'images/tours/paraglide.jpg',
      bgImage: 'images/tours/paraglide.jpg',
      link: '/service/paragliding'
    },
    {
      id: 1,
      title: t('tours.horses.title'),
      description: t('tours.horses.description'),
      image: 'images/tours/horses.JPG',
      bgImage: 'images/tours/horses.JPG',
      link: '/service/horse'
    },
    {
      id: 2,
      title: t('tours.camels.title'),
      description: t('tours.camels.description'),
      image: 'images/tours/camels.jpg',
      bgImage: 'images/tours/camels.jpg',
      link: '/service/camel'
    },
    {
      id: 3,
      title: t('tours.quad.title'),
      description: t('tours.quad.description'),
      image: 'images/tours/quad.webp',
      bgImage: 'images/tours/quad.webp',
      link: '/service/quad'
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

  // Background image animation
  const bgVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handleCardHover = (index) => {
    setHoveredCard(index);
    setActiveImage(index); // Update background image
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
    setActiveImage(null); // Reset background image
  };

  return (
    <div ref={sectionRef} className="relative min-h-screen py-16 md:py-0 md:h-screen overflow-hidden bg-gray-100">
      {/* Initial static background */}
      {!activeImage && (
        <div className="absolute inset-0 hidden md:block">
          <img
            src="images/tours/background.jpg"
            alt="Default background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        </div>
      )}

      {/* Dynamic Background Image (Desktop only) */}
      {activeImage !== null && (
        <motion.div 
          key={activeImage}
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 hidden md:block"
        >
          <img
            src={tours[activeImage].bgImage}
            alt={tours[activeImage].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        </motion.div>
      )}

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
          {/* Desktop version */}
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
                    hoveredCard !== null && hoveredCard !== index ? 'opacity-50' : ''
                  }`}
                >
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-semibold">{tour.title}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile version - vertical cards */}
          <div className="md:hidden grid grid-cols-1 gap-4 max-w-md mx-auto">
            {tours.map((tour, index) => (
              <Link to={tour.link} key={tour.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative w-full h-48 overflow-hidden cursor-pointer rounded-sm shadow-lg"
                >
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
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