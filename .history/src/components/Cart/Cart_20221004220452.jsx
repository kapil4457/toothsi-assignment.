import React, { useContext } from "react";
import { Data } from "../Home/Home";

const Cart = () => {
  const array = useContext(Data);
  console.log(array[0].name);
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
