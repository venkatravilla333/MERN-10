import React from 'react'
import L from './L'
import M from './M'

function J(props) {
  console.log(props)
  return (
    <div>
      <L />
      {/* <M name={props.name} setName={props.setName} /> */}
      <M />
    </div>
  )
}

export default J