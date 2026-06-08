import { useEffect, useState } from "react";
import "./prodetail.css";
import Products from "./Products";
import useCustom from "./useCustom";

const ProductDetails = () => {
  const { getProducts, data, addcart } = useCustom();
  const [quanity, setquanity] = useState(1);
  const target = 9;

  const removecart = () => {
    if (quanity <= 1) setquanity(1);
    else setquanity((val) => val - 1);
  };
  const addcount = () => {
    if (quanity >= target) {
      setquanity(1);
    } else setquanity((prev) => prev + 1);
  };
  const addtocart = () => {
    // addcart()
    console.log("added to cart");
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-details">
      <div className="detail">
        <div className="imgs">
          <div className="main">
            <img
              src="https://images.unsplash.com/photo-1660808043575-7b11d477c337?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmVzfGVufDB8MnwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="mini-img">
            <img
              src="https://images.unsplash.com/photo-1592813630413-1124aa567638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmVzfGVufDB8MnwwfHx8MA%3D%3D"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1592813630413-1124aa567638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmVzfGVufDB8MnwwfHx8MA%3D%3D"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1592813630413-1124aa567638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmVzfGVufDB8MnwwfHx8MA%3D%3D"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1592813630413-1124aa567638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmVzfGVufDB8MnwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="content-pro">
          <div className="name">name</div>
          <div className="rate"></div>
          <div className="price">
            <span>₹600</span>
            <b>₹789</b>
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
              <button onClick={addcount}>
                <i className="fa-solid fa-plus"></i>
              </button>
              {quanity}
              <button onClick={removecart}>
                <i className="fa-solid fa-minus"></i>
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
