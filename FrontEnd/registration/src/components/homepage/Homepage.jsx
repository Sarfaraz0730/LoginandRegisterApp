import React from 'react'
import { useNavigate } from 'react-router-dom'
import NewGraph from '../NewGraph'
import Register from '../Register/Register'
import './Homepage.css'
const Homepage = () => {
   const navigate = useNavigate();
 
  const register = () => {
    navigate('/register')
  }
  return (
    <div className='homepage'>
          <h1></h1>
          
      <NewGraph />
       <button  className='button' onClick={register}>Register</button>
    </div>
  )
}

export default Homepage
