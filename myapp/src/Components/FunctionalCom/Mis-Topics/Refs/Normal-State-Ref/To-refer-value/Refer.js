import React, { useEffect, useRef, useState } from 'react'

function Refer() {

  var [timer, setTimer] = useState(0)
  var timerCount = useRef()
  

  useEffect(() => {
    console.log('effect runs')
     timerCount.current =  setInterval(() => {
      setTimer(timer+1)
  }, 2000)
  return ()=> {
    clearInterval(timerCount.current)
    }
  })
  console.log('render')
  

  return (
    <div>
      <h2>Timer: {timer}</h2>
      <button onClick={()=>clearInterval(timerCount.current)}>clear timer</button>
    </div>
  )
}

export default Refer