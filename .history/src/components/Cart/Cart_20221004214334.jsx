import React from "react";
import { Data } from "../Home/Home";

const Cart = () => {
  return (
    <Data.Consumer>
      {(items) => {
        return items;
      }}
    </Data.Consumer>
    //   <div>Cart</div>;
  );
};

export default Cart;
