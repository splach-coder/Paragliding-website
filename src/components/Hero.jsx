import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Hero Component with Image Slider
const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "/images/slider/paraglide.webp",
      alt: "Paragliding adventure over scenic landscape",
      titleKey: "hero.slide1.title",
      descriptionKey: "hero.slide1.description",
    },
    {
      image:
      "/images/slider/camels.jpg",
      alt: "Camel tour in desert landscape",
      titleKey: "hero.slide2.title",
      descriptionKey: "hero.slide2.description",
    },
    {
      image:
      "/images/slider/horses.JPG",
      alt: "Horse riding adventure in nature",
      titleKey: "hero.slide3.title",
      descriptionKey: "hero.slide3.description",
    },
    {
      image:
      "/images/slider/quad.webp",
      alt: "Quad biking adventure tour",
      titleKey: "hero.slide4.title",
      descriptionKey: "hero.slide4.description",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Animated Text Content */}
            <div key={currentSlide} className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[Geist] text-white mb-6 leading-tight tracking-wide">
                {t(slides[currentSlide].titleKey)}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm mb-2 writing-mode-vertical">
            {t("hero.scrollDown")}
          </span>
          <div className="w-px h-12 bg-white/60 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
