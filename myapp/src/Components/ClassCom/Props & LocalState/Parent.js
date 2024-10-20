import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

class Parent extends Component {
  constructor() {
    super()
    console.log(this)
    this.state = {
      name: 'sachin',
      age: 40,
      count: 0
    }
    // this.updateCount = this.updateCount.bind(this)
  }
  updateCount = () => {
    console.log(this)
    // this.state.count = this.state.count+1 // direct update
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    return (
      <div id='parent'>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.updateCount}>update count</button>
        <h2>Name: {this.state.name}</h2>
        <h2>Age: {this.state.age}</h2>
        {/* <Child1 name='sachin' /> */}
        <Child1 name={this.state.name} />
        <Child2 age={this.state.age} />
      </div>
    )
  }
}

export default Parent