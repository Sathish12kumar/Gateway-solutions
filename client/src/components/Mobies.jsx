import { useEffect } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import Footer from "./Footer";
import useCustom from "./useCustom";

const Mobies = () => {
  const { data, getProducts } = useCustom();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="laptop">
      <Navbar />
      <div className="session">
        <h1>Mobile session</h1>
      </div>
      <div className="lap-flex">
        {data?.map((val, idx) => (
          <Products val={val} key={idx} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Mobies;
