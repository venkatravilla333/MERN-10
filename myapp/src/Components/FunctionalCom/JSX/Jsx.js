import React from "react"

function Jsx() {
  // var x = 'sachin'
  // var x = 40
  // var x = true
  // var x = false
  // var x 
  // var x = null
  // var x = {
  //   name: 'sachin',
  //   age: 40
  // }
  // var x = ['sachin', 40, null, true, undefined, 'hello']
  var x = function () {
  //   // return {name: 'sachin'}
    return ['sachin', {pName: 'apple'}, 40]
    
  }
  return (
    // <div>
    //   <h2 id='myh2'>This is JSX</h2>
    // </div>
    // [<p>This ia para one</p>,
    //   <p>This ia para two</p>]
    // <div id="added">
      // <p>This ia para one</p>
      // <p>This ia para two</p>
    // </div>
    // <React.Fragment>
    //   <p>This is para one</p>
    //   <p>This is para two</p>
    // </React.Fragment>
    // <h2>X: {x}</h2>
    // <h2>X: {x.name}</h2>
    // <h2>X: {x.age}</h2>
    // <h2>X: {x[0]}</h2>
    // <h2>X: {x[1]}</h2>
    // <h2>X: {x().name}</h2>
    <h2>X: {x()[1].pName}</h2>
    // <h2>X: {undefined}</h2>
  ); 
//  return React.createElement('div', null, React.createElement('h2', {id:'myh2'}, 'Without using JSX'))
}

export default Jsx