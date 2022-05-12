import React, { useEffect, useState } from "react";
import "./LineChartPerformance.css";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useParams } from "react-router-dom";
import { getUserAverageSessions } from "../../../api/routes";

const daysMap = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};

const renderLegende = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "0%",
        fontSize: "15px",
        color: "#fff",
        opacity: "0.6",
      }}
    >
      Durée moyenne des sessions
    </div>
  );
};

const LineChartPerformance = () => {
  const { id } = useParams();
  const userId = id;

  const [userAverageSessions, setUserAverageSessions] = useState([]);
  console.log(userAverageSessions);

  useEffect(() => {
    const fetchUserAverageSessions = async () => {
      const response = await getUserAverageSessions(userId);
      const formattedSessions = response.data.data.sessions.map(
        ({ day, sessionLength }) => ({
          name: daysMap[day],
          value: sessionLength,
        })
      );

      setUserAverageSessions(formattedSessions);
    };
    fetchUserAverageSessions();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width="100%"
        height="100%"
        data={userAverageSessions}
        className="simpleLineChart"
      >
        <XAxis dataKey="name" />

        <Tooltip />
        <Legend content={renderLegende} />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartPerformance;
