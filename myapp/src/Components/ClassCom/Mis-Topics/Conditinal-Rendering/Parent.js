import React, { Component } from 'react'
import Login from './Login'
import Profile from './Profile'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       login: false
    }
  }

  changeState = () => {
    this.setState({
      login: !this.state.login
    })
  }
  render() {
    return (
      <div>
        {
          this.state.login ? <Profile changeState={this.changeState} /> : <Login changeState={this.changeState} />
        }
      </div>
    )
  }
}

export default Parent