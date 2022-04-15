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
import { config } from "../../const";
import "./DailyActivity.css";

export const DailyActivity = () => {
  const [userActivity, setUserActivity] = useState([]);

  useEffect(() => {
    const fetchUserActivity = async () => {
      const userActivityResponse = await getUserActivity(config.userId);
      setUserActivity(userActivityResponse.data.data.sessions);
    };

    fetchUserActivity();
  }, []);

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
          width={500}
          height={300}
          data={userActivity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" align="end" />
          <Bar dataKey="kilogram" fill="#282D30" maxBarSize={6} />
          <Bar dataKey="calories" fill="#E60000" maxBarSize={6} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
