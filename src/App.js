import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import {Switch} from 'react-router-dom'
import Home from './components/home/Home.jsx';
import Contact from './components/contact/Contact.jsx';
import DanceHome from './components/dance/DanceHome.jsx';
import WritingHome from './components/writing/WritingHome.jsx';
import Reader from './components/writing/Reader.jsx'

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<WritingHome />} />
        <Route path="/dance" element={<DanceHome />} />
        <Route path ="/grapevinediaries" element={<Reader doc={'unzipped_GVD'} title={'The Grapevine Diaries'}/>} />
        <Route path ="/cuento" element={<Reader doc={'unzipped_Cuento/META-INF'} title={'Story Twice Told // Cuento Dos Veces Contado'}/>} />
        <Route path ="/bobby" element={<Reader doc={'unzipped_BobbyAndShiloh/META-INF'} title={'Bobby And Shiloh Save The Night'}/>} />
        <Route path ="/test" element={<Reader doc={'unzipped_Alice/META-INF'} title={'Alice in Wonderland'}/>} />
        <Route path ="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;