import React from 'react'

function Child(props) {
  // console.log(props.data = 'kohli') //props are immutable
  return (
    <div>Child: {props.data}</div>
  )
}

export default Child