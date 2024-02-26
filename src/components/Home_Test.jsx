import React from 'react';
import Header from './header/Header.jsx';
import Header_Test from './header/Header_Test.jsx'
import WritingContainer from './writing/WritingContainer.jsx';
import DanceContainer from './dance/DanceContainer.jsx';
import SinglePage from './pdf/single-page.js';
import WritingBlob from './WritingBlob.jsx';
import DanceBlob from './DanceBlob.jsx';
import Home_Body from './Home_Body.jsx'


import ReactPDF from '@react-pdf/renderer';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Home_Test = (props) => {
  return (
    <div className="outer-container">
      <Header_Test></Header_Test>
      <div className="components-container">
        <Home_Body></Home_Body>
      </div>
    </div>
  );
}

export default Home_Test;