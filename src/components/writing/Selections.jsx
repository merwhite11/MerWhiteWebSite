import React, { useState, useRef, useEffect } from 'react';
import { ReactReader, EpubView } from 'react-reader';
import { Button, Collapse } from 'react-bootstrap';
import useLocalStorageState from 'use-local-storage-state';
import { Contents, Rendition } from 'epubjs';

const Selections = ({ rend, selections, setSelections, title }) => {

  const [open, setOpen] = useState(false);

  const deleteSelection = (selected) => {
    setSelections(selected);
  }

  return (

    <div className="col-md-10 d-flex d-row border border-secondary bg-white min-height-100 p-2 rounded mb-3">
      {/* <h6>Highlights</h6>
      <button className='btn btn-light justify-self-end'>V</button> */}



      <div>
        <Button
          className='btn btn-secondary dropdown-toggle' data-bs-toggle="dropdown" aria-expanded='false'
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {open ? 'Close Highlights' : 'See Highlights'}
        </Button>
        {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button> */}
        <Collapse in={open}>
          <div>
            <ul className="list-unstyled border-top border-stone-400">
              {selections?.map(({ text, cfiRange }, i) => (
                <li key={i} className="p-2">
                  <span>{text}</span>
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
