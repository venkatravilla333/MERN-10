import React, {useState} from 'react'

function useCount() {
  var [count, setCount] = useState(0)
  
  var changeCount = () => {
    setCount(count+1)
  }

  return [count, changeCount]
}

export default useCount