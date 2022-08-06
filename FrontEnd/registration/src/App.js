import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user , setLoginUser] = useState()
  return (
    <div className="App">
     
      <Routes>
        <Route exact path="/" element={<Homepage />}>  </Route>
        {/* <Route exact path="/">{ user && user._id? <Homepage/> : <login/>}</Route> */}



        <Route  path="/login" element={<Login />}></Route>
        <Route  path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
