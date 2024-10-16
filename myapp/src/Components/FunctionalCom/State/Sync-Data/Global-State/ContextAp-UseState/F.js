import React, { useContext, useState } from 'react'
import { countContext} from './A'

function F(props) {
  // var [name, setName] =  useState('sachin')
  var { count, setCount } = useContext(countContext)
  
  return (
    <div>
      {/* <h2>F name: {props.name}</h2>
      <button onClick={()=>props.setName('kohli')}>update name</button> */}
      <h2>F Count: {count}</h2>
      <button onClick={() => setCount('kohli')}>update count</button> 
    </div>
  );
}

export default F