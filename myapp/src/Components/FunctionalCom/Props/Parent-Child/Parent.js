import React from 'react'
import Child from './Child'

function Parent() {
  var x = 'sachin'
  return (
    <div>
      <h2>parent : {x}</h2>
      <Child data = {x} />
      {/* {Child(x)} */}
    </div>
  )
}

export default Parent