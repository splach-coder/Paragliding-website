import React from "react";
import MainLayout from "../layouts/MainLayout";
import ParaglidingInfoBlock from "../components/ParaglidingInfoBlock";
import ParaglidingTeam from "../components/ParaglidingTeam";


// Main App Component
const Services = () => {

  return (
    <MainLayout>
      <ParaglidingInfoBlock />
      <ParaglidingTeam />
      <div className="md:mt-80"> </div>
    </MainLayout>
  );
};

export default Services;