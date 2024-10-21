import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
   
  }

  clickHandler = () => {
    // this.componentRef.currrent.focus()
    console.log(this.componentRef.current)
    this.componentRef.current.focus()
  }
  render() {
    return (
      <div>
        <Child ref={this.componentRef} />
        <button onClick={this.clickHandler }>click</button>
      </div>
    )
  }
}

export default Parent