import { Link } from "react-router-dom";
import "./App.css";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import FQA from "./components/FQA";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import useCustom from "./components/useCustom";
import { useEffect } from "react";

function App() {
  const { getProducts, getCart } = useCustom();
  // console.log(getProducts);
  useEffect(() => {
    getCart();
  });

  return (
    <>
      <Navbar />
      <Home />
      <Brands />
      <div className="grid-con">
        <div className="shops">
          <div className="content">
            <h2>Free shopping</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              exercitationem beatae, possimus excepturi culpa ratione ullam et
              nostrum error laudantium!
            </p>
            <button>shop now</button>
          </div>
        </div>
        <div className="phone">
          <div className="content">
            <h1>Black Friday clearence</h1>
            <p>Up to 35% off</p>
            <button>shop now</button>
          </div>
        </div>
        <div className="headset">
          <div className="content">
            <h1>First purchase 20% Discount</h1>
            <p>Use SATHISH code</p>
            <button>shop now</button>
          </div>
        </div>
      </div>
      <Products />
      <div className="ads">
        <div className="content">
          <h2>Free shopping</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            exercitationem beatae, possimus excepturi culpa ratione ullam et
            nostrum error laudantium!
          </p>
          <button>shop now</button>
        </div>
      </div>
      <Products />
      <FQA />
      <div className="tech-talk">
        <div className="title">
          <div className="block-title">
            <h1>tech talk</h1>
            <p>
              Explore the latest trends in technology, programming, artificial
              intelligence, web development, cybersecurity, <br /> cloud
              computing, and software engineering.
            </p>
          </div>
          <div className="btn">
            <Link to="/">
              view all <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
        </div>
        <div className="grid-tech">
          <div className="main">
            <img
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHRlY2h8ZW58MHx8MHx8fDI%3D"
              alt=""
            />
            <div className="content">
              <h1>How AI is Transforming E-Commerce</h1>
              <p>
                Artificial Intelligence is helping online stores deliver
                personalized product recommendations, automate customer support,
                and improve shopping experiences through smarter data analysis.
              </p>
              <div className="date">
                <span>gadget</span>June 06, 2026
              </div>
            </div>
          </div>
          <div className="sub">
            <span>review</span>
            <h2>The Future of Mobile Commerce</h2>
            <div className="date">May 30, 2026</div>
          </div>
          <div className="sub">
            <span>tips</span>
            <h2>Boosting Sales with Personalized Shopping</h2>
            <div className="date">Apr 30, 2026</div>
          </div>
          <div className="sub">
            <span>trend</span>
            <h2>Why Fast Delivery Matters in Online Retail</h2>
            <div className="date">May 08, 2026</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
