import React from 'react';
import Header from './header/Header.jsx';
import Header_Old from './header/Header_Old.jsx'
// import ArrowDownLeft from './ArrowDownLeft.jsx';
// import ArrowDownRight from './ArrowDownRight.jsx';
import WritingContainer from './writing/WritingContainer.jsx';
import DanceContainer from './dance/DanceContainer.jsx';
import SinglePage from './pdf/single-page.js';
import WritingBlob from './WritingBlob.jsx';
import DanceBlob from './DanceBlob.jsx';


import ReactPDF from '@react-pdf/renderer';
import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Home_Test = (props) => {
  return (
    <div className="outer-container">
      <Header_Old></Header_Old>
      <div className="components-container">

        {/* <div className="arrows-container">
          <ArrowDownLeft></ArrowDownLeft>
          <ArrowDownRight></ArrowDownRight>
        </div> */}
        <WritingBlob></WritingBlob>
        <DanceBlob></DanceBlob>
      </div>
    </div>
  );
}

export default Home_Test;