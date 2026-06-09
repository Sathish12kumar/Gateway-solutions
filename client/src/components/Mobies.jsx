import { useEffect } from "react";
import Products from "./Products";
import useCustom from "./useCustom";

const Mobies = () => {
  const { data, getProducts } = useCustom();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="laptop">
      <div className="session">
        <h1>Mobile session</h1>
      </div>
      <div className="lap-flex">
        {data?.map((val, idx) => (
          <Products val={val} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Mobies;
