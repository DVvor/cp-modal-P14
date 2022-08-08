import './ModalMessageValidate.css'
import React from 'react';

function ModalMessageValidate ({opened, closeModal, title, subtitle}) {
  if(opened) {
    return (
      <>
            <div className='modal-message'>
              <div className='modal-content'>
                <p className='modal-title'>{title}</p>
                <div className='modal-subtitle'>{subtitle}</div>
                <button className='modal-btn-validate' onClick={closeModal}>close</button>
              </div>
            </div>
      </>
    )
  }
}

export default ModalMessageValidate