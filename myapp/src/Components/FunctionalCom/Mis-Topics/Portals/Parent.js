import React, { useState } from 'react'
import Modal from './Modal'

function Parent() {
  var [displayModal, setDisplayModal] = useState(false)
  

  var toggleDisplay = () => {
    setDisplayModal(!displayModal)
  }
  return (
    <div className='parent'>
      <button onClick={toggleDisplay}>open modal</button>
      {displayModal && <Modal data='data from parent' toggleDisplay={toggleDisplay } />}
    </div>
  )
}

export default Parent