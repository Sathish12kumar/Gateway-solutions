import "./App.css";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
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
      <Footer />
    </>
  );
}

export default App;
