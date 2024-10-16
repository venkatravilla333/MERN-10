import React, { useState } from 'react'
import B from './B'
import C from './C'

function A() {
 var [name, setName] = useState('sachin')
  return (
    <div>
      {/* <h2>A name: {name}</h2>
      <button onClick={()=>setName('kohli')}>update name</button> */}
      <B />
      <C />
    </div>
  )
}

export default A