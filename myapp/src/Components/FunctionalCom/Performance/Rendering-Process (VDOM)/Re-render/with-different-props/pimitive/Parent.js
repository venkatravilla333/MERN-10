import React, {useState} from 'react'
import Child from './Child'

function Parent() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(100)
  
  // var x = 'sachin'
  // var x = {value: 100}
  // var x = [100]
  // var x = ()=>{}
  
  
  let updateCount = () => {
    console.log('state update in parent')
    setCount(count+1)
  }
  
  let updateNum= () => {
    console.log('state update in parent')
    setNum(num+10)
  }
  
  console.log('parent render')
  return (
    <div>
      <h3>This is parent: {count}</h3>
      <h3>This is parent: {num}</h3>
      <button onClick={updateCount}>update count</button>
      <button onClick={updateNum}>update num</button>
      <Child num = {num} />
    </div>
  )
}

export default Parent