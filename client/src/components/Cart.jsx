import { useState } from "react";
import "./cart.css";
import { useEffect } from "react";
import useCustom from "./useCustom";
const Cart = ({ setcartpop }) => {
  const uId = localStorage.getItem("userid");
  const { getCart, catrdt, deleteCart, updateCart } = useCustom();

  const deletecart = (id) => {
    deleteCart(id);
  };

  const ordered = () => {
    console.log("ordered");
  };

  useEffect(() => {
    getCart(uId);
  });

  return (
    <div className="cart-sec">
      <div className="title">
        <h1>Your cart</h1>
        <button onClick={() => setcartpop((prev) => !prev)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="content-cart">
        {catrdt.map((val) =>
          val.items.map((dt, idx) => (
            <div className="carts" key={idx}>
              <img src={dt.image[0]} alt="" />
              <div className="info">
                <div className="name">{dt.name}</div>
                <div className="cost">₹ {dt.price}</div>
                <div className="quanity">
                  <button
                    onClick={async () => {
                      await updateCart({
                        userId: uId,
                        productId: dt._id,
                        quantity: dt.quantity + 1,
                      });
                      getCart(uId);
                    }}
                  >
                    +
                  </button>
                  {dt.quantity}
                  <button
                    onClick={async () => {
                      await updateCart({
                        userId: uId,
                        productId: dt._id,
                        quantity: Math.max(dt.quantity - 1, 1),
                      });
                      getCart(uId);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <button onClick={() => deletecart(val._id)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          )),
        )}
      </div>
      <div className="bottom">
        <div className="flex-box">
          <div className="info">
            <h4>Estimated total</h4>
            <p>Taxes, discounts and shipping calculated at checkout.</p>
          </div>
          <div className="price">
            ₹{" "}
            {catrdt?.reduce(
              (sum, cart) =>
                sum +
                cart.items.reduce(
                  (s, item) => s + item.price * item.quantity,
                  0,
                ),
              0,
            )}
          </div>
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
