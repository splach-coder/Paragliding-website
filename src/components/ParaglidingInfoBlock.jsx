import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ParaglidingInfoBlock = () => {
  const { t } = useTranslation();
  const [visibleSections, setVisibleSections] = useState(new Set());

  const flightDetails = [
    {
      title: t("paragliding.title"),
      description: t("paragliding.description"),
      image: "images/sections/1.webp",
      layout: "left",
      textColor: "text-light-gray",
    },
    {
      title: t("expertFlights.title"),
      description: t("expertFlights.description"),
      image: "images/sections/2.webp",
      layout: "right",
      textColor: "text-deep-teal",
    },
    {
      title: t("pricing.title"),
      description: t("pricing.description"),
      image: "images/sections/3.webp",
      isPricing: true,
      layout: "left",
      textColor: "text-light-gray",
    },
    {
      title: t("itinerary.title"),
      description: t("itinerary.description"),
      image: "images/sections/4.webp",
      layout: "right",
      textColor: "text-deep-teal",
    },
    {
      title: t("included.title"),
      description: t("included.description"),
      image: "images/sections/5.webp",
      layout: "left",
      textColor: "text-light-gray",
    },
    {
      title: t("safety.title"),
      description: t("safety.description"),
      image: "images/sections/6.webp",
      layout: "right",
      textColor: "text-deep-teal",
    },
    {
      title: t("eligibility.title"),
      description: t("eligibility.description"),
      image: "images/sections/7.webp",
      layout: "left",
      textColor: "text-light-gray",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".text-content");
      const newVisibleSections = new Set();

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (isVisible) {
          newVisibleSections.add(index);
        }
      });

      setVisibleSections(newVisibleSections);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative w-full bg-light-gray"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* Content Container */}
      <div className="relative z-20 max-w-full mx-auto">
        {/* Grid Layout */}
        <div className="space-y-0">
          {flightDetails.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                section.layout === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } bg-white`}
            >
              {/* Image - Full height */}
              <div
                className="lg:w-1/2 relative overflow-hidden"
                style={{ aspectRatio: "16/10" }}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark-blue/20"></div>
              </div>

              {/* Text Content with Animation */}
              <div
                className={`lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center ${
                  index % 2 == 0 ? "bg-dark-blue" : "bg-white"
                } text-light-gray`}
              >
                <div
                  className={`text-content transition-all duration-700 ease-out ${
                    section.textColor
                  } ${
                    visibleSections.has(index)
                      ? "opacity-100 translate-x-0"
                      : section.layout === "right"
                      ? "opacity-0 translate-x-10"
                      : "opacity-0 -translate-x-10"
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
                          {t("pricing.amount")}
                        </div>
                        <button className="w-full px-10 py-4 bg-deep-teal text-white text-lg font-medium tracking-wide hover:bg-opacity-90 transition-colors duration-300">
                          <a href="/contact">{t("bookNow")}</a>
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
