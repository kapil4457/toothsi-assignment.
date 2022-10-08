import React from "react";
import { Data } from "../Home/Home";

const Cart = () => {
  return (
    <Data.Consumer>
      <div>Cart</div>;
    </Data.Consumer>
  );
};

export default Cart;
