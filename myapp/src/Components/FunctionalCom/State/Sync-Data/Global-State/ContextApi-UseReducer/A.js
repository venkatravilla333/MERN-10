import React, {useReducer} from 'react'
import B from './B'
import C from './C'

export var countContext = React.createContext()

function A() {

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
      <countContext.Provider value={{state, dispatch}}>
      <B />
      <C />
      </countContext.Provider>
      
    </div>
  )
}

export default A