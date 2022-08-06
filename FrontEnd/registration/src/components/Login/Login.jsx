import React from 'react'
import { useState } from 'react';
import './Login.css'
import axios from 'axios';
import Register from '../Register/Register';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  
  const navigate = useNavigate();

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

  const login = () => {
    axios.post("http://localhost:12345/login",user).then(res =>alert(res.data.message))
  }
  const handleRegister = () => {
   
    navigate("/register")
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
      <div className="button"  onClick={login} >Login</div>

      <div>or</div>

      <div className="button"  onClick={handleRegister} >Register</div>
    </div>
  );
}

export default Login
