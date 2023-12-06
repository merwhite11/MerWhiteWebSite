import React from 'react';
import WritingContainer from './writing/WritingContainer.jsx';
import DanceContainer from './dance/DanceContainer.jsx';
import SinglePage from './pdf/single-page.js';

import ReactPDF from '@react-pdf/renderer';


import samplePDF from '../../dist/sample.pdf';

const Home = (props) => {
    return(
        <div className ="container-fluid">
          <div className="row justify-content-center">
            <WritingContainer></WritingContainer>
            <DanceContainer></DanceContainer>
            <SinglePage pdf={samplePDF} />
          </div>
        </div>
      );
}

export default Home;