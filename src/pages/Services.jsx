import React from "react";
import MainLayout from "../layouts/MainLayout";
import ServicesSection from "../components/ServicesSection";
import QuoteSection from "../components/QuoteSection";

// Main App Component
const Services = () => {
  return (
    <MainLayout>
      <SeoHead
        title="Our Services | Paragliding, Quads, Camels & More in Marrakech"
        description="Browse all our outdoor adventure services including tandem paragliding, quad bike tours, camel treks, and horse rides — all with expert guides."
        image="/images/gallery/12.jpg"
      />
      <ServicesSection />
      <QuoteSection />
    </MainLayout>
  );
};

export default Services;
