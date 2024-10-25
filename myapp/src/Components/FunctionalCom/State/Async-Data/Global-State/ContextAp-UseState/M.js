import React, { useContext, useState } from 'react'
import {postsContext } from './A';

function M(props) {

  var {loading, posts, error} = useContext(postsContext)
  return (
    <div>
      <h2>M com:</h2>
      {
        loading ? <h2>Loading</h2> : error ? <h2>{error}</h2> :
          <div>
            {
              posts.map((post) => {
                return <>
                  <p>user id: {post.userId}</p>
                  <p>title: {post.title}</p>
                  <p>body: {post.body}</p>
                </>
              })
            }
          </div>
     }
     
    </div>
  );
}

export default M