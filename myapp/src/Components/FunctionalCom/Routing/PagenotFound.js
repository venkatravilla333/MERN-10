import React, {useEffect} from 'react'

import {Navigate, useNavigate} from 'react-router-dom'

function PagenotFound() {
  var navigate = useNavigate()
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }, [])

  return (
    <h2>Page not found 404 </h2>
    // <Navigate to ='/'/>

  )
}

export default PagenotFound