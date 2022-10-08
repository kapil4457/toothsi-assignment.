import React, { useContext } from "react";
import { Data } from "../Home/Home";

const Cart = () => {
  return (
    const temp = useContext(Data);
    <>
      <Data.Consumer>
        {(items) => {
          return <div>{items.}</div>;
        }}
      </Data.Consumer>
    </>
  );
};

export default Cart;
