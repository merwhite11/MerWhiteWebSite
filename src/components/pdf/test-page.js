import React, { useState, useRef, useEffect } from 'react';
import { ReactReader, EpubView } from 'react-reader';
import { Container } from 'react-bootstrap';
import useLocalStorageState from 'use-local-storage-state';

import { DEMO_URL } from '../config';


const TestPage = ({ doc, title }) => {

  const epubUrl = process.env.PUBLIC_URL + `${doc}`;
  const [location, setLocation] = useLocalStorageState('book-loc', 0)

  return (
    <div className="reader-container">

      <ReactReader className="reader"
        title={title}
        url={epubUrl}
        location={location}
        locationChanged = {(loc) => setLocation(loc)}
      />
    </div>
  )
}

export default TestPage;