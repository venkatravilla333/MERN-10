import React from 'react'

function Child(props) {
  return (
    <div>
      <button className={props.btnClass} onClick={props.changebtnColor}>Child button</button>
    </div>
  )
}

export default Child