import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ParaglidingContact from "../components/ParaglidingContact";

// Main App Component
const Home = () => {
  return (
    <MainLayout>
      <ParaglidingContact />
    </MainLayout>
  );
};

export default Home;
