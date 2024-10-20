import React, { Component } from 'react'

export class Child extends Component {
  render() {
    console.log(this.props)
    var {name} = this.props
    return (
      <div>
        {/* <h2>Child: {this.props.name}</h2>
        <h2>Child: {this.props.name}</h2>
        <h2>Child: {this.props.name}</h2>
        <h2>Child: {this.props.name}</h2>
        <h2>Child: {this.props.name}</h2>
        <h2>Child: {this.props.name}</h2> */}
        <h2>Child: {name}</h2>
        <h2>Child: {name}</h2>
        <h2>Child: {name}</h2>
        <h2>Child: {name}</h2>
        <h2>Child: {name}</h2>
        <h2>Child: {name}</h2>
      </div>
    )
  }
}

export default Child