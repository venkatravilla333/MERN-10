import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseCount } from '../Redux/Count/countAction'
   
export class M extends Component {
  render() {
    return (
      <div>
        <h2>M: count: {this.props.count}</h2>
        <button onClick={this.props.increaseCount}>increase</button>
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return {
    count: state.countReducer.count
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: ()=>{dispatch(increaseCount())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (M)