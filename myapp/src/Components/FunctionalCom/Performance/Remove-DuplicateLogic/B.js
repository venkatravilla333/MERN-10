import React, { useState } from 'react'
import useCount from './custom-hooks/useCount'

function B() {
  //  var [count, setCount] = useState(0)
  var [count, changeCount] = useCount()
  return (
    <div>
      <h2>B: count: {count}</h2>
      <button onDoubleClick={changeCount}>increase</button>
    </div>
  )
}

export default B