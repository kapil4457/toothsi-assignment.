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
        <table className="cart-table">
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
            {items.map((item, idx) => (
              <tr key={idx} className="product-row">
                <td className="name">
                  <img src={item.image} alt="" />
                  <div>{item.name}</div>
                </td>
                <td>
                  <div className="center">$ {item.price}</div>
                </td>
                <td>
                  <div className="center valChange">
                    <button
                      className="change"
                      onClick={() => {
                        //remove element
                        if (item.quantity <= 1) {
                          const filtered = items.filter((it) => {
                            return it.name != item.name;
                          });
                          setItems(JSON.stringify(filtered));
                          items = filtered;
                        } else {
                          item.quantity = item.quantity - 1;
                        }
                        setTotal(total - item.price);
                      }}
                    >
                      -
                    </button>
                    <div>{item.quantity}</div>
                    <button
                      className="change"
                      onClick={() => {
                        item.quantity = item.quantity + 1;
                        setTotal(total + item.price);
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <div className="center">$ {item.price * item.quantity}</div>
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
