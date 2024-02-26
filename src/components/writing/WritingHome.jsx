import React from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePage from '../pdf/single-page.js';
import {Document, Page} from "react-pdf";
import ReactPDF from '@react-pdf/renderer';
import BookList from './BookList.jsx'
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const WritingHome = (props) => {
    //needs to be triggered by a user action
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/${path}`)
    }
    return (
        <div className="subpage-container">
            <h2 className="display-4 text-center py-4">Book Shelf</h2>
            <div className="booklist">

            <BookList />
            </div>
        </div>

    )
};

export default WritingHome;
