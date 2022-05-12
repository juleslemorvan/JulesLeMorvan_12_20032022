import React, { useState, useEffect } from "react";
import "./RadialBarChartPerformance.css";
import { config } from "../../../const";
import { getUser } from "../../../api/routes";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useParams } from "react-router-dom";

const RadialBarChartPerformance = () => {
  const { id } = useParams();
  const userId = id;

  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchUserScore = async () => {
      const userScoreResponse = await getUser(userId);
      const userScore = userScoreResponse.data.data.todayScore * 100;
      const userScoreData = [
        {
          uv: 100 - userScore,
          fill: "#fbfbfb",
        },
        {
          uv: userScore,
          fill: "#8884d8",
        },
      ];
      setData(userScoreData);
      setScore(userScore);
    };

    fetchUserScore();
  }, []);

  const renderLegend = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ fontFamily: "bold", fontSize: "26px", textAlign: "center" }}
        >
          {score} %
        </div>
        <div style={{ textAlign: "center" }}>de votre</div>
        <div style={{ textAlign: "center" }}>objectif</div>
      </div>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data}
      >
        <RadialBar minAngle={15} dataKey="uv" />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={""}
          content={renderLegend}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarChartPerformance;
