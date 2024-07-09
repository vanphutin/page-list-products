import React from "react";

const Feature = ({ handleSortAsc, handleSortDesc }) => {
  return (
    <div style={{ with: "100%" }}>
      <div className="sort">
        Sort by price <button onClick={handleSortAsc}>ASC</button>{" "}
        <button onClick={handleSortDesc}>DESC</button>
      </div>
    </div>
  );
};

export default Feature;
