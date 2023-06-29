import React from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {

 
  const handleSubmit = () => {};
  return (
    <div className={style.container}>
      <div className={style.left}></div>
      <div className={style.right}>
        <input type="text" placeholder="Enter Email..." />
        <input type="password" placeholder="Enter Password..." />
        <button>Login</button>
      </div>
      <p>Already have account? <Link to='/signup'>Signup</Link> </p>
    </div>
  );
};

export default Login;
