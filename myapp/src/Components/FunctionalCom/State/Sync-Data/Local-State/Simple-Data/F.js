import React, { useState } from 'react'

function F() {
var [name, setName] =  useState('sachin')
  return (
    <div>
      <h2>F name: {name}</h2>
      <button onClick={()=>setName('kohli')}>update name</button>
    </div>
  )
}

export default F