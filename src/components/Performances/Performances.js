import React from "react";
import "./Performances.css";
import RadarChartPerformance from "./RadarChartPerformance/RadarChartPerformance";

export const Performances = () => {
  return (
    <>
      <div className="item"></div>
      <div className="item ">
        <RadarChartPerformance />
      </div>
      <div className="item"></div>
    </>
  );
};
