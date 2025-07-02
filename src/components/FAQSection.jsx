import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import WhatsAppButton from "./WhatsappButton";

// Configuration data (non-translatable content)
const faqConfig = {
  linkUrl: "https://wa.me/212651452409", // Replace with your actual WhatsApp number
  questionsCount: 6 // Number of questions for dynamic rendering
};

const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif italic text-slate-blue mb-4">
          {t('faq.title')}
        </h2>
        <p className="text-grayish-teal text-base leading-relaxed mb-6">
          {t('faq.subtitle')}
        </p>
        <a 
          href={faqConfig.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-deep-teal hover:text-slate-blue transition-colors duration-200 font-medium underline"
        >
          <WhatsAppButton text={t('faq.linkText')} />
        </a>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {Array.from({ length: faqConfig.questionsCount }, (_, index) => (
          <div 
            key={index}
            className="border-b border-light-gray last:border-b-0"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 group"
            >
              <span className="text-slate-blue font-medium text-lg pr-4 group-hover:text-deep-teal transition-colors duration-200">
                {t(`faq.questions.${index}.question`)}
              </span>
              <ChevronDown 
                className={`w-5 h-5 text-grayish-teal transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              <div className="text-grayish-teal leading-relaxed text-base">
                {t(`faq.questions.${index}.answer`)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;