import React from "react";
import { Data } from "../Home/Home";

const Cart = () => {
  return (
    <>
      <Data.Consumer>
        {(items) => {
          return <div>items</div>;
        }}
      </Data.Consumer>
    </>
  );
};

export default Cart;
