import React, { useState } from 'react';

const ZoomComponent = ({zoomIn, zoomOut}) => {

  const handleZoomIn = () => {
    zoomIn();
  };

  const handleZoomOut = () => {
    zoomOut()
  };

  return (
      <div>
        <button onClick={handleZoomIn}>+</button>
        <div style={{border: '1px solid #ccc', overflow: 'hidden' }}> </div>
        <button onClick={handleZoomOut}>-</button>
      </div>
  );
};

export default ZoomComponent;