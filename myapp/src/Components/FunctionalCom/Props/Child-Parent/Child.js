import React from 'react'

function Child(props) {
  // console.log(props.test)
  return (
    <div>
      <h2>send data to parent</h2>
      <button onClick={()=>props.test('child data')}>click</button>
    </div>
  );
}

export default Child