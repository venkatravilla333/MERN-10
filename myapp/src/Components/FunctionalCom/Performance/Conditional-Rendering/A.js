

import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'

function A() {

  var [login, setLogin] = useState(false)

  var toggleLogin = () => {
      setLogin(true)
  }
  var toggleLogout = () => {
      setLogin(!true)
  }

  //if else

  // if (login) {
  //   return <Profile toggleLogout={toggleLogout}/>
  // } else {
  //   return <Login toggleLogin={toggleLogin} />
  // }

  //element variable

  // var data

  // if (login) {
  //   data = <Profile toggleLogout={toggleLogout}/>
  // } else{
  //   data = <Login toggleLogin={toggleLogin} />
  // }

  // return data

  //ternary operator

  // var data = login ? <Profile toggleLogout={toggleLogout} /> : <Login toggleLogin={toggleLogin} />
  
  // return data

  //short circuit 

  var data = login &&  <Profile toggleLogout={toggleLogout} />
  return data
  
  // return (
  //   <div>
  //     <Login />
  //     <Profile/> 
  //   </div>
  // )
}

export default A