import React, {useState, useMemo} from 'react'

function Heavy() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(5)
  var factResult = useMemo(() => {
      return   factorial(num)
  }, [num]) 
  console.log(factResult)

  var updateCount = () => {
    console.log('update count')
    setCount(count+1)
  }
  var updateNum = () => {
    setNum(num+1)
  }

  function factorial(n) {
    console.log('factorial funcion runs')
    var result = 1
    for (var i = n; i >= 1; i--){
      result = result*i
    }
    return result
  }
  console.log('render')
  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Fact result: {factResult}</h2>
      <button onClick={updateCount }>update count</button>
      <button onClick={updateNum}>update num</button>
    </div>
  )
  
}

export default Heavy