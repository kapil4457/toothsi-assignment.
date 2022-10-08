import React, { useContext } from "react";
import "./Cart.css";
const Cart = () => {
  const items = JSON.parse(localStorage.getItem("CartItems"));
  return (
    <div>
      {items.length <= 0 ? (
        <div className="no-items">
          <h2>No items in the cart</h2>
          <button>Return to Home Page</button>
        </div>
      ) : (
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
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
