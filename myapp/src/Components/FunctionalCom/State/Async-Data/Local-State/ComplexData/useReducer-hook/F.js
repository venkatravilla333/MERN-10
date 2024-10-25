import React, {useReducer, useEffect} from 'react'

function F() {

  var initialState = {
    loading: false,
    posts: [],
    error: ''
  }

  var postReducer = (state = initialState, action) => {
    // console.log(action.type)
    switch (action.type) {
      case 'FETCH_POST_REQUEST':
        return {
          ...state,
          loading: true,
          
        }
        break;
      case 'FETCH_POST_SUCCESS':
        return {
          loading: false,
          posts: action.payload
        }
        break;
      case 'FETCH_POST_FAILED':
        return {
          loading: false,
          error: action.payload
        }
        break;
      default:
        return state
    }
    
  }

  var [state, dispatch] = useReducer(postReducer, initialState)

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
         dispatch({type: 'FETCH_POST_FAILED', payload: err})
    })
  }, [])
  
  

  return (
    <div>
      <h2>Hello</h2>
      {
        state.loading ? <h3>Loading</h3> : state.error ? <h3>{state.error}</h3> :
          <div>
            {
              state.posts.map((post) => {
                return <React.Fragment key={post.id}>
                  <p>Userid: {post.userId }</p>
                  <p>Title: {post.title }</p>
                  <p>Body: {post.body}</p>
                </React.Fragment>
              })
            }
          </div>
      }
      
      {/* <button onClick={()=>dispatch({type: 'increase'})}>increase</button>
      <button onClick={()=>dispatch({type: 'decrease'})}>decrease</button>
      <button onClick={()=>dispatch({type: 'reset'})}>reset</button> */}
      
    </div>
  )
}

export default F