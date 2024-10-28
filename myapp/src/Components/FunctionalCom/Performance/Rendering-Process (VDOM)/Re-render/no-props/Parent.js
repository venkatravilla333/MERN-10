import React, {useState} from 'react'
import Child from './Child'

function Parent() {
  var [count, setCount] = useState(0)
  
  var updateState = () => {
    console.log('state update')
    setCount(count + 1)
  }
  console.log('parent render')
  return (
    <div>
      <h3>This is parent : {count}</h3>
      <button onClick={updateState}>update state</button>
      <Child/>
    </div>
  )
}

export default Parent