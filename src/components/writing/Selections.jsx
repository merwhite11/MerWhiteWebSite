import React, { useState, useRef, useEffect } from 'react';
import { ReactReader, EpubView } from 'react-reader';
import { Container } from 'react-bootstrap';
import useLocalStorageState from 'use-local-storage-state';
import { Contents, Rendition } from 'epubjs';

const Selections = ({ rend, selections, setSelections }) => {

  const deleteSelection = (selected) => {
    setSelections(selected);
  }

  return (

    <div className="col-md-10 border border-secondary bg-white min-height-100 p-2 rounded">
      <h4>Selections</h4>
      <ul class="list-unstyled border-top border-stone-400">
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
  )

}

export default Selections;
