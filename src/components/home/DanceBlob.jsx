import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DanceButton from '../Images/dancing-button.png'
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


const DanceBlob = (props) => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/writing')
    return (
        <div className="dance-container">
            <img src={DanceButton} className="dance-button"/>
        </div>

    )
};
// <div className="card text-center">
//     <div className="card-body">
//         <h2 className="card-title">WRITING</h2>
//         <p className="card-text">Check out my e-books!</p>
//         <button type='button' className="btn btn-primary" onClick={handleClick}>READ</button>



export default DanceBlob;
