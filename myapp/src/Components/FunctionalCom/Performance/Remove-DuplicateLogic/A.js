import React, { useState } from 'react'
import useCount from './custom-hooks/useCount'

function A() {
  // var [count, setCount] =  useState(0)
  var [count, changeCount] = useCount()
  console.log(count)
  return (
    <div>
      <h2>A: count: {count}</h2>
      <button onClick={changeCount}>increase</button>
    </div>
  )
}

export default A