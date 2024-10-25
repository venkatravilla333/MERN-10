import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./actionType"


let initialState = {
  loading: false,
  posts: [],
  error: ''
}



export let postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true
      }
      break;
    case FETCH_POST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: ''
      }
      break;
    case FETCH_POST_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.payload
      }
      break;
    default: 
      return state
    
  }
  
}