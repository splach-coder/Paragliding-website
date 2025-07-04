import React from "react";
import MainLayout from "../layouts/MainLayout";
import GallerySection from "../components/GallerySection";
import SeoHead from "../components/SeoHead"

// Main App Component
const Gallery = () => {
  return (
    <MainLayout>
      <SeoHead
        title="Gallery | Adventures with FlyTandem in Photos"
        description="Discover the beauty of Morocco from above and across the desert. Check out real moments from our customers and tours."
        image="/images/gallery/1.JPG"
      />

      <div className="bg-white md:mb-80">
        <GallerySection />
      </div>
    </MainLayout>
  );
};

export default Gallery;
