import React, { useState, useRef } from 'react';
import { ReactReader } from 'react-reader';
import { Container } from 'react-bootstrap'

import { DEMO_URL } from '../config';


const TestPage = ({ doc, title }) => {
  const epubUrl = process.env.PUBLIC_URL + `${doc}.epub`;
  const [location, setLocation] = useState(null);
  const [firstRenderDone, setFirstRenderDone] = useState(false)
  const renditionRef = useRef(null)
  // const locationChanged = epubcifi => {
  //   setLocation(epubcifi)
  // }
  const locationChanged = epubcifi => {
    if(!firstRenderDone) {
      console.log('first render')
      setLocation(localStorage.getItem('book-progress')); //returns null if item not found
      setFirstRenderDone(true);
      return;
    }
    console.log('second render')
    localStorage.setItem('book-progress', epubcifi);
    setLocation(epubcifi)
  }

  return (
    <div className="reader-container">

      <ReactReader className="reader"
        title={title}
        url={epubUrl}
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
        getRendition ={rendition => (renditionRef.current = rendition)}
      />
    </div>
  )
}

export default TestPage;