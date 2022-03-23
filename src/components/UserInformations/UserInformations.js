import React from "react";

export const UserInformations = ({ firstName }) => {
  return (
    <div>
      <h2 style={{ marginBlockStart: 0 }}>Bonjour {firstName}</h2>
      <p>Bienvenue, bravo à vous !</p>
    </div>
  );
};
