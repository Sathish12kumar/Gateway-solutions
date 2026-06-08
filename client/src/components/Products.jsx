import { useNavigate } from "react-router-dom";
import "./products.css";
const Products = ({ val }) => {
  const changepath = useNavigate();

  const cartpro = () => {
    console.log("cart products");
  };
  const viewpro = () => {
    console.log("view products");
    changepath("/product-detail");
  };
  return (
    <div className="product-demo" onClick={() => viewpro()}>
      <img src={val?.image[0]} alt="" />
      <div className="info">
        <div className="category">
          <span>{val?.category}</span>
          <div className="price">₹ {val?.price}</div>
        </div>
        <div className="name">{val?.name}</div>
      </div>
      <div className="btns">
        <button onClick={() => cartpro()}>
          <i className="fa-solid fa-bag-shopping"></i>
        </button>
        <button onClick={() => viewpro()}>
          <i className="fa-solid fa-eye"></i>
        </button>
      </div>
    </div>
  );
};

export default Products;
