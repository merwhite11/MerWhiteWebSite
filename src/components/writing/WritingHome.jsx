import React from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePage from '../pdf/single-page.js';
import {Document, Page} from "react-pdf";
import ReactPDF from '@react-pdf/renderer';
import GVDCover from '../../docs/GVDCover.jpg'
import BlinkingCover from '../../docs/BlinkingCover.jpg'
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
            <h2 className="bookshelf-header">Book Shelf</h2>
            <div className="booklist">
                <div className="book-card">
                    <img className="book-thumbnail" height={280} width={280} src={GVDCover}></img>
                    <div className="book-info">
                        <h4 className="book-title" onClick={(e)=>handleClick('grapevinediaries')}>The Grapevine Diaries</h4>
                        <div className="book-summary">You've heard of a winemaker, but have you heard of a grapemaker? This story is the untold story of wine -- the story of the immigrant field laborers that work the vineyards and grow the grapes. Told from the perspective of an American woman who spent her mid-twenties working in vineyards alongside Mexican coworkers, The Grapevine Diaries is a series of anecdotes, journal entries, poems and mini-essays that provide a unique and candid insight into agriculture, immigration, and a job that goes beneath the skin and into the sticky juice within.</div>
                    </div>
                </div>
                <div className="book-card">
                    <img className="book-thumbnail" height={280} width={280} src={BlinkingCover}></img>
                    <div className="book-info">
                        <h4 className="book-title" onClick={(e)=>handleClick('cuento')}>Story Twice Told // Cuento Dos Veces Contado</h4>
                        <div className="book-summary">A memory-inspired short story written in English and Spanish. Explores themes of religion, childhood and the transformation of a story through the filters of time and language.</div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default WritingHome;
