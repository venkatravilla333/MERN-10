import React, { useState } from 'react'
import Child from './Child'

function Parent() {

  var [x, setX] = useState()

  function test(data) {
    console.log(data)
    setX(data)
    // console.log('test')
  }
  return (
    <div>
      <h2>Parent </h2>
      <h2>Data from child : {x} </h2>
      <Child test={test} />
    </div>
  )
}

export default Parent