import React from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YouTube from "react-youtube";
import DanceList from './DanceList.jsx'

// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class DanceHome extends React.Component {
    render() {
        return (
        <div className="dance-floor-container">
            <h2 className="dance-floor-header">Dance Floor</h2>
            <DanceList className="dance-list"/>
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
