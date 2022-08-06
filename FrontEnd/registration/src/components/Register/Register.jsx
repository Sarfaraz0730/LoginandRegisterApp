import React from "react";
import axios from 'axios'
import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
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
      [name]: value,
    });
  };
  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && (password === reEnterPassword) ) {
    
      axios.post("http://localhost:12345/register", user).then(res => console.log(res))
      navigate("/login")
    } else {
      alert("invalid input")
    }

  }
  const handleLogin = () => {
    navigate('/login')
  }
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
      <div className="button"  onClick={register}>Register</div>

      <div>or</div>
      <div className="button"  onClick={handleLogin}>Login</div>
    </div>
  );
};

export default Register;
