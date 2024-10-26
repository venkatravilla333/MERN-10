import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchPosts } from '../Toolkit/postSlice'

function M() {
 var dispatch = useDispatch()

  useEffect(() => {
    console.log('effect')
    dispatch(fetchPosts()) 
  }, [])
  
 var state = useSelector((state) => {
    return state.postReducer
 })
 console.log('render')
  console.log(state)
  return (
    <div>
      <h2>M com:</h2>
    
      {state.loading ? <h2>Loading</h2> : state.error ? <h2>{state.error.message}</h2> :
        <div>
          {
            state && state.posts && state.posts.map((post) => {
              return <div key={post.id}>
                <p>Uer id: {post.userId}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
              </div>
            })
          }
        </div>}
          
      
    </div>
  )
}

export default M