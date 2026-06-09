import { useNavigate } from "react-router-dom";
import "./products.css";
import useCustom from "./useCustom";
const Products = ({ val }) => {
  const uId = localStorage.getItem("userid");
  const changepath = useNavigate();
  const { addcart, product } = useCustom();

  const cartpro = (data) => {
    addcart({
      user: uId,
      items: [...product, data],
    });
  };
  const viewpro = () => {
    console.log("view products");
    changepath(`/product-detail/${val?._id}`);
  };

  return (
    <div className="product-demo">
      <img src={val?.image[0]} alt="" />
      <div className="info">
        <div className="category">
          <span>{val?.category}</span>
          <div className="price">₹ {val?.price}</div>
        </div>
        <div className="name" onClick={() => viewpro()}>
          {val?.name}
        </div>
      </div>
      <div className="btns">
        <button onClick={() => cartpro(val)}>
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
