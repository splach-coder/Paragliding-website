import React from "react";
import MainLayout from "../layouts/MainLayout";
import ParaglidingInfoBlock from "../components/ParaglidingInfoBlock";
import ParaglidingTeam from "../components/ParaglidingTeam";
import FAQSection from "../components/FAQSection";
import SeoHead from "../components/SeoHead"

// Main App Component
const About = () => {
  return (
    <MainLayout>
      <SeoHead
        title="About FlyTandem | Meet the Team Behind Morocco’s Top Adventure Tours"
        description="FlyTandem is a local agency offering thrilling outdoor experiences in Marrakech, led by licensed pilots and guides passionate about adventure."
        image="/images/tours/paraglide.jpg"
      />

      <div className="bg-white pt-14 md:pt-0 md:mb-80">
        <ParaglidingInfoBlock />
        <ParaglidingTeam />
        <FAQSection />
      </div>
    </MainLayout>
  );
};

export default About;
