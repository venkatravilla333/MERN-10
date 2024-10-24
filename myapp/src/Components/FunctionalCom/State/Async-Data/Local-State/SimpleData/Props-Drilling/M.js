import React, { useState } from 'react'

function M(props) {
  //  var [name, setName] = useState('sachin')

  return (
    <div>
      <h2> M name: {props.name}</h2>
     
      <button onClick={() => props.setName('kohli')}>update name</button>
    </div>
  );
}

export default M