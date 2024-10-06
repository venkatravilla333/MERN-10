import React, { useState } from 'react'

function M() {
  //  var [name, setName] = useState('sachin')

  return (
    <div>
      <h2> M name: {name}</h2>
     
      <button onClick={() => setName('kohli')}>update name</button>
    </div>
  );
}

export default M