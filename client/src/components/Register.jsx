import React, { useState } from "react";
import useCustom from "./useCustom";
import { Link } from "react-router-dom";

const Register = () => {
  const [userdt, setuserdt] = useState({
    email: "",
    password: "",
  });
  const { registerUser } = useCustom();
  const formsubmit = () => {
    registerUser(userdt);
  };
  return (
    <div className="authlayout">
      <div className="imgs"></div>
      <div className="content-form">
        <h1>Register form</h1>
        <div className="grid-con-form">
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
          <div className="link">
            Don't have an account? <Link to={"/login"}>Sign up.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
