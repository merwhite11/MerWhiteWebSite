import React from 'react';
import WritingContainer from './writing/WritingContainer.jsx';
import DanceContainer from './dance/DanceContainer.jsx';
import PDFFile from './PDFFile.js';
import {Link} from 'react-router-dom';

const Home = (props) => {
    return(
        <div className ="container-fluid">
          <div className="row justify-content-center">
            <WritingContainer></WritingContainer>
            <DanceContainer></DanceContainer>
            <PDFFile></PDFFile>
          </div>
        </div>
      );
}

export default Home;