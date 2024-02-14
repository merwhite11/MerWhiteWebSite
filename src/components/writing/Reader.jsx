import React, { useState, useRef, useEffect } from 'react';
import { ReactReader } from 'react-reader';
import useLocalStorageState from 'use-local-storage-state';


const Reader = ({ doc, title }) => {

  const epubUrl = process.env.PUBLIC_URL + `${doc}`;
  // const epubUrl = process.env.PUBLIC_URL + 'unzipped_GVD/META-INF'
  console.log(epubUrl)
  const renditionRef = useRef(null)
  const [firstRenderDone, setFirstRenderDone] = useState(false)
  // const [location, setLocation] = useState(null);
  const [location, setLocation] = useLocalStorageState('book-progress', 0);
  const [largeText, setLargeText] = useState(false)

  // const locationChanged = epubcifi => {
  //   if (!firstRenderDone) {
  //     console.log('first render')
  //     setLocation(localStorage.getItem('book-progress')); //returns null if item not found
  //     setFirstRenderDone(true);
  //     return;
  //   }
  //   console.log('second render')
  //   localStorage.setItem('book-progress', epubcifi);
  //   setLocation(epubcifi)
  // }
  return (

    <div className="container">
      <div className="col-md-12 aspect-ratio aspect-ratio-3x4 overflow-hidden d-flex justify-content-center align-items-center">
        <div className="reader-container">
          < ReactReader
            title={title}
            url={epubUrl}
            location={location}
            locationChanged={(loc) => {setLocation(loc)}}
            getRendition={(rendition) => {
              console.log('location', location)
              renditionRef.current = rendition;
              console.log(renditionRef.current)
            }}
          />
        </div>
      </div>
    </div >
  )
};

export default Reader;