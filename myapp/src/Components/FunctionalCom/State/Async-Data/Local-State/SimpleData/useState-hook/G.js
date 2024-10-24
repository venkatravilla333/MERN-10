import React, {useState, useEffect} from 'react'

function G() {
 var [loading, setLoading] = useState(false)
 var [posts, setPosts] = useState([])
  var [error, setError] = useState('')
  
  console.log('render')
  
  // useEffect(() => {
  //   console.log('useEffect')
  //   setLoading(true)
  //   setError('')
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //       console.log(res)
  //       return res.json()
  //     }).then((data) => {
  //       console.log(data)
  //       setLoading(false)
  //       setPosts(data)
  //     }).catch((error) => {
  //       console.log(error)
  //       setLoading(false)
  //       setError(error.message)
  //   })
  // }, [])

  var getData = () => {
    setLoading(true)
    setError('')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res)
        return res.json()
      }).then((data) => {
        console.log(data)
        setLoading(false)
        setPosts(data)
      }).catch((error) => {
        console.log(error)
        setLoading(false)
        setError(error.message)
    })
  }
  

  return (
    <div>
      <h2>G com: </h2>
      <button onClick={getData}>get data</button>
      {
        loading ? <h2>Loading</h2> : error ? <h2>{error.message}</h2> :
        <div>
          {
              posts.map((post) => {
                return <div key={post.id}>
                  <p>Userid: {post.userId}</p>
                  <p>Title: {post.title}</p>
                  <p>Body: {post.body}</p>
                </div>
              })
          }
        </div>
      }
    </div>
  )
}

export default G