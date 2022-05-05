import React from "react";
import "./Performances.css";
import RadarChartPerformance from "./RadarChartPerformance/RadarChartPerformance";
import RadialBarChartPerformance from "./RadialBarChartPerformance/RadialBarChartPerformance";
import LineChartPerformance from "./LineChartPerformance/LineChartPerformance";

export const Performances = () => {
  return (
    <div className="performances-container">
      <div className="LineChartPerformance">
        <LineChartPerformance />
      </div>
      <div className="RadarChartPerformance-item">
        <RadarChartPerformance />
      </div>
      <div className="RadialBarChart-item">
        <RadialBarChartPerformance />
      </div>
    </div>
  );
};
