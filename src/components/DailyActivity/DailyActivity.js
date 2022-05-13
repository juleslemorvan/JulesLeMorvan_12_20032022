import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getUserActivity } from "../../api/routes";

import "./DailyActivity.css";
import { useParams } from "react-router-dom";

export const DailyActivity = () => {
  const [userActivity, setUserActivity] = useState([]);
  const { id } = useParams();
  const userId = id;

  useEffect(() => {
    const fetchUserActivity = async () => {
      const userActivityResponse = await getUserActivity(userId);
      const nextUserActivity = userActivityResponse.data.data.sessions.map(
        (session, index) => ({
          ...session,
          day: index + 1,
          "poids (kg)": session.kilogram,
        })
      );
      setUserActivity(nextUserActivity);
    };

    fetchUserActivity();
  }, []);

  const TooltipStyle = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div
          className="tooltip"
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#E60000",
            padding: "15px 5px",
            color: "white",
          }}
        >
          <p>{payload[0].value}kg</p>
          <p>{payload[1].value}Kcal</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        Activités quotidiennes
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          barSize={7}
          barGap={8}
          data={userActivity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip content={<TooltipStyle payload={[userActivity]} />} />
          <Legend verticalAlign="top" align="end" />
          <Bar
            dataKey="poids (kg)"
            fill="#282D30"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
