import React from 'react'
import HelloClass from './Components/ClassCom/HelloClass'
import HelloFun from './Components/FunctionalCom/HelloFun';

function App() {
  return (
    <div>
      <h2>App component (root component)</h2>
      <HelloClass />
      <HelloFun />
      {/* {new HelloClass().render()} */}
    </div>
  );
}

export default App