import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const ParaglidingInfoBlock = () => {
  const { t } = useTranslation();
  const [visibleSections, setVisibleSections] = useState(new Set());

  const flightDetails = [
    {
      title: "Paragliding Over Marrakech",
      description: "Take off on a once-in-a-lifetime tandem paragliding experience over the Agafay Desert. Glide through the skies with our certified pilots and witness Morocco from an unforgettable perspective.",
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop&q=80",
      layout: "left",
      textColor: "text-light-gray"
    },
    {
      title: "Expert-Led Tandem Flights",
      description: "Our agency specializes in organizing paragliding flights across Marrakech and Morocco. Backed by a national team of aviation professionals with years of hands-on expertise.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&q=80",
      layout: "right",
      textColor: "text-deep-teal"
    },
    {
      title: "Price Per Person",
      description: "Enjoy your full tandem paragliding experience for just 700 Dhs or 67 €. Advance booking required.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
      isPricing: true,
      layout: "left",
      textColor: "text-light-gray"
    },
    {
      title: "Flight Itinerary",
      description: "Your experience begins with a group pickup and scenic drive to the launch site. After safety checks and a take-off briefing, you'll soar into the sky for 10–20 minutes.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&q=80",
      layout: "right",
      textColor: "text-deep-teal"
    },
    {
      title: "What's Included",
      description: "Each flight includes round-trip transport from Marrakech, a 10 to 20-minute tandem flight, full safety equipment including helmet, and optional photo/video package.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&q=80",
      layout: "left",
      textColor: "text-light-gray"
    },
    {
      title: "Certified Safety Standards",
      description: "We are the only insured paragliding company in Morocco. Our team follows strict daily safety protocols and uses certified equipment. All pilots are USHPA licensed.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80",
      layout: "right",
      textColor: "text-deep-teal"
    },
    {
      title: "Who Can Fly",
      description: "Paragliding is open to nearly everyone. We fly passengers aged 4 and up, including seniors. Weight range: 20kg-110kg. No prior experience required.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&q=80",
      layout: "left",
      textColor: "text-light-gray"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.text-content');
      const newVisibleSections = new Set();
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (isVisible) {
          newVisibleSections.add(index);
        }
      });
      
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full bg-light-gray" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Content Container */}
      <div className="relative z-20 max-w-full mx-auto">
        {/* Grid Layout */}
        <div className="space-y-0">
          {flightDetails.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${section.layout === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white`}
            >
              {/* Image - Full height */}
              <div className="lg:w-1/2 relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark-blue/20"></div>
              </div>
              
              {/* Text Content with Animation */}
              <div className={`lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-${index % 2 === 0 ? 'dark-blue' : 'slate-blue'} text-light-gray`}>
                <div 
                  className={`text-content transition-all duration-700 ease-out ${section.textColor} ${
                    visibleSections.has(index) 
                      ? 'opacity-100 translate-x-0' 
                      : section.layout === 'right' 
                        ? 'opacity-0 translate-x-10' 
                        : 'opacity-0 -translate-x-10'
                  }`}
                >
                  <h3 className="text-2xl lg:text-3xl font-light mb-6 tracking-wide">
                    {section.title}
                  </h3>
                  
                  <div className="w-16 h-px bg-grayish-teal mb-6"></div>
                  
                  <p className="text-base lg:text-lg leading-relaxed mb-8">
                    {section.description}
                  </p>
                  
                  {section.isPricing && (
                    <div className="text-center">
                      <div className="inline-block">
                        <div className="text-3xl lg:text-4xl font-light mb-4">
                          700 DHS / 67 €
                        </div>
                        <button className="w-full px-10 py-4 bg-deep-teal text-white text-lg font-medium tracking-wide hover:bg-opacity-90 transition-colors duration-300">
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParaglidingInfoBlock;