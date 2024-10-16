import React from 'react'

function Login(props) {
  return (
        <div id='login'>
        <h2>Login</h2>
        <form>
          <div>
          <label htmlFor="">name</label>
          <input type="text" />
          </div>
          <div>
            <label htmlFor="">email</label>
            <input type="email" />
         </div>
          <div>
           <label htmlFor="">password</label>
           <input type="password" />
          </div>
         <button onClick={props.toggleLogin}>Login</button>  
        </form>
      </div>
  )
}

export default Login