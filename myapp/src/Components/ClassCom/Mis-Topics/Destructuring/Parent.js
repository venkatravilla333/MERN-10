import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'sachin'
    }
  }
  render() {
    var {name} = this.state
    return (
      <div>
        {/* <h2>name: {this.state.name}</h2>
        <h2>name: {this.state.name}</h2>
        <h2>name: {this.state.name}</h2>
        <h2>name: {this.state.name}</h2> */}
        <h2>name: {name}</h2>
        <h2>name: {name}</h2>
        <h2>name: {name}</h2>
        <h2>name: {name}</h2>
        <Child name={name} />
      </div>
    )
  }
}

export default Parent