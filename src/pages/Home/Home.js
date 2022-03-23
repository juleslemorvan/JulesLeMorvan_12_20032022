import React, { useEffect, useState } from "react";
import { UserInformations } from "../../components/UserInformations/UserInformations";
import { Nutriments } from "../../components/Nutriments/Nutriments";
import { Performances } from "../../components/Performances/Performances";
import { DailyActivity } from "../../components/DailyActivity/DailyActivity";
import "./Home.css";
import { getUser } from "../../api/routes";
import { config } from "../../const";

export const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userResponse = await getUser(config.userId);
      setUser(userResponse.data.data);
    };

    fetchUser();
  }, []);

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
        <div className="nutriments">
          <Nutriments data={user.keyData} />
        </div>
        <div className="performances">
          <Performances />
        </div>
      </div>
    </div>
  );
};
