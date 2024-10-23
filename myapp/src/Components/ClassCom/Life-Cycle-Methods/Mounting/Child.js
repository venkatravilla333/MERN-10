import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
    console.log('child constructor')
  }
  static getDerivedStateFromProps() {
    console.log('child static get derived')
    return null
  }

  componentDidMount() {
    console.log('child didmount')
  }
  render() {
    console.log('child render')
    return (
      <div>Child</div>
    )
  }
}

export default Child