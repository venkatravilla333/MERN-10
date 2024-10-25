import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchPosts } from '../Redux/actionCreators'

function M() {
 var dispatch = useDispatch()

  useEffect(() => {
    console.log('effect')
   dispatch(fetchPosts()) 
  }, [])
  
 var state = useSelector((state) => {
    return state
 })
  console.log(state)
  console.log('render')
  return (
    <div>
      <h2>M com:</h2>
    
      {state.loading ? <h2>Loading</h2> : state.error ? <h2>{state.error}</h2> :
        <div>
          {
            state.posts.map((post) => {
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