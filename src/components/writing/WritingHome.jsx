import React from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
import BookList from './BookList.jsx';
import AppNavbar from '../AppNavbar.jsx';


const WritingHome = (props) => {
    //needs to be triggered by a user action
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/${path}`)
    }
    return (
        <div className="subpage-container background d-flex flex-column">
            <AppNavbar></AppNavbar>
            <h2 className="display-4 text-center py-4 subpage-header">Book Shelf</h2>
            <div className="booklist">
            <BookList/>
            </div>
        </div>

    )
};

export default WritingHome;
