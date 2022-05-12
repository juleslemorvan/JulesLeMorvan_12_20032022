import React, { useState, useEffect } from "react";
import "./RadarChartPerformance.css";
import { config } from "../../../const";
import { getUserPerformance } from "../../../api/routes";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { useParams } from "react-router-dom";

const RadarChartPerformance = () => {
  const { id } = useParams();
  const userId = id;

  const [userPerformance, setUserPerformance] = useState([]);

  useEffect(() => {
    const fetchUserPerformance = async () => {
      const userPerformanceResponse = await getUserPerformance(userId);

      const kinds = userPerformanceResponse.data.data.kind;
      const kindValues = userPerformanceResponse.data.data.data;

      const data = kindValues.map(({ value, kind }) => ({
        value,
        kind: kinds[kind],
      }));

      setUserPerformance(data);
    };

    fetchUserPerformance();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerformance}>
        <PolarGrid />
        <PolarAngleAxis style={{ fontSize: "11px" }} dataKey="kind" />
        <Radar
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartPerformance;
