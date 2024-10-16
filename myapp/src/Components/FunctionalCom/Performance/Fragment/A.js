import React from 'react'

function A() {
  var products = [{id: 1, pname: 'apple'}, {id: 2, pname: 'banana'}, {id: 3, pname: 'mango'}, {id: 4, pname: 'mango'}]
  return (
    // <div>
    //   <h2>Hello sachin</h2>
    //   <h2>Hello kohli</h2>
    // </div>
    // <>
    //   <h2>Hello sachin</h2>
    //   <h2>Hello kohli</h2>
    // </>
    // <React.Fragment >
    //   <h2>Hello sachin</h2>
    //   <h2>Hello kohli</h2>
    // </React.Fragment>
    
    <React.Fragment>
      {
        products.map((product) => {
          return <React.Fragment key={product.id}>
                 <h2>Id: {product.id}</h2> 
                 <h3>name: {product.pname}</h3>
                </React.Fragment>
        })
      }
   </React.Fragment>
    
  )
}

export default A