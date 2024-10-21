import React, { Component } from 'react'

export class Parent extends Component {
  constructor(props) {
    super(props)
    this.dom = React.createRef()
    this.cbRef = null
    this.domRef = (element) => {
      this.cbRef = element
    }
  }

  componentDidMount() {
    // console.log('did mount')
    // console.log(this.dom.current)
    // this.dom.current.focus()
    // console.log(this.cbRef)
    if (this.cbRef) {
      this.cbRef.focus()
    }
  }

  getValue = () => {
    alert(this.dom.current.value)
  }
  render() {
    console.log('render')
    return (
      <div>
        <input type="text" ref={this.dom} />
        <input type="text" ref={this.domRef} />
        <button onClick={this.getValue}>get value</button>
      </div>
    )
  }
}

export default Parent