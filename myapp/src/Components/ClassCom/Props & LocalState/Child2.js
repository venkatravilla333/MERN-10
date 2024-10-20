import React, { Component } from 'react'

class Child2 extends Component {
  render() {
    console.log(this)
    return (
      <div>Child2: {this.props.age}</div>
    )
  }
}

export default Child2