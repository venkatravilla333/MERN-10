import React, {useReducer} from 'react'

function F() {

  var initialState = {
    count: 0
  }

  var countReducer = (state, action) => {
    console.log(action.type)
    switch (action.type) {
      case 'increase':
        return {
          count: state.count + 1
        }
        break;
      case 'decrease':
        return {
          count: state.count - 1
        }
        break;
      case 'reset':
        return {
          count: state.count = 0
        }
        break;
      default:
        return state
    }
    
  }

  var [state, dispatch] = useReducer(countReducer, initialState)
  
  

  return (
    <div>
      <h2>F: Count: {state.count}</h2>
      <button onClick={()=>dispatch({type: 'increase'})}>increase</button>
      <button onClick={()=>dispatch({type: 'decrease'})}>decrease</button>
      <button onClick={()=>dispatch({type: 'reset'})}>reset</button>
      
    </div>
  )
}

export default F