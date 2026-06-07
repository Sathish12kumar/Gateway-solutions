import "./App.css";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <>
      {/* <h1>hello wrold</h1> */}
      <Navbar />
      <Home />
      <Brands />
      <Products />
      <Footer />
    </>
  );
}

export default App;
