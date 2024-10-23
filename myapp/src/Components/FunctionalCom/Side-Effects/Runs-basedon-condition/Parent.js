import React, {useState, useEffect} from 'react'

function Parent() {
 var [normalCount, setNormalCount] = useState(0)
  var [domCount, setDomCount] = useState(0)
  
  useEffect(() => {
    console.log('useeffect runs')
    document.title = `dom count: ${domCount}`
  }, [domCount])

  var updateNormalCount = () => {
    setNormalCount(normalCount+1)
  } 
  var updateDomCount = () => {
    setDomCount(domCount+1)
  } 
  
  console.log('render')
  return (
    <div>
      <h2>Normal count: {normalCount}</h2>
      <h2>Dom count: {domCount}</h2>
      <button onClick={updateNormalCount}>update normal count</button>
      <button onClick={updateDomCount}>update dom count</button>
    </div>
  )
}

export default Parent