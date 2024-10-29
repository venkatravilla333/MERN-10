import React from 'react'

function Child2() {
  console.log('child2 render')

  return (
    <div>Child2</div>
  )
}

export default React.memo(Child2)