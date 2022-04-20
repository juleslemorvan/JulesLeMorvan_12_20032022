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
  console.log(userActivity);

  useEffect(() => {
    const fetchUserActivity = async () => {
      const userActivityResponse = await getUserActivity(config.userId);
      const nextUserActivity = userActivityResponse.data.data.sessions.map(
        (session, index) => ({ ...session, day: index + 1 })
      );
      setUserActivity(nextUserActivity);
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
          <Tooltip />
          <Legend verticalAlign="top" align="end" />
          <Bar
            dataKey="kilogram"
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
