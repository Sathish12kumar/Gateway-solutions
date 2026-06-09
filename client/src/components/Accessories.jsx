import { useEffect } from "react";
import useCustom from "./useCustom";
import Products from "./Products";

const Accessories = () => {
  const { data, getProducts } = useCustom();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="laptop">
      <div className="session">
        <h1>Accessories session</h1>
      </div>
      <div className="lap-flex">
        {data?.map((val, idx) => (
          <Products val={val} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
