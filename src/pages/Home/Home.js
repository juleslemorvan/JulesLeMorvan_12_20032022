import React, { useEffect, useState, useContext } from "react";
import { UserInformations } from "../../components/UserInformations/UserInformations";
import { Nutriments } from "../../components/Nutriments/Nutriments";
import { Performances } from "../../components/Performances/Performances";
import { DailyActivity } from "../../components/DailyActivity/DailyActivity";
import "./Home.css";
import { getUser } from "../../api/routes";
import { useNavigate, useParams } from "react-router-dom";
import { config } from "../../const";

export const Home = () => {
  const [user, setUser] = useState(null);
  console.log(useParams());

  const { id, type } = useParams();
  const navigate = useNavigate();

  console.log(type);

  if (!["activity", "performance", "nutriment", undefined].includes(type)) {
    navigate("/user_not_found");
  }

  useEffect(() => {
    const { allowedUserIds } = config;

    if (!allowedUserIds.includes(Number(id))) {
      navigate("/user_not_found");
    }
  }, [id, navigate]);

  useEffect(() => {
    const fetchUser = async () => {
      const userResponse = await getUser(id);

      setUser(userResponse.data.data);
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  if (!id) {
    return "...";
  }

  return (
    <div className="homeContainer">
      <UserInformations firstName={user?.userInfos.firstName} />
      <div className="content">
        {type === "activity" || type === undefined ? (
          <div className="dailyActivity">
            <DailyActivity />
          </div>
        ) : null}
        {type === "performance" || type === undefined ? (
          <div className="performances">
            <Performances />
          </div>
        ) : null}
        {type === "nutriment" || type === undefined ? (
          <div className="nutriments">
            <Nutriments data={user?.keyData} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
