import React, {useContext} from 'react'

import { postsContext } from './A'

function M() {
  // console.log(props)
  var state = useContext(postsContext)
  console.log(state)
  return (
    <div>
      <h2>M com:</h2>
      {state.loading ? <h2>Loading</h2> : state.error ? <h3>{state.error}</h3> :
        <div>
          {
            state.posts.map((post) => {
              return <React.Fragment key={post.id}>
                <p>userid: {post.userId }</p>
                <p>title: {post.title }</p>
                <p>body: {post.body }</p>
                
              </React.Fragment>
            })
          }
        </div>
      }
      
     
    </div>
  )
}

export default M