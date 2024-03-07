import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from '../AppNavbar.jsx'
import YouTube from "react-youtube";
import DanceList from './DanceList.jsx'

const DanceHome = (props) => {

    return (
        <div className="subpage-container d-flex flex-column">
            <div className="background">

            <AppNavbar></AppNavbar>
            </div>
            <div className="display-4 text-center subpage-header background">Dance Floor</div>
            <DanceList className="text-center"/>
        </div>

    )
}

export default DanceHome;
