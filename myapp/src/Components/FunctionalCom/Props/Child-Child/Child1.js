import React from 'react'

function Child1(props) {
  return (
    <div>
      <h2>Child 1: <button onClick={()=>props.test('data from child1')}>click</button></h2>
    </div>
  )
}

export default Child1