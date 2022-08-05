import './ModalMessageValidate.css'
import React, { useState } from 'react';
import React from 'react';

function ModalMessageValidate () {
  const [opened, setOpened] = useState(true);

  function closeModal() {
    setOpened(false)
  }

  if(opened) {
    return (
      <>
            <div className='modal-message'>
              <div className='modal-content'>
                <p className='validate'>Registered!</p>
                <div>The new employee is register</div>
                <button className='btn-validate' onClick={closeModal}>close</button>
              </div>
            </div>
      </>
    )
  }
}

export default ModalMessageValidate