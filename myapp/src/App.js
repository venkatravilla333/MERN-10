import React from 'react'
// import HelloClass from './Components/ClassCom/HelloClass'
// import HelloFun from './Components/FunctionalCom/HelloFun';
import Jsx from './Components/FunctionalCom/JSX/Jsx'
import Parent from './Components/FunctionalCom/Props/Parent-Child/Parent';

function App() {
  return (
    <div>
      <h2>App component (root component)</h2>
      {/* <HelloClass />
      <HelloFun /> */}
      {/* {new HelloClass().render()} */}
      {/* {Jsx()} */}
      {/* <Jsx/> */}
      <Parent/>
    </div>
  );
}

export default App