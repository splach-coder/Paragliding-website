import React from "react";
import MainLayout from "../layouts/MainLayout";
import TourTimelineSection from "../components/TourTimelineSection";
import paraglidingTimeline from "../data/paraglidingTimeline";

// Main App Component
const Service = () => {
  return (
    <MainLayout>
      <div className="md:mt-20 md:mb-80">
        <TourTimelineSection timelineData={paraglidingTimeline} />
      </div>
    </MainLayout>
  );
};

export default Service;
