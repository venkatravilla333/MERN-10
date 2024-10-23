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
  render() {
    console.log('parent render')
    return (
      <div>
        <Child/>
      </div>
    )
  }
}

export default Parent