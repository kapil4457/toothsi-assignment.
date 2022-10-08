import React, { useContext } from "react";
import "./Cart.css";
const Cart = () => {
  const items = JSON.parse(localStorage.getItem("CartItems"));
  return <div>{items.length <= 0 ? <div>Yes</div> : <div>No</div>}</div>;
};

export default Cart;
