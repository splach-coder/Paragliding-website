import React, {useEffect, useState} from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import ToursShowcase from "../components/ToursShowcase";
import ParaglidingInfoBlock from "../components/ParaglidingInfoBlock";
import QuoteSection from "../components/QuoteSection";
import ParaglidingTeam from "../components/ParaglidingTeam";
import FAQSection from "../components/FAQSection";

// Main App Component
const Home = () => {

  return (
    <MainLayout>
      <Hero />
      <ParaglidingInfoBlock />
      <ParaglidingTeam />
      <ToursShowcase />
      <FAQSection />
      <QuoteSection />
    </MainLayout>
  );
};

export default Home;