import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form >
      <div>
        <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          
        <div> 
        <label htmlFor="">Email</label>
            <input type="email" />
          </div>
        <div>
        <label htmlFor="">Pasword</label>
        <input type="password" />
        </div>
        <button onClick={this.props.changeState}>Login</button>
        </form>
      </div>
    )
  }
}

export default Login