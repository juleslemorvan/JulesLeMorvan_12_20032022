import React, { useEffect, useState, useContext } from "react";
import { UserInformations } from "../../components/UserInformations/UserInformations";
import { Nutriments } from "../../components/Nutriments/Nutriments";
import { Performances } from "../../components/Performances/Performances";
import { DailyActivity } from "../../components/DailyActivity/DailyActivity";
import "./Home.css";
import { getUser } from "../../api/routes";
import { useSearchParams, useNavigate } from "react-router-dom";
import { config } from "../../const";

export const Home = () => {
  const [user, setUser] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const userId = searchParams.get("user_id");

  useEffect(() => {
    const { allowedUserIds } = config;

    if (!userId) {
      const firstUserId = allowedUserIds[0];
      window.location.search = `?user_id=${firstUserId}`;
    }

    if (!allowedUserIds.includes(Number(userId))) {
      navigate("/user_not_found");
    }
  }, [userId, navigate]);

  useEffect(() => {
    const fetchUser = async () => {
      const userResponse = await getUser(userId);

      setUser(userResponse.data.data);
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  if (!user) {
    return "...";
  }

  return (
    <div className="homeContainer">
      <UserInformations firstName={user.userInfos.firstName} />
      <div className="content">
        <div className="dailyActivity">
          <DailyActivity />
        </div>
        <div className="performances">
          <Performances />
        </div>
        <div className="nutriments">
          <Nutriments data={user.keyData} />
        </div>
      </div>
    </div>
  );
};
