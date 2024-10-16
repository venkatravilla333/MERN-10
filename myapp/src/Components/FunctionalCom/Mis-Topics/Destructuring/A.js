import React, { useState } from 'react'
import B from './B'

function A() {
  var [state] = useState({ count: 0 })
  
  var { count } = state
  
  return (
    <div>
      {/* <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2>
      <h2>A: Count: {state.count} </h2> */}
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <h2>A: Count: {count} </h2>
      <B state={state} />
    </div>
  )
}

export default A