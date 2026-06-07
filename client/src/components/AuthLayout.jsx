import React, { useState } from "react";
import useCustom from "./useCustom";

const AuthLayout = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const { addUser, registerUser } = useCustom();
  const [userdt, setuserdt] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(url);

  const formsubmit = () => {
    console.log(userdt);
    // addUser(userdt);
    registerUser(userdt);
  };
  return (
    <div className="authlayout">
      <h1>login form</h1>
      {/* <form action=""> */}
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => setuserdt((val) => ({ ...val, name: e.target.value }))}
      />
      <input
        type="email"
        placeholder="enter email"
        onChange={(e) =>
          setuserdt((val) => ({ ...val, email: e.target.value }))
        }
      />
      <input
        type="password"
        placeholder="enter password"
        onChange={(e) =>
          setuserdt((val) => ({ ...val, password: e.target.value }))
        }
      />
      <button onClick={formsubmit}>submit</button>
      {/* </form> */}
    </div>
  );
};

export default AuthLayout;
