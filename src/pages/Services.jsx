import React from "react";
import MainLayout from "../layouts/MainLayout";
import ServicesSection from "../components/ServicesSection";
import QuoteSection from "../components/QuoteSection";


// Main App Component
const About = () => {

  return (
    <MainLayout>
      <ServicesSection />
      <QuoteSection />
    </MainLayout>
  );
};

export default About;