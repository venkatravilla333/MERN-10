import React, { Component } from 'react'

class Child1 extends Component {
  render() {
    console.log(this)
    return (
      <div>Child1: {this.props.name}</div>
    )
  }
}

export default Child1