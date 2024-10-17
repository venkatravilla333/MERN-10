import React, { useState } from 'react'
import Child from './Child'
import './styles.css'

function Parent() {
  var [bgColor, setchangeBgColor] = useState(true)

  
  var changebtnColor = () => {
       setchangeBgColor(!bgColor)
  }
  
  var btnClass = bgColor ? 'btnGreen' : 'btnRed'
  
  return (
    <div>
      <button onClick={changebtnColor} className={btnClass}>parent button</button>
      <Child btnClass={btnClass} changebtnColor={changebtnColor} />
    </div>
  )
}

export default Parent