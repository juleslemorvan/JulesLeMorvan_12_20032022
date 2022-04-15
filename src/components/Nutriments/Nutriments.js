import React from "react";
// import { getUserAverageSession } from "../../api/routes";
// import { config } from "../../const";
import "./Nutriments.css";
import energy from "../../assets/svg/energy.svg";

/* 


const data =  {
    calorieCount: 123,
    lipid: 434,
    protein: 484,
    carbs: 5849
}


const nutrimentsMap = {
    calorieCount: {
        icon: ,
        unit: ,
        name: "Calories"
    }
    calorieCount: {
        icon: ,
        unit: ,
        name: "Calories"
    }
    calorieCount: {
        icon: ,
        unit: ,
        name: "Calories"
    }
    calorieCount: {
        icon: ,
        unit: ,
        name: "Calories"
    }
}

const calories = nutrimentsMap['calorieCount']

*/

export const Nutriments = ({ data }) => {
  console.log(data);
  return (
    <div className="nutriments-container">
      <div className="calorie">
        <div className="img-calorie">
          <img src={energy} alt="energy logo" className="energy-logo" />
        </div>
        <div className="infos">
          <p className="calorie-count">
            {data.calorieCount.toLocaleString("en-US")}kCal
          </p>
          <p>Calories</p>
        </div>
      </div>
      <div className="protéine"></div>
      <div className="glucide"></div>
      <div className="lipide"></div>
    </div>
  );
};
