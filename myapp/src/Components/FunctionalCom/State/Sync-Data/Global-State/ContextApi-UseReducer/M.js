import React, { useContext } from 'react'
import { countContext } from './A'

function M() {
  var {state, dispatch} = useContext(countContext)
  return (
    <div>
      <h2>M Count: {state.count}</h2>
      <button onClick={()=>dispatch({type: 'increase'})}>increase</button>
      <button onClick={()=>dispatch({type: 'decrease'})}>derease</button>
      <button onClick={()=>dispatch({type: 'reset'})}>reset</button>
      
    </div>
  )
}

export default M