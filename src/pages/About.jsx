import React from "react";
import MainLayout from "../layouts/MainLayout";
import ParaglidingInfoBlock from "../components/ParaglidingInfoBlock";
import ParaglidingTeam from "../components/ParaglidingTeam";
import FAQSection from "../components/FAQSection";

// Main App Component
const About = () => {
  return (
    <MainLayout>
      <div className="bg-white md:mb-80">
        <ParaglidingInfoBlock />
        <ParaglidingTeam />
        <FAQSection />
      </div>
    </MainLayout>
  );
};

export default About;
