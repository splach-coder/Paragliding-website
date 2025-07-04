import React, { useEffect, useState } from "react";
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
      <SeoHead
        title="FlyTandem | Paragliding, Quad & Desert Adventures in Marrakech"
        description="Experience Marrakech like never before. Book paragliding flights, desert quads, camel rides and horse tours with certified local guides."
        image="/images/slider/paragliding.webp"
      />

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
