import React from 'react'
import './style.css'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import Products from './Products'
import Header from './Header'
import ProductDetails from './ProductDetails'
import PagenotFound from './PagenotFound'
import Footer from './Footer'
// import HeavyDtata from './HeavyDtata'

var Heavy = React.lazy(()=> import('./HeavyDtata'))

function Parent() {
  var url = useLocation()
  console.log(url)
  return (
    <div>
     {url.pathname !== '/about' && <Header/>}
      {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        <Route path='/heavy' element={
          <React.Suspense fallback = 'Loading'>
            <Heavy />
          </React.Suspense>
        } />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<PagenotFound/>}/>
          <Route path='/products' element={<Products/>}>
            <Route path=':id' element={<ProductDetails/>}/>
          </Route>
        </Routes>
     {url.pathname !== '/about' && <Footer/>}
        {/* <Footer/> */}
      {/* <Home />
      <About/>
      <Profile />
      <Products/> */}

    </div>
  )
}

export default Parent