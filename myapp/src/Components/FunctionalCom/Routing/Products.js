import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style.css'

function Products() {
  var [products, setProducts] = useState([
    {
      pId: 1,
      pName: 'apple',
      pPrice: 100
    },
    {
      pId: 2,
      pName: 'banana',
      pPrice: 50
    },
    {
      pId: 3,
      pName: 'grape',
      pPrice: 150
    },
    {
      pId: 4,
      pName: 'orange',
      pPrice: 200
    },
  ])
  return (
    <div>
      <ul  className='products'>
        {
          products.map((product) => {
            console.log(product)
            return <li> <Link to = {`/products/${product.pId}`}>{product.pName}</Link> </li>
          })
        }
        {/* <li> <a href="/products/1">Apple</a> </li>
        <li> <a href="/products/2">Banana</a> </li>
        <li> <a href="/products/3">Grape</a> </li>
        <li> <a href="/products/4">Orange</a> </li>  */}
      </ul>
        <Outlet/>
       
    </div>
  )
}

export default Products