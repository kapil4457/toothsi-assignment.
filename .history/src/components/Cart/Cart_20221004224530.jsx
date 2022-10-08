import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const items = JSON.parse(localStorage.getItem("CartItems"));
  return (
    <div>
      {items.length <= 0 ? (
        <div className="no-items">
          <h2>No items in the cart</h2>
          <button onClick={() => navigate("/")}>Return to Home Page</button>
        </div>
      ) : (
        <table>
          <tbody>
            <tr
              style={{ borderBottom: "1px solid gray" }}
              className="table-header"
            >
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>SubTotal</th>
            </tr>
            {items.map((item, i) => (
              <tr key={i}>
                <td className="name">
                  <img src={item.image} alt="" />
                  <div>{item.name}</div>
                </td>
                <td>
                  <div className="center">{item.price}</div>
                </td>
                <td>
                  <div className="center valChange">
                    <button
                      className="change"
                      onClick={() => {
                        var tempArr = JSON.parse(
                          localStorage.getItem("CartItems")
                        );

                        //If the quantity is equal to one
                        if (item.quantity == 1) {
                          const filtered = tempArr.filter((i) => {
                            return i.name != item.name;
                          });

                          localStorage.setItem(
                            "CartItems",
                            JSON.stringify(filtered)
                          );
                        }
                        //Else decrement the quantity
                        else {
                          const filtered = tempArr.filter((i) => {
                            if (i.name == item.name) {
                              i.quantity = i.quantity - 1;
                            }
                            return true;
                          });

                          localStorage.setItem(
                            "CartItems",
                            JSON.stringify(filtered)
                          );
                        }
                      }}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button className="change">+</button>
                  </div>
                </td>
                <td>
                  <div className="center">{item.price * item.quantity}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
