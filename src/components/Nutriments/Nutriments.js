import React from "react";
// import { getUserAverageSession } from "../../api/routes";
// import { config } from "../../const";
import "./Nutriments.css";
import energy from "../../assets/svg/energy.svg";
import proteine from "../../assets/svg/chicken.svg";
import glucide from "../../assets/svg/apple.svg";
import lipide from "../../assets/svg/cheeseburger.svg";

export const Nutriments = ({ data }) => {
  console.log(data);
  return (
    <div className="nutriments-container">
      <div className="nutriment-item">
        <div className="img-calorie">
          <img src={energy} alt="energy-logo" />
        </div>
        <div className="infos">
          <p className="item-count">
            {data.calorieCount.toLocaleString("en-US")}kCal
          </p>
          <p className="item-title">Calories</p>
        </div>
      </div>

      <div className="nutriment-item">
        <div className="img-proteine">
          <img src={proteine} alt="proteine-logo" />
        </div>
        <div className="infos">
          <p className="item-count">{data.proteinCount}g</p>
          <p className="item-title">Proteines</p>
        </div>
      </div>

      <div className="nutriment-item">
        <div className="img-glucide">
          <img src={glucide} alt="glucide-logo" className="glucide-logo" />
        </div>
        <div className="infos">
          <p className="item-count">{data.carbohydrateCount}g</p>
          <p className="item-title">glucides</p>
        </div>
      </div>

      <div className="nutriment-item">
        <div className="img-lipide">
          <img src={lipide} alt="lipide-logo" />
        </div>
        <div className="infos">
          <p className="item-count">{data.carbohydrateCount}g</p>
          <p className="item-title">Lipides</p>
        </div>
      </div>
    </div>
  );
};
