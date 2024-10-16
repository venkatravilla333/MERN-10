import React from 'react'

function B(props) {
  console.log(props)
  var {count} = props.state
  return (
    <div>
      {/* <h2>B: count: {props.state.count}</h2>
      <h2>B: count: {props.state.count}</h2>
      <h2>B: count: {props.state.count}</h2>
      <h2>B: count: {props.state.count}</h2>
      <h2>B: count: {props.state.count}</h2>
      <h2>B: count: {props.state.count}</h2>
      <h2>B: count: {props.state.count}</h2> */}
      <h2>B: count: {count}</h2>
      <h2>B: count: {count}</h2>
      <h2>B: count: {count}</h2>
      <h2>B: count: {count}</h2>
      <h2>B: count: {count}</h2>
      <h2>B: count: {count}</h2>
      <h2>B: count: {count}</h2>
      <h2>B: count: {count}</h2>
      <h2>B: count: {count}</h2>
    </div>
  )
}

export default B