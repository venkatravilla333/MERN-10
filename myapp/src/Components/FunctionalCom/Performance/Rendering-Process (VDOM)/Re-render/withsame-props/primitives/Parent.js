import React, {useState} from 'react'
import Child from './Child'

function Parent() {
  const [count, setCount] = useState(0)
  
  // var x = 'sachin'
  // var x = {value: 100}
  // var x = [100]
  // var x = ()=>{}
  
  
  let updateState = () => {
    console.log('state update in parent')
    setCount(count+1)
  }
  
  console.log('parent render')
  return (
    <div>
      <h3>This is parent: {count}</h3>
      <button onClick={updateState}>update state</button>
      
      <Child x = {x} />
    </div>
  )
}

export default Parent