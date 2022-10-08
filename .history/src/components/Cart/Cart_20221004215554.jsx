import React, { useContext } from "react";
import { Data } from "../Home/Home";

const Cart = () => {
    const temp = useContext(Data);
  return (
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
