import React from 'react'
import './style.css'
import ReactDOM from 'react-dom'

function Modal(props) {
  return ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div className='content'>
        <h2>Modal</h2>
        <h4>Modal heading</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum magnam adipisci iste voluptates dolores explicabo impedit eligendi </p>
        <button onClick={props.toggleDisplay}>close</button>
        <h3>{props.data}</h3>
      </div>
    </div>, document.getElementById("portal-root")
  ) 
}

export default Modal