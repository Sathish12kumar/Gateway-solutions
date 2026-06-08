import React, { useState } from "react";

const useCustom = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [data, setdata] = useState([]);

  const addUser = async (dt) => {
    try {
      fetch(`${url}/user/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dt),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (id, dt) => {
    try {
      fetch(`${url}/user/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dt),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteuser = (id) => {
    try {
      fetch(`${url}/user/drop/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = (dt) => {
    try {
      fetch(`${url}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dt),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.msg == "success") {
            localStorage.setItem("name", data.user.name);
            localStorage.setItem("mail", data.user.email);
            localStorage.setItem("userid", data.user._id);
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  const getProducts = async () => {
    try {
      fetch(`${url}/product`)
        .then((res) => res.json())
        .then((dt) => setdata(dt));
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = (dt) => {
    try {
      fetch(`${url}/product/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dt),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = (path, dt) => {
    try {
      fetch(`${url}/product/update/${path}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dt),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = (id) => {
    try {
      fetch(`${url}/product/drop/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const getCart = () => {
    try {
      fetch(`${url}/cart`)
        .then((res) => res.json())
        .then((dt) => console.log(dt));
    } catch (error) {
      console.log(error);
    }
  };
  const addcart = (dt) => {
    try {
      fetch(`${url}/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dt),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return {
    addUser,
    updateUser,
    deleteuser,
    registerUser,
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getCart,
    addcart,
    data,
  };
};

export default useCustom;
