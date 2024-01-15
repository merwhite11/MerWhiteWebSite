import React, { useState } from 'react'
import { ReactReader } from 'react-reader'


const TestPage = ({doc}) => {
  const [location, setLocation] = useState(null)
  const locationChanged = epubcifi => {
    setLocation(epubcifi)
  }
  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        url="../../docs/BobbyAndShiloh.epub"
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
      />
    </div>
  )
}

export default TestPage;