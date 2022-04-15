import React, { useEffect, useState, useContext } from "react";
import { UserInformations } from "../../components/UserInformations/UserInformations";
import { Nutriments } from "../../components/Nutriments/Nutriments";
import { Performances } from "../../components/Performances/Performances";
import { DailyActivity } from "../../components/DailyActivity/DailyActivity";
import "./Home.css";
import { getUser } from "../../api/routes";
import { UserContext } from "../../App";

export const Home = () => {
  const [user, setUser] = useState(null);
  const userId = useContext(UserContext);
  console.log(userId);

  useEffect(() => {
    console.log("start");

    const fetchUser = async () => {
      const userResponse = await getUser(userId);
      console.log(userResponse);

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
