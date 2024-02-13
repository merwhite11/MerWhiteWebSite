import React, { useState, useRef, useEffect } from 'react';
import { ReactReader, EpubView } from 'react-reader';
import { Button, Collapse } from 'react-bootstrap';
import {BiCaretDown, BiCaretUp} from 'react-icons/bi'
import useLocalStorageState from 'use-local-storage-state';
import { Contents, Rendition } from 'epubjs';

const Selections = ({ rend, selections, setSelections }) => {

  const [open, setOpen] = useState(false);

  const deleteSelection = (selected) => {
    setSelections(selected);
  }

  return (

    <div className="col-md-12 d-flex d-row border border-secondary bg-white min-height-100 p-2 rounded mb-3">
      <div className='flex-grow-1'>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className = 'btn btn-light w-100 text-start d-flex align-items-center justify-content-between'
        >
          {open ? '' : 'See Highlights'}
          {open ? <BiCaretUp style={{marginLeft: 'auto'}}/> : <BiCaretDown style={{marginLeft: 'auto'}}/>}
        </Button>
        <Collapse in={open}>
          <div style={{maxHeight: '20vh', overflowY:'auto'}}>
            <ul class="list-unstyled border-top border-stone-400">
              {selections?.map(({ text, cfiRange }, i) => (
                <li key={i} className="p-2 d-flex justify-content-between align-items-center">
                  <span className=''>{text}</span>
                  <button
                    className="btn btn-light p2"
                    onClick={() => {
                      rend?.annotations.remove(cfiRange, 'highlight')
                      deleteSelection(selections.filter((item, j) => j !== i))
                    }}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Collapse>
      </div>
    </div>
  )
};


export default Selections;
