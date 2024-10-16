import React, { useReducer, useState } from 'react'
import F from './F'
import G from './G'

function D() {
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
      <F state={state} dispatch={dispatch} />
      <G state={state} dispatch={dispatch} />
    </div>
  );
}

export default D