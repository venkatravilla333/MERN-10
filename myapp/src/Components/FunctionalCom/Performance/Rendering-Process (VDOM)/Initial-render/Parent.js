import React from 'react'
import Child from './Child'

function Parent() {
  console.log('parent render')
  return (
    <div>
      <h3>This is parent</h3>
      <Child/>
    </div>
  )
}

export default Parent