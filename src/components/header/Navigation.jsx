import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
        <ul className='nav'>
          {/* <li><Link to="">Home</Link></li>
          <li><Link to = "/banner">About us</Link></li> */}
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">sign Up</a></li>
        </ul>
    </div>
  )
}

export default Navigation