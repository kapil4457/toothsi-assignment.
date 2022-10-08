import React, { useEffect, useState } from "react";
import "./Home.css";
import ReplayIcon from "@mui/icons-material/Replay";
import { items } from "../../items";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const Home = () => {
  const [itemsAddedToCart, setItemsAddedToCart] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterSize, setFilterSize] = useState("");
  const [searchItem, setSearchItem] = useState("");

  const filtering = (val) => {
    if (filterCategory === "" && filterSize === "" && searchItem === "") {
      return true;
    }
    if (searchItem !== "") {
      if (val.name.includes(searchItem)) {
        return true;
      } else {
        return false;
      }
    }

    if (filterCategory !== "") {
      if (val.category === filterCategory) {
        if (filterSize !== "") {
          if (val.size === filterSize) {
            return true;
          } else {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="filter">
        <div className="left-filters">
          <select
            id="category"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="" selected hidden>
              Category
            </option>
            <option value="Hoddies">Hoddies</option>
            <option value="T-Shirt">T-Shirt</option>
            <option value="Jeans">Jeans</option>
          </select>
          <select
            id="size"
            value={filterSize}
            onChange={(e) => setFilterSize(e.target.value)}
          >
            <option value="" selected hidden>
              Size
            </option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          <button
            className="reset-btn"
            onClick={() => {
              setFilterSize("");
              setFilterCategory("");
            }}
          >
            <ReplayIcon />
            <p>Reset</p>
          </button>
        </div>
        <div className="right-filters">
          <div className="search-bar">
            <span>Search :</span>
            <input
              type="text"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="main-page">
        <table>
          <tbody>
            <tr
              style={{ borderBottom: "1px solid gray" }}
              className="table-header"
            >
              <th className="left-shift">Images</th>
              <th>Name</th>
              <th>Color</th>
              <th>Stock</th>
              <th>Price</th>
              <th style={{ width: "15%" }} className="right-shift">
                Buy
              </th>
            </tr>
            {items.filter(filtering).map((i, idx) => (
              <tr key={idx}>
                <th className="product-image left-shift">
                  <img src={i.image} alt={i.image} />
                </th>
                <th className="blue-underline">{i.name}</th>
                <th className="blue-underline">{i.color}</th>
                <th>
                  {i.quantity > 0 ? (
                    <div
                      style={{
                        color: "green",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <SentimentSatisfiedAltIcon />
                      In Stock
                    </div>
                  ) : (
                    <div
                      style={{
                        color: "red",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <SentimentVeryDissatisfiedIcon />
                      Out of Stock
                    </div>
                  )}
                </th>
                <th>{i.price}</th>
                <th className="right-shift">
                  <div className="buyNow">
                    <div>
                      <input
                        type="number"
                        placeholder="0"
                        id={`quantity${idx}`}
                      />
                      <div>
                        <ShoppingCartIcon />
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      id={`checkbox${idx}`}
                      onClick={() => {
                        if (
                          document.getElementById(`checkbox${idx}`).checked ===
                          true
                        ) {
                          console.log(`Checked ${idx}`);
                        } else {
                          const temp = {
                            name: i.name,
                            price: i.price,
                            size: i.size,
                            image: i.image,
                            quantity: document.getElementById(`quantity${idx}`),
                          };

                          await itemsAddedToCart.push(temp);
                        }
                      }}
                    />
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;