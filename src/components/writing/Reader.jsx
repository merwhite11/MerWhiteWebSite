import React, { useState, useRef, useEffect } from 'react';
import { ReactReader } from 'react-reader';

const Reader = ({ doc, title }) => {

  const epubUrl = process.env.PUBLIC_URL + `${doc}`;
  const rendition = useRef(null)
  const [firstRenderDone, setFirstRenderDone] = useState(false)
  const [location, setLocation] = useState(null);
  const [largeText, setLargeText] = useState(false)

  const locationChanged = epubcifi => {
    if (!firstRenderDone) {
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

    <div className="container">
      <div className="col-md-12 aspect-ratio aspect-ratio-3x4 overflow-hidden d-flex justify-content-center align-items-center">
        <div className="reader-container">
          < ReactReader
            title={title}
            url={epubUrl}
            location={location}
            locationChanged={(epubcfi) => setLocation(epubcfi)}
            getRendition={(r) => {
              rendition.current = r;
            }}
          />
        </div>
      </div>
    </div >
  )
};

export default Reader;