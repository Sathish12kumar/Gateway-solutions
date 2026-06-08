import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/AuthLayout.jsx";
import Register from "./components/Register.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Laptop from "./components/Laptop.jsx";
import Mobies from "./components/Mobies.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/login" element={<AuthLayout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-detail" element={<ProductDetails />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/mobile" element={<Mobies />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>,
);
