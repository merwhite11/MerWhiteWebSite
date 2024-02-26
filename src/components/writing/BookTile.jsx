import React from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function BookTile({cover, summary, path, title}) {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/${path}`)
    }

  return (
    <div className="book-tile">
        <div className="book-card">
            <img className="book-thumbnail" height={200} width={'auto'} src={cover} loading="lazy"></img>
                <div className="book-info">
                    <h4 className="book-title" onClick={(e)=>handleClick(path)}>{title}</h4>
                    <div className="book-summary">{summary}</div>
                </div>
        </div>
    </div>
    )
}

export default BookTile;