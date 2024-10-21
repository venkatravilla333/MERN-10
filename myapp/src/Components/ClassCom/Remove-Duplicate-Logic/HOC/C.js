import React, { Component } from 'react'
import HocCom from './HocCom'

export class C extends Component {
  constructor(props) {
    super(props)
  
    // this.state = {
    //    count: 0
    // }
  }

  // changeCount = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }
  render() {
    return (
      <div>
        <h2>Count: {this.props.count}</h2>
        <button onDoubleClick={this.props.changeCount}>increase</button>
      </div>
    )
  }
}

export default HocCom(C)