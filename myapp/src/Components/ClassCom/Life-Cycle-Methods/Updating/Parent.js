import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
    console.log('parent contructor')
  }

  static getDerivedStateFromProps(props) {
    console.log('parent static get derived')
    return null
  }
  
  componentDidMount() {
    console.log('parent didmount')
  }
  shouldComponentUpdate() {
    console.log('parent should update')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('parent get snap')
    return null
  }

  componentDidUpdate() {
    console.log('parent didupdate')
  }

  updateCount = () => {
    this.setState({count: this.state.count+1})
  }
  render() {
    console.log('parent render')
    return (
      <div>
        <h2>Count: {this.state.count }</h2>
        <button onClick={this.updateCount}>update state</button>
        <Child/>
      </div>
    )
  }
}

export default Parent