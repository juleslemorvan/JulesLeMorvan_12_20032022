import React from "react";
import "./NavBar.css";
import arrow from "../../assets/svg/navbar2/arrow.svg";
import bonhomme from "../../assets/svg/navbar2/bonhomme.svg";
import nageur from "../../assets/svg/navbar2/nageur.svg";
import velo from "../../assets/svg/navbar2/velo.svg";

export const NavBar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbar-item ">
        <img src={bonhomme} alt="logo bonhomme" />
      </div>
      <div className="navbar-item">
        <img src={nageur} alt="logo nageur" />
      </div>
      <div className="navbar-item">
        <img src={velo} alt="logo velo" />
      </div>
      <div className="navbar-item">
        <img src={arrow} alt="logo arrow" />
      </div>
      <p className="corporight">Copiryght, SportSee 2020</p>
    </div>
  );
};
