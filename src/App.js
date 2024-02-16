import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.jsx';
import Home_Test from './components/Home_Test.jsx';
import Contact from './components/contact/Contact.jsx';
import DanceHome from './components/dance/DanceHome.jsx';
import WritingHome from './components/writing/WritingHome.jsx';
import SinglePage from './components/pdf/single-page.js';
import DoublePage from './components/pdf/double-page.js';
import TestPage from './components/pdf/test-page';
import Reader from './components/writing/Reader.jsx'
// import Reader from './components/pdf/example'
import EpubViewer from './components/pdf/test-page-2';
import GVD from './docs/gvd.pdf';
// import Bobby from './docs/Bobby.pdf';
// import BobbyAndShiloh from './docs/BobbyAndShiloh.epub'

function App() {
  return (
    // <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/writing" element={<WritingHome />} />
        <Route path="/dance" element={<DanceHome />} />
        <Route path ="/grapevinediaries" element={<Reader doc={'unzipped_GVD/META-INF'} title={'The Grapevine Diaries'}/>} />
        <Route path ="/cuento" element={<Reader doc={'Blinking.epub'} title={'Story Twice Told // Cuento Dos Veces Contado'}/>} />
        <Route path ="/bobby" element={<Reader doc={'BobbyAndShiloh.epub'} title={'Bobby And Shiloh Save The Night'}/>} />
        <Route path ="/test" element={<Reader doc={'unzipped_Alice/META-INF'} title={'Alice in Wonderland'}/>} />
        <Route path ="/contact" element={<Contact />} />
      </Routes>
    </div>
    // </BrowserRouter>
  )
}

export default App;