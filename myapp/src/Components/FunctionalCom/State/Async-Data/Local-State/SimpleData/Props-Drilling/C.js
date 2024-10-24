import React from 'react'
import H from './H'
import I from './I'

function C(props) {
  console.log(props)
  return (
    <div>
      <H />
      <I name={props.name} setName={props.setName} />
    </div>
  )
}

export default C