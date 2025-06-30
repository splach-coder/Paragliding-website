import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TourTimelineSection = ({ timelineData }) => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-6 lg:px-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-black">
          {t(timelineData.name)}
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          {t(timelineData.description)}
        </p>
        <p className="text-sm text-gray-500 mt-2 italic">
          {t(timelineData.transportNote)}
        </p>
        <div className="mt-6 text-xl font-medium text-black">
          {t('Price')}: {timelineData.price}
        </div>
      </motion.div>

      {/* Timeline Steps */}
      <div className="space-y-24">
        {timelineData.steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className="w-full h-72 lg:h-96 overflow-hidden">
              <img
                src={step.image}
                alt={t(step.title)}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">
                {t(step.time)} — {t(step.title)}
              </h3>
              <p className="text-gray-700 text-base">
                {t(step.description)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TourTimelineSection;
