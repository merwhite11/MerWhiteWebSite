import React, { useState, useRef, useEffect } from 'react';
import { ReactReader, EpubView } from 'react-reader';
import { Container } from 'react-bootstrap';
import useLocalStorageState from 'use-local-storage-state';
import { Contents, Rendition } from 'epubjs'

import { DEMO_URL } from '../config';


const TestPage = ({ doc, title }) => {

  const epubUrl = process.env.PUBLIC_URL + `${doc}`;
  const [location, setLocation] = useLocalStorageState('book-loc', 0);
  const rendition = useRef<Rendition | undefined>(undefined)
  // const [largeText, setLargeText] = useState(false);
  const [size, setSize] = useState(100)

  const changeSize = newSize => {
    setSize(newSize)
  }

  useEffect(() => {
    console.log(rendition)
    rendition.current?.themes.fontSize(`${size}%`)
  }, [size])

  return (
    <div className="reader-container">
      <div className="font-size-btn">
        <button onClick={() => changeSize(Math.max(80, size - 10))}>-</button>
        <span>Current size: {size}%</span>
        <button onClick={() => changeSize(Math.max(80, size + 10))}>+</button>
      </div>

      < ReactReader className="reader"
        title={title}
        url={epubUrl}
        location={location}
        locationChanged={(loc) => setLocation(loc)}

      />
    </div>
    // </div>
    // </div>
  )
}

export default TestPage;