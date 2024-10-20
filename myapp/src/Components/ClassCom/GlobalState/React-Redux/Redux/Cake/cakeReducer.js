import { BUY_CAKE } from "./cakeActionTypes"



var initialState = {
  noOfCakes: 100
}

export var cakeReducer = (state=initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        noOfCakes: state.noOfCakes - 1
      }
      break;
    default:
      return state
  }
}