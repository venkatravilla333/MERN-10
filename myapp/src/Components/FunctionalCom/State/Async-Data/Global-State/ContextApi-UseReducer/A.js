import React, {useReducer, useEffect} from 'react'
import B from './B'
import C from './C'

export var postsContext = React.createContext()

function A() {

  var initialState = {
    loading: false,
    posts: [],
    error: ''
  }

  var postReducer = (state=initialState, action) => {
    console.log(action.type)
    switch (action.type) {
      case 'FETCH_POST_REQUEST':
        return {
          ...state,
          loading: true
        }
        break;
      case 'FETCH_POST_SUCCESS':
        return {
          loading: false,
          posts: action.payload,
        }
        break;
      case 'FETCH_POST_FAILURE':
        return {
          loading: false,
          error: action.payload,
        }
        break;
      default:
        return state
    }
    
  }

  var [state, dispatch] = useReducer(postReducer, initialState)
  console.log(state)

  useEffect(() => {
    dispatch({type: 'FETCH_POST_REQUEST'})
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
      dispatch({type: 'FETCH_POST_SUCCESS', payload: data})
    }).catch((err) => {
      console.log(err)
      dispatch({type: 'FETCH_POST_FAILURE', payload: err})
    })
  }, [])
  
  

  return (
    <div>
      <postsContext.Provider value={state}>
      <B />
      <C />
      </postsContext.Provider>
      
    </div>
  )
}

export default A