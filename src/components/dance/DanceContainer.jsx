import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const DanceContainer = (props) => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/dance')
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">DANCE</h2>
                    <p className="card-text">Watch my dance vids!</p>
                    <button type='button' className="btn btn-primary" onClick={handleClick}>WATCH</button>
                </div>
             </div>
        </div>

    )
};

export default DanceContainer;