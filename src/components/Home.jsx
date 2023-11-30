import React from 'react';
import WritingContainer from './writing/WritingContainer.jsx';
import DanceContainer from './dance/DanceContainer.jsx';
import {Link} from 'react-router-dom';

const Home = (props) => {
    return(
        <div className ="container-fluid">
          <div className="row justify-content-center">
            <WritingContainer></WritingContainer>
            <DanceContainer></DanceContainer>
          </div>
        </div>
      );
}

export default Home;