import React, { useContext } from "react";

const Cart = () => {
  const items = localStorage.getItem("CartItems");
  return <div>{items}</div>;
};

export default Cart;
