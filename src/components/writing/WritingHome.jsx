import React from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePage from '../pdf/single-page.js';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const WritingHome = (props) => {
    //needs to be triggered by a user action
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/${path}`)
    }
    return (
        <div className="content-home">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">WRITING HOME</h2>
                    <p className="card-text" onClick={(e)=>handleClick('grapevinediaries')}>The Grapevine Diaries</p>
                    <p className="card-text" onClick={(e)=>handleClick('cuento')}>Story Twice Told // Cuento Dos Veces Contado</p>
                    <a href='#' className="btn btn-primary">READ</a>
                </div>
             </div>
        </div>

    )
};

export default WritingHome;
