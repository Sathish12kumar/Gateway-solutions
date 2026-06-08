import { useEffect, useState } from "react";
import "./home.css";
const Home = () => {
  const [count, setcount] = useState(0);

  const nextfun = () => {
    setcount((prevCount) => (prevCount < 2 ? prevCount + 1 : 0));
  };

  const prevfun = () => {
    setcount((prevCount) => (prevCount > 0 ? prevCount - 1 : 2));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextfun();
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="home-sec">
      <div className="slider-outer">
        <div
          className="slider-flex"
          style={{
            transform: `translateX(-${(count * 100) / 3}%)`,
          }}
        >
          <div className="slider" style={{ backgroundColor: "#ee7d3b" }}>
            <img
              src="https://images.unsplash.com/photo-1757709608566-4b9fd41a7af5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="content">
              <h1 className="name">Headphone</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut in
                quas cum tenetur commodi. Repellendus quaerat nihil facere quae
                ab provident, quidem consequatur nam culpa, nemo quam esse
                dolores aliquam. quas cum tenetur commodi. Repellendus quaerat
                nihil facere quae ab provident, quidem consequatur nam culpa,
                nemo quam esse dolores aliquam.
              </p>
              <button>shop now</button>
            </div>
          </div>
          <div className="slider" style={{ backgroundColor: "#fee2d4" }}>
            <img
              src="https://images.unsplash.com/photo-1700087151960-178ea946e608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGhlYWRwaG9uZXN8ZW58MHwwfDB8fHww"
              alt=""
            />
            <div className="content">
              <h1 className="name">Headphone</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut in
                quas cum tenetur commodi. Repellendus quaerat nihil facere quae
                ab provident, quidem consequatur nam culpa, nemo quam esse
                dolores aliquam. quas cum tenetur commodi. Repellendus quaerat
                nihil facere quae ab provident, quidem consequatur nam culpa,
                nemo quam esse dolores aliquam.
              </p>
              <button>shop now</button>
            </div>
          </div>
          <div className="slider" style={{ backgroundColor: "#f6f6f8" }}>
            <img
              src="https://i.pinimg.com/736x/38/65/94/386594135756b1c8572b20991e9dd963.jpg"
              alt=""
            />
            <div className="content">
              <h1 className="name">Headphone</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut in
                quas cum tenetur commodi. Repellendus quaerat nihil facere quae
                ab provident, quidem consequatur nam culpa, nemo quam esse
                dolores aliquam. quas cum tenetur commodi. Repellendus quaerat
                nihil facere quae ab provident, quidem consequatur nam culpa,
                nemo quam esse dolores aliquam.
              </p>
              <button>shop now</button>
            </div>
          </div>
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
