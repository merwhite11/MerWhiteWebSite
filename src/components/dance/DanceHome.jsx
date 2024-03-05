import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from '../AppNavbar.jsx'
import YouTube from "react-youtube";
import DanceList from './DanceList.jsx'

// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class DanceHome extends React.Component {
    render() {
        return (
        <div className="subpage-container background d-flex flex-column justify-content-center align-items-center">
            <AppNavbar></AppNavbar>
            <h2 className="display-4 text-center py-4">Dance Floor</h2>
            <DanceList/>
        </div>
        )
    }
    _onReady(event) {
        event.target.pauseVideo();
    }
};

export default DanceHome;
