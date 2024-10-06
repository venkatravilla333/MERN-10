import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
 var [y, setY] = useState()
  function test(data) {
    console.log(data)
    setY(data)
    
  }
  return (
    <div>
      <h3>Parent:</h3>
      <Child1 test={test} />
      <Child2 data = {y} />
    </div>
  )
}

export default Parent