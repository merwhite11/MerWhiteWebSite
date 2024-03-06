import React from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Col} from 'react-bootstrap'
function BookTile({ cover, summary, path, title }) {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/${path}`)
    }

    return (
        <div className="container p-2 ">
            <div className="col-12 ">
                <div className="book-card d-flex">
                    <div className="thumbnail-div col-2 align-items-center">
                        <img className="img-thumbnail" src={cover} loading="lazy"></img>
                    </div>
                    <div className="col-9 d-flex flex-column px-2">
                        <h4 className="book-title text-lg-md" onClick={(e) => handleClick(path)}>{title}</h4>
                        <div className="book-summary p-text text-sm-md">{summary}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookTile;