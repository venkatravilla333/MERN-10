import React from 'react'

function Child({ age }) {
  if (age < 18) {
    throw Error('Age must be 18 or more')
  }
  return (
    <div>Child : {age}</div>
  )
}

export default Child