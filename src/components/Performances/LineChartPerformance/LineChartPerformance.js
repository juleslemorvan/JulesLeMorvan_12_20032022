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
    <div style={{ color: "white", margin: 20, marginBottom: 50, opacity: 0.7 }}>
      <p>Durée moyenne des sessions</p>
    </div>
  );
};
let div = document.querySelector(".average-sessions");

const LineChartPerformance = () => {
  const { id } = useParams();
  const userId = id;

  const [userAverageSessions, setUserAverageSessions] = useState([]);

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

  const TooltipStyle = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div
          className="tooltip"
          style={{
            background: "white",
            padding: "10px 5px",
            color: "black",
            fontWeight: "bold",
          }}
        >
          <p>{payload[0].value} min</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="average-sessions"
    >
      <LineChart
        onMouseMove={(e) => {
          if (e.isTooltipActive === true) {
            let windowWidth = div.clientWidth;
            let percentage = Math.round(
              (e.activeCoordinate.x / windowWidth) * 100
            );

            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${percentage}%, rgba(175,0,0,1.5) ${percentage}%, rgba(175,0,0,1.5) 100%)`;
          } else {
            div.style.background = `#FF0100`;
          }
        }}
        width={500}
        height={300}
        data={userAverageSessions}
        className="simpleLineChart"
        margin={{
          top: 0,
          right: 10,
          left: 10,
          bottom: 10,
        }}
      >
        <XAxis
          dataKey="name"
          tick={{ fill: "white", opacity: "0.7" }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip content={<TooltipStyle payload={[userAverageSessions]} />} />
        <Legend content={renderLegende} verticalAlign="top" />
        <Line
          type="natural"
          dataKey="value"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: "#fff",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartPerformance;
