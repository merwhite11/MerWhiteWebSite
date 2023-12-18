import React from 'react';
import Header from './header/Header.jsx'
import WritingContainer from './writing/WritingContainer.jsx';
import DanceContainer from './dance/DanceContainer.jsx';
import SinglePage from './pdf/single-page.js';

import ReactPDF from '@react-pdf/renderer';
import {pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


import samplePDF from '../../dist/sample.pdf';

const Home = (props) => {
    return(
        <div className ="outer-container">
          <Header></Header>
          <div className="components-container">
            <WritingContainer></WritingContainer>
            <DanceContainer></DanceContainer>
            {/* <SinglePage /> */}
          </div>
        </div>
      );
}

export default Home;