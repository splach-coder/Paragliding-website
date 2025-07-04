import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ParaglidingContact from "../components/ParaglidingContact";

// Main App Component
const Home = () => {
  return (
    <MainLayout>
      <SeoHead
        title="Contact Us | Book Your Marrakech Tour with FlyTandem"
        description="Need help or ready to book your adventure? Contact FlyTandem via WhatsApp, email or our quick contact form. We’ll respond within 24 hours."
        image="/images/tours/paraglide.jpg"
      />

      <ParaglidingContact />
    </MainLayout>
  );
};

export default Home;
