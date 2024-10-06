import React, { useState } from 'react'

function G() {
  // var x = 100
 var [name, setName] = useState('sachin')

  // function update(data) {
  //   x = data
  //   console.log(x)
  // }

  return (
    <div>
      <h2> G name: {name}</h2>
      {/* <button onClick={()=>update(200)}>update</button> */}
      <button onClick={() => setName('kohli')}>update name</button>
    </div>
  );
}

export default G