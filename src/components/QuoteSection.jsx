import React from 'react';
import { useTranslation } from 'react-i18next';

const QuoteSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 text-center md:mb-96">
      <h4 className="uppercase text-sm tracking-widest mb-6 font-medium text-black">
        {t('quote.title')}
      </h4>
      <p className="max-w-4xl mx-auto text-2xl sm:text-3xl md:text-4xl font-light text-black leading-snug">
        {t('quote.body')}
      </p>
    </section>
  );
};

export default QuoteSection;

