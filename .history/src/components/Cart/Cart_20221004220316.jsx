import React, { useContext } from "react";
import { Data } from "../Home/Home";

const Cart = () => {
  const { array } = useContext(Data);
  console.log(typeof array);
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
