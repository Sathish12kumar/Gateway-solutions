import { useState } from "react";
import "./home.css";
const Home = () => {
  const [count, setcount] = useState(0);

  const nextfun = () => {
    if (count < 2) {
      setcount(count + 1);
    } else setcount(0);
  };

  const prevfun = () => {
    if (count > 0) {
      setcount(count - 1);
    } else setcount(2);
  };

  return (
    <div className="home-sec">
      <div className="slider-outer">
        <div
          className="slider-flex"
          style={{
            transform: `translateX(-${(count * 100) / 3}%)`,
          }}
        >
          <div className="slider">slider 1</div>
          <div className="slider">slider 2</div>
          <div className="slider">slider 3</div>
        </div>
      </div>
      <div className="btns">
        <button onClick={prevfun}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        {count + 1} / 3
        <button onClick={nextfun}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;
