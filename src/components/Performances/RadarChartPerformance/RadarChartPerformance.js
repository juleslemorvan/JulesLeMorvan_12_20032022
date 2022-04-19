import React, { useState, useEffect } from "react";
import "./RadarChartPerformance.css";
import { config } from "../../../const";
import { getUserPerformance } from "../../../api/routes";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const RadarChartPerformance = () => {
  const [userPerformance, setUserPerformance] = useState([]);

  useEffect(() => {
    const fetchUserPerformance = async () => {
      const userPerformanceResponse = await getUserPerformance(config.userId);
      console.log(userPerformanceResponse);

      setUserPerformance(userPerformanceResponse.data.data.sessions);
    };

    fetchUserPerformance();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerformance}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartPerformance;
