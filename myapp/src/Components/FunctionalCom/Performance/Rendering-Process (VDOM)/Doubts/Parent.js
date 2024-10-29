import React, {useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
  var [count, setCount] = useState(0)
  var [num, setNum] = useState(0)
  
  var updateCount = () => {
    setCount(count+1)
  }
  var updateNum = () => {
    setNum(num+1)
  }
  console.log('parent render')
  return (
    <div>
      <h4>Parent</h4>
      <button onClick = {updateCount}>update count</button>
      <button onClick = {updateNum}>update Num</button>
      <Child1 num= {num} />
      <Child2 num= {num} />
    </div>
  )
}

export default Parent