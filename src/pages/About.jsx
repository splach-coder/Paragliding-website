import React from "react";
import MainLayout from "../layouts/MainLayout";
import ParaglidingInfoBlock from "../components/ParaglidingInfoBlock";
import ParaglidingTeam from "../components/ParaglidingTeam";

// Main App Component
const About = () => {
  return (
    <MainLayout>
      <div className="bg-white md:mb-80">
        <ParaglidingInfoBlock />
        <ParaglidingTeam />
      </div>
    </MainLayout>
  );
};

export default About;
