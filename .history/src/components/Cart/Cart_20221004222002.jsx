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
              <th className="left-shift">Images</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {items.map((i, index) =>(
                    <tr key={idx}>
                    <th className="product-image left-shift">
                      <img src={i.image} alt={i.image} />
                    </th>
                    <th className="blue-underline">{i.name}</th>
                    <th className="blue-underline">{i.color}</th>
                    
                  
            };
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
