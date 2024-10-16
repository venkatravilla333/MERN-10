import React, { useState } from 'react'
import B from './B'
import C from './C'

export var countContext = React.createContext()
export var colorContext = React.createContext('red')
// console.log(countContext._currentValue)
console.log(countContext)

function A() {
 var [count, setCount] = useState(0)
  return (
    <div>
      
      {/* <B name={name} setName={setName} />
      <C name={name} setName={setName} /> */}
      <colorContext.Provider value='green'>
      <countContext.Provider value={{count: count, setCount: setCount}} >
      <B/>
      <C/>
      </countContext.Provider>
      </colorContext.Provider>
    </div>
  );
}

export default A