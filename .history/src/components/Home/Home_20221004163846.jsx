import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="filter">
        <div className="left-filters">
          <select id="category">
            <option value="" selected hidden>
              Category
            </option>
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
          <button className="reset-btn">Reset</button>
        </div>
        <div className="right-filters">
          <div>Search :</div>
          <input type="text" />
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Home;
