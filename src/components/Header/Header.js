import React from "react";
import "./Header.css";
import logo from "../../assets/svg/logo.svg";

export const Header = () => {
  return (
    <div className="headerContainer">
      <img src={logo} alt="logo" />
      <ul className="listItem">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
};
