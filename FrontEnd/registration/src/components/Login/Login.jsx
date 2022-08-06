import React from 'react'
import { useState } from 'react';
import './Login.css'
const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password:""
  })

  const handleChange = (e) => {
   
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value
    })
  }
  return (
    <div className="login">
      <h1>Login</h1>
      {console.log("user",user)}
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter Your Email"
      />
      <input
        name="password"
        value={user.password}
        onChange={handleChange}
        type="password"
        placeholder="Enter Your Password"
      />
      <div className="button">Login</div>

      <div>or</div>

      <div className="button">Register</div>
    </div>
  );
}

export default Login
