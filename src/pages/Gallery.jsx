import React from "react";
import MainLayout from "../layouts/MainLayout";
import GallerySection from "../components/GallerySection";

// Main App Component
const Gallery = () => {
  return (
    <MainLayout>
      <div className="bg-white md:mb-80">
        <GallerySection />
      </div>
    </MainLayout>
  );
};

export default Gallery;