import React, { Component } from 'react'

export class Child extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  focusInput=()=> {
    console.log(this.inputRef.current)
    this.inputRef.current.focus()
  }
 
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}

export default Child