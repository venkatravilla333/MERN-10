import React, { useState } from 'react'
import useCount from './custom-hooks/useCount'

function C() {
  //  var [count, setCount] = useState(0)
  var [count, changeCount] = useCount()
  return (
    <div>
      <h2>C: count: {count}</h2>
      <button onMouseMove={changeCount}>increase</button>
    </div>
  )
}

export default C