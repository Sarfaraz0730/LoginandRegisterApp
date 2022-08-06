import React from "react";
import { useState } from "react";
import "./Register.css";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
   
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]:value
    })
  };
  return (
    <div className="register">
      <h1>Register</h1>
      {console.log("user", user)}
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter Your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter Your Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-Enter  Password"
        onChange={handleChange}
      />
      <div className="button">Register</div>

      <div>or</div>
      <div className="button">Login</div>
    </div>
  );
};

export default Register;
