import React, { useContext, useState } from 'react'
import { colorContext, countContext } from './A';

function M(props) {
  //  var [name, setName] = useState('sachin')
//  var name = nameContext._currentValue
  var {count, setCount } = useContext(countContext)
  var color =  useContext(colorContext)
  return (
    <div>
      {/* <h2> M name: {props.name}</h2> */}
      <h2> M count: {count} </h2>
      <h2> M color: {color} </h2>
     
      {/* <button onClick={() => props.setName('kohli')}>update name</button> */}
      <button onClick={() => setCount(count+1)}>update count</button>
    </div>
  );
}

export default M