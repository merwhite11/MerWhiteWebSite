import React from 'react';
import Header from './header/Header.jsx';
import ArrowDownLeft from './ArrowDownLeft.jsx';
import ArrowDownRight from './ArrowDownRight.jsx';
import WritingContainer from './writing/WritingContainer.jsx';
import DanceContainer from './dance/DanceContainer.jsx';
import SinglePage from './pdf/single-page.js';

import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import ReactPDF from '@react-pdf/renderer';
import {pdfjs} from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();



const Home = (props) => {
    return(
        <div className ="outer-container">
          <Header></Header>
          <div className="components-container">
            <div className="arrows-container">
            <ArrowDownLeft></ArrowDownLeft>
            <ArrowDownRight></ArrowDownRight>
            </div>
            <WritingContainer></WritingContainer>
            <DanceContainer></DanceContainer>
            {/* <SinglePage /> */}
          </div>
        </div>
      );
}

export default Home;