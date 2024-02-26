import React, { useState } from 'react';

import Selections from './Selections.jsx';


const Modal = ({ modalOpen, toggleModal, largeText, setLargeText, rend, selections, setSelections, title }) => {

  const handleFont = () => {
    setLargeText(!largeText)
  }

  return (
    <div>

      {modalOpen && (


        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Reader Preferences</h5>
                <button type="button" className="close btn btn-light" onClick={toggleModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>

              </div>
              <div className="modal-body">
                <button onClick={() => handleFont()} className="btn btn-light btn-sm py-3 px-1 mb-2">
                  {largeText ? 'Smaller font' : 'Bigger font'}
                </button>
                <Selections rend={rend} selections={selections} setSelections={setSelections} title={title}/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;



{/* <Selections rend={rend} selections={selections} setSelections={setSelections}/> */ }
