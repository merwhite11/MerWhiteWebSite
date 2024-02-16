import React from 'react';
import Header from './header/Header.jsx';
// import ArrowDownLeft from './ArrowDownLeft.jsx';
// import ArrowDownRight from './ArrowDownRight.jsx';
import WritingContainer from './writing/WritingContainer.jsx';
import DanceContainer from './dance/DanceContainer.jsx';
import SinglePage from './pdf/single-page.js';
import Banner from '../Images/logo-HoverDiamond.jpg'
import Background from '../Images/background.jpg'
import ReactPDF from '@react-pdf/renderer';
import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Home = (props) => {
  return (
    <div className="outer-container">
      <div className="header-container">
        <div className="header">
        <img src={Banner} className='img-fluid' alt='Responsive image'></img>
        </div>
      </div>
      <div className="components-container">

        <WritingContainer></WritingContainer>
        <DanceContainer></DanceContainer>
        {/* <SinglePage /> */}
      </div>
    </div>
  );
}

export default Home;