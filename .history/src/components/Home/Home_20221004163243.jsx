import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="filter">
        <div className="left-filters">
          <select id="category">
            <option value="Hoodies">Hoddies</option>
            <option value="Shirt">Shirt</option>
            <option value="Jeans">Jeans</option>
          </select>
          <select id="size" value="size"></select>
        </div>
        <div className="right-filters"></div>
      </div>
    </>
  );
};

export default Home;
