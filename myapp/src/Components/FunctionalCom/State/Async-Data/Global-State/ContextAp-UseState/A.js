import React, { useState, useEffect } from 'react'
import B from './B'
import C from './C'


export var postsContext = React.createContext()

function A() {
 var [loading, setLoading] = useState(false)
 var [posts, setPosts] = useState([])
  var [error, setError] = useState('')
  
  console.log('render')

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      return res.json()
      }).then((data) => {
        console.log(data)
        setLoading(false)
        setPosts(data)
      }).catch((err) => {
        console.log(err)
        setLoading(false)
        setError(err)
    })
  }, [])
  

  return (
    <div>
      <postsContext.Provider value={{loading, posts, error}}>
      <B/>
      <C/>
      </postsContext.Provider>
     
    </div>
  );
}

export default A