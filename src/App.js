import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.jsx'
import DanceHome from './components/dance/DanceHome.jsx';
import WritingHome from './components/writing/WritingHome.jsx'
import SinglePage from './components/pdf/single-page.js'

function App() {
  return (
    // <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/writing" element={<WritingHome />} />
        <Route path="/dance" element={<DanceHome />} />
        <Route path ="/grapevinediaries" element={<SinglePage/>} />
      </Routes>
    </div>
    // </BrowserRouter>
  )
}

export default App;