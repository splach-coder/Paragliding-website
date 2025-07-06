import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

const TourTimelineSection = ({ timelineData }) => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Simplified scroll effects - only essential ones
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative py-28 px-6 lg:px-24 overflow-hidden bg-white"
    >
      {/* Header */}
      <div className="text-center mb-28 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
        >
          {t(timelineData.name)}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-md text-gray-600 mt-5 max-w-3xl mx-auto leading-relaxed"
        >
          {t(timelineData.description)}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <span className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
            {t(timelineData.transportNote)}
          </span>
          <span className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold">
            <a href="/contact">{t('bookNow')}</a> 
          </span>
        </motion.div>
      </div>

      {/* Timeline container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Animated timeline line */}
        <motion.div 
          className="absolute left-1/2 hidden lg:block h-full w-px bg-gray-200 origin-top transform -translate-x-1/2"
        >
          <motion.div 
            className="absolute top-0 w-full bg-gray-900 origin-top"
            style={{ 
              scaleY: lineProgress,
              height: '100%'
            }}
          />
        </motion.div>

        {/* Timeline steps */}
        <div className="space-y-32">
          {timelineData.steps.map((step, index) => {
            const isOdd = index % 2 !== 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 ${
                  isOdd ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Timeline marker */}
                <div 
                  className="absolute left-1/2 top-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <motion.span 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="text-sm font-bold text-white"
                  >
                    {index + 1}
                  </motion.span>
                </div>

                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className={`w-full h-[400px] overflow-hidden rounded-lg relative shadow-lg ${
                    isOdd ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                  <img
                    src={step.image}
                    alt={t(step.title)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute bottom-4 left-4 z-20 bg-white/90 text-gray-900 px-3 py-1 rounded text-sm font-medium backdrop-blur-sm"
                  >
                    {t(step.time)}
                  </motion.div>
                </motion.div>

                {/* Text content */}
                <div className={`relative ${isOdd ? 'lg:col-start-1 lg:pr-8' : 'lg:pl-8'}`}>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    {t(step.title)}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-600 leading-relaxed"
                  >
                    {t(step.description)}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TourTimelineSection;