import React, { useState } from 'react';
import { Phone, Mail, Send, Users, MapPin, Clock, ChevronUp, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';


const ParaglidingContact = () => {

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    const message = `Hello! I'm interested in paragliding services.

*Contact Details:*
• Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phone}

${formData.message ? `*Message:*\n${formData.message}` : ''}

Looking forward to hearing from you!`;

    const whatsappUrl = `https://wa.me/212651452409?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-32 md:mb-80 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light text-slate-900 mb-6 tracking-tight">
            {t?.contact?.title || "Get In Touch"}
          </h2>
          <div className="w-24 h-px bg-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 font-light tracking-wide max-w-2xl mx-auto">
            {t?.contact?.subtitle || "Ready to soar through the skies? Contact our expert team to book your paragliding adventure."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Contact Form */}
          <div className="bg-slate-50 p-12 lg:p-16">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-light text-slate-900 mb-8 tracking-tight">
                {t?.contact?.formTitle || "Send us a message"}
              </h3>
              
              <div className="space-y-8">
                {/* Full Name */}
                <div>
                  <label className="block text-sm uppercase tracking-wider text-slate-600 mb-3">
                    {t?.contact?.fullName || "Full Name"} *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 focus:border-teal-600 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm uppercase tracking-wider text-slate-600 mb-3">
                    {t?.contact?.email || "Email Address"} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 focus:border-teal-600 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm uppercase tracking-wider text-slate-600 mb-3">
                    {t?.contact?.phone || "Phone Number"} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 focus:border-teal-600 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm uppercase tracking-wider text-slate-600 mb-3">
                    {t?.contact?.message || "Message"} ({t?.contact?.optional || "Optional"})
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 focus:border-teal-600 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your paragliding experience or any questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleWhatsAppSubmit}
                  className="w-full bg-slate-900 text-white py-4 px-8 uppercase tracking-wider text-sm font-medium hover:bg-teal-700 transition-colors duration-300 flex items-center justify-center space-x-3 group"
                >
                  <span>{t?.contact?.sendWhatsApp || "Send via WhatsApp"}</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200">
                <p className="text-sm text-slate-500 text-center">
                  {t?.contact?.whatsappNote || "Your message will be sent directly to our WhatsApp for immediate assistance."}
                </p>
              </div>
            </div>
          </div>

          {/* Map and Contact Info */}
          <MapSection />
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-light text-slate-900 mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wider text-slate-500">
                {t?.contact?.availability || "WhatsApp Support"}
              </div>
            </div>
            <div>
              <div className="text-4xl font-light text-slate-900 mb-2">less than 1hr</div>
              <div className="text-sm uppercase tracking-wider text-slate-500">
                {t?.contact?.responseTime || "Response Time"}
              </div>
            </div>
            <div>
              <div className="text-4xl font-light text-slate-900 mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider text-slate-500">
                {t?.contact?.satisfaction || "Customer Satisfaction"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




const MapSection = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <div className="relative">
      {/* Map Container */}
      <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-100 overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.771856755538!2d-8.0652108!3d31.2970467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb01f56a4196273%3A0xe11f9709a8f6de93!2sFlyMarrakech!5e1!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Paragliding Location Map"
          className="w-full h-full"
        />
      </div>

      {/* Mobile: Expandable Contact Info */}
      <div className="lg:hidden">
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm"
          whileTap={{ scale: 0.98 }}
        >
          <span className="font-medium text-gray-900">Contact Information</span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="bg-white overflow-hidden"
            >
              <div className="p-4 space-y-4 border-b border-gray-100">
                {/* Location */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                      {t?.contact?.location || "Location"}
                    </div>
                    <div className="text-sm text-gray-900">
                      Aguergour Marrakesh, Morocco
                    </div>
                    <div className="text-sm text-gray-600">
                      Atlas Mountains
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                      {t?.contact?.phoneLabel || "Phone"}
                    </div>
                    <div className="space-y-1">
                      <a href="tel:+212651452409" className="block text-sm text-gray-900 hover:text-gray-700">
                        +212 651 452 409
                      </a>
                      <a href="tel:+212611501135" className="block text-sm text-gray-900 hover:text-gray-700">
                        +212 611 501 135
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                      {t?.contact?.hours || "Operating Hours"}
                    </div>
                    <div className="text-sm text-gray-900">
                      Daily: 8:00 AM - 8:00 PM
                    </div>
                    <div className="text-sm text-gray-600">
                      Weather Dependent
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop: Original Design - Overlay */}
      <div className="hidden lg:block absolute left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm p-8">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
            <div>
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-1">
                {t?.contact?.location || "Location"}
              </div>
              <div className="text-slate-900 font-light">
                Aguergour Marrakesh, Morocco<br />
                Atlas Mountains
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
            <div>
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-1">
                {t?.contact?.phoneLabel || "Phone"}
              </div>
              <div className="text-slate-900 font-light">
                +212 651 452 409
              </div>
              <div className="text-slate-900 font-light">
                +212 611 501 135
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
            <div>
              <div className="text-sm uppercase tracking-wider text-slate-600 mb-1">
                {t?.contact?.hours || "Operating Hours"}
              </div>
              <div className="text-slate-900 font-light">
                Daily: 8:00 AM - 20:00 PM<br />
                Weather Dependent
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ParaglidingContact;