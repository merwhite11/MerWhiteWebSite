import React, { useState } from 'react';
import { ReactReader } from 'react-reader';
import { Container } from 'react-bootstrap'

import { DEMO_URL } from '../config';


const TestPage = ({ doc }) => {
  const epubUrl = process.env.PUBLIC_URL + `${doc}.epub`;
  const [location, setLocation] = useState(null)
  const locationChanged = epubcifi => {
    setLocation(epubcifi)
  }
  return (
    <div className="reader-container">

      <ReactReader className="reader"
        url={epubUrl}
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
      />
    </div>
  )
}

export default TestPage;