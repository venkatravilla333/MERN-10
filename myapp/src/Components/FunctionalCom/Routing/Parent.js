import React from 'react'
import './style.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import Products from './Products'
import Header from './Header'

function Parent() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/products' element={<Products/>}/>

        </Routes>
      </BrowserRouter>
      {/* <Home />
      <About/>
      <Profile />
      <Products/> */}

    </div>
  )
}

export default Parent