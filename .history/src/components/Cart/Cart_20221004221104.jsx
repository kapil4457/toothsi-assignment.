import React, { useContext } from "react";

const Cart = () => {
  const items = JSON.parse(localStorage.getItem("CartItems"));
  return <div>{items.length <= 0 ? <div></div> : <div></div>}</div>;
};

export default Cart;
