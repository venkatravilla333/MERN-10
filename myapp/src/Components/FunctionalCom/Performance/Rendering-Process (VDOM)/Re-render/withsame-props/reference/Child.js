import React from 'react'

function Child(props) {
  console.log('child render')
  return (
    <div>This is Child: </div>
  )
}

export default React.memo(Child)