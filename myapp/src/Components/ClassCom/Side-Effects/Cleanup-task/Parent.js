import React, { Component } from 'react'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      x: 0,
      y: 0
    }
  }

  updateState = (e) => {
    console.log('update state')
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  componentDidMount() {
    console.log('did mount')
    window.addEventListener('click',  this.updateState)
  }

  componentWillUnmount() {
    console.log('clean up')
    window.removeEventListener('click', this.updateState)
  }
  render() {
    console.log('render')
    return (
      <div>
        <h2>X: {this.state.x }</h2>
        <h2>Y: {this.state.y }</h2>
      </div>
    )
  }
}

export default Parent