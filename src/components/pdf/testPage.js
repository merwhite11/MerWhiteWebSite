// Import the main component
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import GVD from '../../docs/gvd.pdf'
import { pdfjs } from 'pdfjs-dist/build/pdf';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

function TestPage() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

      <Viewer fileUrl={GVD} />
    </Worker>
  )
}


export default TestPage;