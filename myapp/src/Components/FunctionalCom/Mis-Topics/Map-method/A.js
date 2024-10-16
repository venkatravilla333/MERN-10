import React, { useState } from 'react'

function A() {
  var [products, setProducts] = useState([
    { pName: 'apple', pPrice: 200, pQty: 20 },
    { pName: 'Banana', pPrice: 100, pQty: 10 },
    { pName: 'Grape', pPrice: 300, pQty: 30 },
    { pName: 'Papaya', pPrice: 400, pQty: 40 },
    { pName: 'Mango', pPrice: 500, pQty: 50 },
    { pName: 'potato', pPrice: 600, pQty: 30 }
  ]) 
  
  return (
    <>
      {/* <h2>name: {products[0].pName}</h2>
      <h2>price: {products[0].pPrice}</h2>
      <h2>qty: {products[0].pQty}</h2>
      <h2>name: {products[1].pName}</h2>
      <h2>price: {products[1].pPrice}</h2>
      <h2>qty: {products[1].pQty}</h2>
      <h2>name: {products[2].pName}</h2>
      <h2>price: {products[2].pPrice}</h2>
      <h2>qty: {products[2].pQty}</h2>
      <h2>name: {products[3].pName}</h2>
      <h2>price: {products[3].pPrice}</h2>
      <h2>qty: {products[3].pQty}</h2>
      <h2>name: {products[4].pName}</h2>
      <h2>price: {products[4].pPrice}</h2>
      <h2>qty: {products[4].pQty}</h2>
       */}
      {
        products.map((product) => {
          return <>
            <h2>name: {product.pName}</h2>  
          </>
        })
      }
    </>
  )
}

export default A