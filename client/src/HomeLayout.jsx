import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import { useState } from "react";

const HomeLayout = () => {
  const [cartpop, setcartpop] = useState(false);
  const [profilepop, setprofilepop] = useState(false);
  return (
    <div className="homelayout">
      <Navbar setcartpop={setcartpop} setprofilepop={setprofilepop} />
      {cartpop && <Cart setcartpop={setcartpop} />}
      {profilepop && <Profile setprofilepop={setprofilepop} />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
