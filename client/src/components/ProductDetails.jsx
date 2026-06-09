import { useEffect, useState } from "react";
import "./prodetail.css";
import Products from "./Products";
import useCustom from "./useCustom";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const uId = localStorage.getItem("userid");
  const [quanity, setquanity] = useState(1);
  const { ids } = useParams();

  const { getProducts, data, addcart, getsinglepro, product } = useCustom();
  const cartBody = {
    user: uId,
    items: [
      {
        ...product,
        quantity: quanity,
      },
    ],
  };

  const removecart = () => {
    if (quanity <= 1) setquanity(1);
    else setquanity((val) => val - 1);
  };
  const addcount = () => {
    if (quanity >= product.stock) {
      setquanity(1);
    } else setquanity((prev) => prev + 1);
  };
  const addtocart = () => {
    addcart(cartBody);
  };

  useEffect(() => {
    getProducts();
    getsinglepro(ids);
    scrollTo(0, 0);
  }, [ids]);
  return (
    <div className="product-details">
      <div className="detail">
        <div className="imgs">
          <div className="main">
            <img src={product?.image?.[0]} alt="" />
          </div>
          <div className="mini-img">
            {product?.image?.map((val, idx) => (
              <img src={val} key={idx} />
            ))}
          </div>
        </div>
        <div className="content-pro">
          <div className="name">{product?.name}</div>
          <div className="rate"></div>
          <div className="price">
            <span>₹{product?.price}</span>
            <b>₹{product?.price + 1000}</b>
          </div>
          <p className="des">
            The MacBook Air with M2 chip delivers exceptional performance in an
            ultra-thin and lightweight design. It features a stunning Retina
            display with true-to-life colors, long battery life that lasts up to
            18 hours, and a silent fanless architecture. Ideal for students,
            developers, and professionals who need power and portability in one
            device. It supports advanced multitasking, smooth video editing, and
            seamless integration with the Apple ecosystem including iPhone and
            iPad.",
          </p>
          <div className="feature">
            <div className="head">Features</div>
            <ul>
              <li>
                <i className="fa-solid fa-square-check"></i>Bluetooth 5.3
              </li>
              <li>
                <i className="fa-solid fa-square-check"></i>Noise Cancellation
              </li>
              <li>
                <i className="fa-solid fa-square-check"></i>40-Hour Battery
              </li>
              <li>
                <i className="fa-solid fa-square-check"></i>Fast Charging
              </li>
              <li>
                <i className="fa-solid fa-square-check"></i>Built-in Microphone
              </li>
            </ul>
          </div>
          <div className="quantity">
            <h4>quantity</h4>
            <div className="btns">
              <button onClick={removecart}>
                <i className="fa-solid fa-minus"></i>
              </button>
              {quanity}
              <button onClick={addcount}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <button onClick={addtocart}>Add to cart</button>
        </div>
      </div>
      <div className="related">
        <h1>related products</h1>
        <div className="flex-box">
          {data.slice(1, 5).map((val, idx) => (
            <Products key={idx} val={val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
