import { useState } from "react";
import "./cart.css";
const Cart = ({ setcartpop }) => {
  const [quanity, setquanity] = useState(1);
  const target = 9;

  const removecart = () => {
    if (quanity <= 1) setquanity(1);
    else setquanity((val) => val - 1);
  };
  const addcart = () => {
    if (quanity >= target) {
      setquanity(1);
    } else setquanity((prev) => prev + 1);
  };

  const deletecart = () => {
    console.log("deleted");
  };

  const ordered = () => {
    console.log("ordered");
  };

  return (
    <div className="cart-sec">
      <div className="title">
        <h1>Your cart</h1>
        <button onClick={() => setcartpop((prev) => !prev)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="content-cart">
        <div className="carts">
          <img src="" alt="" />
          <div className="info">
            <div className="name">name</div>
            <div className="cost">₹ 400</div>
            <div className="quanity">
              <button onClick={addcart}>+</button>
              {quanity}
              <button onClick={removecart}>-</button>
            </div>
          </div>
          <button onClick={deletecart}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
      <div className="bottom">
        <div className="flex-box">
          <div className="info">
            <h4>Estimated total</h4>
            <p>Taxes, discounts and shipping calculated at checkout.</p>
          </div>
          <div className="price">₹ 400</div>
        </div>
      </div>
      <div className="btn">
        <button onClick={ordered}>
          <i className="fa-solid fa-cart-shopping"></i>
          check out
        </button>
      </div>
    </div>
  );
};

export default Cart;
