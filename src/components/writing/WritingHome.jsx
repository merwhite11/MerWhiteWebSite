import React from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const WritingHome = (props) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">WRITING HOME</h2>
                    <p className="card-text">The Grapevine Diaries</p>
                    <p className="card-text">Story Twice Told // Cuento Dos Veces Contado</p>
                    <a href='#' className="btn btn-primary">READ</a>
                </div>
             </div>
        </div>

    )
};

export default WritingHome;
