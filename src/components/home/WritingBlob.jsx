import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


const WritingBlob = (props) => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/writing')
    return (
        <div className="writing-container">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF0066" d="M47.1,-48.3C58.8,-35.4,64.4,-17.7,63.3,-1.1C62.2,15.5,54.4,31.1,42.7,44.5C31.1,57.9,15.5,69.2,0.7,68.4C-14.1,67.7,-28.2,55,-41.2,41.6C-54.3,28.2,-66.4,14.1,-65.5,0.9C-64.6,-12.2,-50.6,-24.4,-37.5,-37.3C-24.4,-50.1,-12.2,-63.6,2.7,-66.3C17.7,-69.1,35.4,-61.1,47.1,-48.3Z" transform="translate(100 100)" />
            </svg>
        </div>

    )
};
// <div className="card text-center">
//     <div className="card-body">
//         <h2 className="card-title">WRITING</h2>
//         <p className="card-text">Check out my e-books!</p>
//         <button type='button' className="btn btn-primary" onClick={handleClick}>READ</button>



export default WritingBlob;
