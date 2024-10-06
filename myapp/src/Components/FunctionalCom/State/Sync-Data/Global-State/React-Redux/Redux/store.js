import { createStore } from 'redux'

export function increaseCount() {
 return {
    type: 'increase'
  }
}
export function decreaseCount() {
 return {
    type: 'decrease'
  }
}

var initialState = {
  count: 0
}

function countReducer(state=initialState, action) {
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
    default:
     return state
  }
}

export var store = createStore(countReducer)