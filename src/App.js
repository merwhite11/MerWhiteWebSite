import React, {useState, useCallback} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

function App() {
    return (
        // react router
        <div>
        <Router>
            <Routes>
            <Route path="/" element={homePage} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/signup" element={<Dance />} />
            </Routes>
        </Router>
        </div>
    );
}
export default App;