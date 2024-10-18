import React, { useEffect, useRef } from 'react'

function Dom() {
  var myRef = useRef()
  
  useEffect(() => {
    console.log(myRef)
    myRef.current.focus()
  })

  var getValue = () => {
    console.log(myRef.current.value)
    alert(myRef.current.value)
  }
  console.log('render')
  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={getValue}>get value</button>
    </div>
  )
}

export default Dom