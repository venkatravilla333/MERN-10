import React from 'react'

function G(props) {
console.log(props)  
  return (
    <div>
      <h2>G count: {props.state.count}</h2>
      <button onClick={()=>props.dispatch({type: 'increase'}) }>increase</button>
      <button onClick={()=>props.dispatch({type: 'decrease'}) }>decrease</button>
      <button onClick={()=>props.dispatch({type: 'reset'}) }>reset</button>
    </div>
  )
}

export default G