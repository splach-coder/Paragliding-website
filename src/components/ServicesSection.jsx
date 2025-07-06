import React from "react";
import SeoHead from "../components/SeoHead";
import { useTranslation } from "react-i18next";
import ToursShowcase from "./ToursShowcase";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <SeoHead
        title={`Services | FlyTandem`}
        description={t("servicesPage.description")}
        image="/images/tours/paraglide.jpg"
      />

      {/* Minimalist Retro Header */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h1
              className="text-3xl md:text-5xl font-black tracking-widest mb-4"
              style={{
                color: "#212A31",
                fontFamily: "Roboto, -apple-system, sans-serif",
                letterSpacing: "0.2em",
              }}
            >
              {t("services.title")}
            </h1>

            {/* Retro Underline */}
            <div className="flex justify-center">
              <div
                className="h-1 w-32"
                style={{ backgroundColor: "#748D92" }}
              ></div>
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#2E3944" }}
          >
            {t("services.subtitle")}
          </p>
        </div>
      </div>

      {/* Tours Showcase Component */}
      <ToursShowcase />
    </div>
  );
};

export default Services;
