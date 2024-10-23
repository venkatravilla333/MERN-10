import React, { Component } from 'react'

export class C extends Component {
  constructor(props) {
    super(props)
  
    // this.state = {
    //   count: 0
    // }
  }

  // updateCount = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }
  render() {
    return (
      <div>
        <h2>Count: {this.props.count}</h2>
        <button onDoubleClick={this.props.updateCount}>update count</button>

      </div>
    )
  }
}

export default C