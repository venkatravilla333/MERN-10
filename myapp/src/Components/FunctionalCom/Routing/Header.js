import React from 'react'
import './style.css'

function Header() {
  return (
    <div className='myheader'>
      <ul>
        <li> <a href="/home">Home</a> </li>
        <li> <a href="/about">About</a> </li>
        <li> <a href="/profile">Profile</a> </li>
        <li> <a href="/products">Products</a> </li> 
      </ul>
    </div>
  )
}

export default Header