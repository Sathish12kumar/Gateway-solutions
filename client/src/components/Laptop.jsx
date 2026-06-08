import React, { useEffect } from "react";
import useCustom from "./useCustom";
import Products from "./Products";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Laptop = () => {
  const { data, getProducts } = useCustom();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="laptop">
      <Navbar />
      <div className="session">
        <h1>laptop session</h1>
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

export default Laptop;
