import React from "react";
import "./Performances.css";
import RadarChartPerformance from "./RadarChartPerformance/RadarChartPerformance";

export const Performances = () => {
  return (
    <div className="performances-container">
      <div className="item"></div>
      <div className="RadarChartPerformance-item">
        <RadarChartPerformance />
      </div>
      <div className="item"></div>
    </div>
  );
};
