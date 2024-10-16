import React, { useState } from 'react'

function E() {
//  var [name, setName] = useState('sachin')
  return (
    <div>
      <h2>E Name: {name}</h2>
      <button onClick={()=>setName('kohli')}>update name</button>
    </div>
  )
}

export default E