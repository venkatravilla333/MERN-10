import React, { Component } from 'react'
import Child1 from './Child1'
import { Child2 } from './Child2'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: {value: 10}
    }
  }
  updateCount = () => {
    this.setState({
      count: this.state.count.value = 10
    })
  }
  render() {
    console.log('parent render')
    return (
      <div>
        <button onClick={this.updateCount}>update count:  {this.state.count.value }</button>
        <Child1 count={this.state.count } />
        <Child2 count={this.state.count } />
      </div>
    )
  }
}

export default Parent