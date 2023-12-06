import React from 'react';
import WritingContainer from './writing/WritingContainer.jsx';
import DanceContainer from './dance/DanceContainer.jsx';
import SinglePage from './pdf/single-page.js';
import {Link} from 'react-router-dom';

import samplePDF from '../docs/sample.pdf';

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