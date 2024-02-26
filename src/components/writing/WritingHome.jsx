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
        <div className="outer-container text-center">
             <h2 className="display-4 mt-5">Book Shelf</h2>
            {/* <h2 className="col-md-12 text-center py-4 subpage-header">Book Shelf</h2> */}
            <BookList className="booklist mx-7"/>
        </div>

    )
};

export default WritingHome;
