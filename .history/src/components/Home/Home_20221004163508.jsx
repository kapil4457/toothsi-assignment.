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
          <select id="size">
            <option value="" selected hidden>
              Size
            </option>

            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div className="right-filters"></div>
      </div>
    </>
  );
};

export default Home;
