import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const items = JSON.parse(localStorage.getItem("CartItems"));
  return (
    <div>
      {items.length <= 0 ? (
        <div className="no-items">
          <h2>No items in the cart</h2>
          <button onClick={() => navigate("/")}>Return to Home Page</button>
        </div>
      ) : (
        <table>
          <tbody>
            <tr
              style={{ borderBottom: "1px solid gray" }}
              className="table-header"
            >
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>SubTotal</th>
            </tr>
            {items.map((item, i) => (
              <tr key={i}>
                <th>
                  <img src={item.image} alt="" />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
