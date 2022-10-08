import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="filter">
        <div className="left-filters">
          <select id="">
            <option value="Hoodies">Hoddies</option>
            <option value="Shirt">Shirt</option>
            <option value="Jeans">Jeans</option>
          </select>
        </div>
        <div className="right-filters"></div>
      </div>
    </>
  );
};

export default Home;
