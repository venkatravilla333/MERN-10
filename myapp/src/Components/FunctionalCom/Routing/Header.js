import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='myheader'>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li> <Link to="/profile">Profile</Link> </li>
        <li> <Link to="/products">Products</Link> </li> 
      </ul>
    </div>
  )
}

export default Header