import React from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YouTube from "react-youtube";
import DanceList from './DanceList.jsx'

// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class DanceHome extends React.Component {
    render() {
        // const options = {
        //     height: '315',
        //     width: '560',
        //     playerVars: {
        //         autoplay: 1,
        //         controls: 1
        //     }
        // }

        return (
        <div className="dance-page">
            <h1 className="header">Dance Videos</h1>
            <DanceList/>
        </div>
        )
    }
    _onReady(event) {
        event.target.pauseVideo();
    }
}

// const DanceHome = (props) => {
//     return (
//         <div className="col-md-4">
//             <div className="card">
//                 <div className="card-body">
//                     <h2 className="card-title">DANCE HOME</h2>
//                     <p className="card-text">Closer</p>
//                     <p className="card-text">Pool</p>
//                     <a href='#' className="btn btn-primary">WATCH</a>
//                 </div>
//              </div>
//         </div>

//     )
// };

export default DanceHome;
