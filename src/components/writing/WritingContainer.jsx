import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {Document, Page} from "react-pdf";
import ReactPDF from '@react-pdf/renderer';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


const WritingContainer = (props) => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/writing')
    return (
        <div className="writing-container float-left">
            <div className="card text-center">
                <div className="card-body">
                    <h2 className="card-title">WRITING</h2>
                    <p className="card-text">Check out my e-books!</p>
                    <button type='button' className="btn btn-primary" onClick={handleClick}>READ</button>
                </div>
             </div>
        </div>

    )
};

export default WritingContainer;
