import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  var [items, setItems] = useState(
    JSON.parse(localStorage.getItem("CartItems"))
  );
  useEffect(() => {}, [total, items]);
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
                        //If the quantity is equal to one
                        if (item.quantity == 1) {
                          const filtered = items.filter((i) => {
                            console.log(i.name != item.name);
                            return i.name != item.name;
                          });

                          items = filtered;
                        }
                        //Else decrement the quantity
                        else {
                          const filtered = items.filter((i) => {
                            if (i.name == item.name) {
                              i.quantity = i.quantity - 1;
                            }
                          });

                          items = filtered;
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
