import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="headerContainer">
      <p>Logo</p>
      <ul className="listItem">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
};
