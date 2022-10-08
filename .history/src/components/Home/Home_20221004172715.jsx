import React from "react";
import "./Home.css";
import ReplayIcon from "@mui/icons-material/Replay";
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
          <button className="reset-btn">
            <ReplayIcon />
            <p>Reset</p>
          </button>
        </div>
        <div className="right-filters">
          <div className="search-bar">
            <span>Search :</span>
            <input type="text" />
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="main-page">
        <table>
          <tbody>
            <tr style={{ borderBottom: "1px solid black" }}>
              <th style={{ width: "10%" }}>Images</th>
              <th style={{ width: "15%" }}>Name</th>
              <th style={{ width: "10%" }}>Color</th>
              <th style={{ width: "10%" }}>Stock</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "25%" }}>Buy</th>
            </tr>
            {/* <div></div> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
