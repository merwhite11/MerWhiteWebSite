import React, { useState } from 'react';
import { ReactReader } from 'react-reader';

import {DEMO_URL} from '../config';

const epubUrl = process.env.PUBLIC_URL + 'BobbyAndShiloh_1.epub';

const TestPage = ({doc}) => {
  const [location, setLocation] = useState(null)
  const locationChanged = epubcifi => {
    setLocation(epubcifi)
  }
  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        url= {epubUrl}
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
      />
    </div>
  )
}

export default TestPage;