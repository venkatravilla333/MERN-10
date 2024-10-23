import React, { Component } from 'react'

export class A extends Component {
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
    console.log(this.props)
    return (
      <div>
        <h2>Count: {this.props.count}</h2>
        <button onClick={this.props.updateCount}>update count</button>
      </div>
    )
  }
}

export default A