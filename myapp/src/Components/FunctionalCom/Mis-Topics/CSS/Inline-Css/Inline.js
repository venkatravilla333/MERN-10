import React from 'react'


function Inline() {
  var obj = {color: 'red', fontSize: '100px'}
  return (
    <div>
      <h2 style={obj}>Hello sachin</h2>
      <h2 style={obj}>Hello kohli</h2>
    </div>
  )
}

export default Inline