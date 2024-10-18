import React, { useRef, useState } from 'react'

function A() {
  var nValue = 0
  var [sValue, setSvalue] = useState(0)
  var rValue = useRef(0)

  // var updateValues = () => {
  //   nValue++
  //   setSvalue(sValue+1)
  //   console.log(nValue)
  //   console.log(sValue)
  // }

  var updateNormalVariable = () => {
    nValue++
    console.log(nValue)
  }

  var updateStateVariable = () => {
    setSvalue(sValue + 1)
    console.log(sValue)
  }

  var updateRefVariable = () => {
    rValue.current++
    console.log(rValue.current)
  }
  console.log('render')
  return (
    <div>
      <h2>Normal variable value: {nValue}</h2>
      <h2>State variable value: {sValue}</h2>
      <h2>Ref variable value: {rValue.current}</h2>
      <button onClick={updateNormalVariable}>update normal variable</button>
      <button onClick={updateStateVariable}>update state variable</button>
      <button onClick={updateRefVariable}>update ref variable</button>
    </div>
  )
}

export default A