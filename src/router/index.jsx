import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import TourTimelineSection from "../components/TourTimelineSection";
import {
  paraglidingTimeline,
  quadTimeline,
  camelTimeline,
  horseTimeline,
} from "../data/tourTimelines"; // <- adjust path if needed

const timelines = {
  paragliding: paraglidingTimeline,
  quad: quadTimeline,
  camel: camelTimeline,
  horse: horseTimeline,
};

const Service = () => {
  const { service } = useParams();
  const timelineData = timelines[service];

  if (!timelineData) {
    return (
      <MainLayout>
        <div className="min-h-[50vh] flex items-center justify-center text-gray-500 text-xl">
          Service not found: {service}
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="md:mt-20 md:mb-80">
        <TourTimelineSection timelineData={timelineData} />
      </div>
    </MainLayout>
  );
};

export default Service;
