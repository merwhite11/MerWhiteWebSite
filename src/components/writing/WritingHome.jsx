import React from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePage from '../pdf/single-page.js';
import {Document, Page} from "react-pdf";
import ReactPDF from '@react-pdf/renderer';
import BookList from './BookList.jsx';
import BookListTest from './BookListTest.jsx'
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const WritingHome = (props) => {
    //needs to be triggered by a user action
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/${path}`)
    }
    return (
        <div className="bookshelf-container">
            <h2 className="subpage-header">Book Shelf</h2>
            <BookListTest className="booklist"/>
        </div>

    )
};

export default WritingHome;
