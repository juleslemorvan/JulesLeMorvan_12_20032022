import React from "react";

export const UserInformations = ({ firstName }) => {
  return (
    <div>
      <h2 style={{ marginBlockStart: 0 }}>Bonjour {firstName}</h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};
